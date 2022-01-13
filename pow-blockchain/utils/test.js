const { Blockchain } = require("../blockchain/Blockchain");
const { Transaction } = require("../blockchain/Transaction");

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "a44c7281126c96ba1d01fbaca6bc24b8d99155f5554a6844eb58b9fed8422c1d"
);
const publicKeyWallet = myKey.getPublic("hex");

const blockchain = new Blockchain(0);

const transac1 = new Transaction(publicKeyWallet, "SecondpublicKeyWallet", 50);

transac1.signTransaction(myKey);
blockchain.addTransaction(transac1);

blockchain.miningPendingTransactions(publicKeyWallet);
