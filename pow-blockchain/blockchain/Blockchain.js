const {Block} = require('./Block');
const {Transaction} = require('./Transaction');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');





class Blockchain {
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock(){
        return new Block(Date.parse("03-07-2020"), [], '0x00000000000000000000000000000000000000000000000000000000000000');
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    miningPendingTransactions(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingTransactions, this.getLastBlock().hash);
        //  console.log(block);
        block.mineBlock(this.difficulty);
        
        console.log('Block Miné avec succés');
        // console.log(block);
        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];

    }

    addTransaction(transaction){

        if(!transaction.fromAddress || !transaction.toAddress){
            throw new Error('Adresses manquante')
        }

        if(!transaction.isValid()){
            throw new Error('Transaction non valide')
        }

        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address){
        let balance = 0;

        for(const block of this.chain){
            // console.log(block.transactions);
            for(const trans of block.transactions){
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }
                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }
        return balance
    }
 


    isChainValid(){
        let i = 1;
        const realGenesis = JSON.stringify(this.createGenesisBlock());

        if (realGenesis !== JSON.stringify(this.chain[0])) {
          return false;
        }

        // console.log("Je rentre");
        while(i < this.chain.length){

            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            // console.log("\n\n\n0 CurrentBlock  :", currentBlock.calculateHash());
            // console.log("2 CurrentBlock  :", currentBlock.hash);
            
            

            if(!currentBlock.hasValidTransactions()){
                return false;
            }

            // console.log("\n\nPremier Checkpoint");

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            // console.log("Second Checkpoint");

            // console.log("\n\n2 PreviousHash   :", previousBlock.hash);
            // console.log("1 PreviousBlock  :", previousBlock.calculateHash());
            

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
            // console.log("Troisième Checkpoint");

            i++;
        }
        return true;
    }

}

module.exports.Blockchain = Blockchain;
