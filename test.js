const {Blockchain} = require('./blockchain/Blockchain');
const {Transaction} = require('./blockchain/Transaction');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('a44c7281126c96ba1d01fbaca6bc24b8d99155f5554a6844eb58b9fed8422c1d');
const publicKeyWallet = myKey.getPublic('hex');


const blockchain = new Blockchain(0);

// console.log(blockchain.chain[1]);

// console.log(blockchain.chain[0]);
// console.log(blockchain.chain[0].calculateHash());

const transac1 = new Transaction(publicKeyWallet, "SecondpublicKeyWallet", 50);

// console.log("transaction valid :", blockchain.isChainValid());


transac1.signTransaction(myKey);
blockchain.addTransaction(transac1);


console.log("transaction valid :", blockchain.isChainValid());
console.log('\n Commence à miner ...');

console.log("transaction valid :", blockchain.isChainValid());
// console.log('\nLa balance du mineur est de : ', blockchain.getBalanceOfAddress(publicKeyWallet));


blockchain.miningPendingTransactions(publicKeyWallet);
//  blockchain.chain[1].transactions[0].amount = 1;
console.log("\ntransaction valid :", blockchain.isChainValid());

console.log('La balance du mineur est de : ', blockchain.getBalanceOfAddress(publicKeyWallet));