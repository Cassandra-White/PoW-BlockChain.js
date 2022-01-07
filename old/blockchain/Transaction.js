const crypto = require("crypto"), SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");
const { v4: uuidv4 } = require('uuid');
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

class Transaction {

    constructor(){
        this.id = uuidv4();
        this.input = null;
        this.outputs = [];
    }

    static newTransaction(senderWallet, recipient, amount){
        if (amount > senderWallet.balance){
            console.log("Error : Montant supérieur au total du Wallet");
            return;
        }

        return this.transactionWithOutputs(senderWallet, [
            {amount: senderWallet.balance - amount, address: senderWallet.publicKey},
            {amount: amount, address: recipient}
        ]);

    }

    static transactionWithOutputs(senderWallet, outputs){
        const transaction = new this();
        transaction.outputs.push(...outputs);
        Transaction.signTransaction(transaction, senderWallet);
        return transaction;
    }

    static signTransaction(transaction, senderWallet){
        transaction.input = {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature : senderWallet.sign(SHA256(JSON.stringify(transaction.outputs)))
        }
    }

    static verifySignature(publicKey,signature,dataHash){
        return ec.keyFromPublic(publicKey,'hex').verify(dataHash,signature);
    }

    static verifyTransaction(transaction){
        return this.verifySignature(
            transaction.input.address,
            transaction.input.signature,
            SHA256(JSON.stringify(transaction.outputs))
        )
    }

    update(senderWallet, recipient, amount){
        const senderOutput = this.outputs.find(output => output.address === senderWallet.publicKey);

        if(amount > senderWallet.amount){
            console.log("Error : Montant supérieur au total du Wallet")
            return;
        }
        
        senderOutput.amount = senderOutput.amount - amount;
        this.outputs.push({amount: amount, address: recipient});
        Transaction.signTransaction(this,senderWallet);

        return this;
    }

}


module.exports = Transaction ;