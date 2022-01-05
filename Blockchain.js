const Block = require('./Block');

class Blockchain {
    constructor(){
        this.chain = [Block.firstBlock()];
    }

    addBlock(data){
        const block = Block.mineBlock(this.chain[this.chain.length-1],data);
        this.chain.push(block); 
        return block;
    }

    isValidChain(){
         let i = 1;

        if(JSON.stringify(this.chain[0]) !== JSON.stringify(Block.firstBlock()))
            return false

            while ( i < this.chain.length) {
                const currentBlock = this.chain[i];
                const prevBlock = this.chain[i-1];
    
                if (currentBlock.hash !== currentBlock.getHash() || prevBlock.hash !== currentBlock.lastHash) {
                    return false;
                }
                i++;
            }

        return true;
    }

    
}

module.exports = Blockchain;

// const block = new Blockchain();


// block.addBlock(["je suis un test", 1, "3 datas"]);
// block.addBlock(["je suis un second test", 2, "là aussi" ]);

// block.addBlock(["popo", 65, "Sprout"]);
// block.addBlock(["argent :", 20, "€" ]);
//  console.log(block.chain[1]);
// block.chain[1].data = ["0"];

// console.log(block.chain);

// console.log(block.isValidChain());


