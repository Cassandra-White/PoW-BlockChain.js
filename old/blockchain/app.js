const express = require('express')
const bodyParser = require('body-parser')
const Blockchain = require('./Blockchain');
const P2pserver = require('./p2pServer');
const Miner = require('./miner');
const TransactionPool = require('./transaction-pool');
const Wallet = require('./Wallet');
const HTTP_PORT = process.env.HTTP_PORT || 3001
const app = express()


var jsonParser = bodyParser.json();
const blockchain = new Blockchain();
const p2pserver = new P2pserver(blockchain);
// create a new wallet
const wallet = new Wallet();
const transactionPool = new TransactionPool();
// create a miner
const miner = new Miner(blockchain,transactionPool,wallet,p2pserver);


app.get('/blocks', (req, res) => {
    res.send(blockchain.chain);
})

app.post('/addblock', jsonParser, (req, res) => {
    // console.log(req.body);
        const block = blockchain.addBlock(req.body.data);
        // console.log("Nouveau Block :", block);
        p2pserver.syncChain();
        res.redirect("/blocks");
})

// api to start mining
app.get('/mine-transactions',(req,res)=>{
    const block = miner.mine();
    console.log(`New block added: ${block.toString()}`);
    res.redirect('/blocks');
})

// api to view transaction in the transaction pool
app.get('/transactions',(req,res)=>{
    res.json(transactionPool.transactions);
});


// create transactions
app.post('/transact',(req,res)=>{
    const { recipient, amount } = req.body;
    const transaction = wallet.createTransaction(recipient, amount,blockchain,transactionPool);
    p2pserver.broadcastTransaction(transaction);
    res.redirect('/transactions');
});

// get public key
app.get('/public-key',(req,res)=>{
    res.json({publicKey: wallet.publicKey});
})

app.listen(HTTP_PORT, () => {
  console.log(`Example app listening at http://localhost:${HTTP_PORT}`)
})

p2pserver.listen();