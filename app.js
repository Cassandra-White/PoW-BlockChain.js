const express = require('express')
var bodyParser = require('body-parser')
const Blockchain = require('./Blockchain');
const app = express()
const port = 3001
var jsonParser = bodyParser.json();
const blockchain = new Blockchain();



app.get('/blocks', (req, res) => {
    res.send(blockchain.chain);
})

app.post('/addblock', jsonParser, (req, res) => {
    console.log(req.body);
        const block = blockchain.addBlock(req.body.data);
        console.log("Nouveau Block :", block);

        res.redirect("/blocks");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})