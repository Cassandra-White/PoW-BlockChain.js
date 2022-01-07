const crypto = require("crypto"), SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");

class Block {
    constructor( timestamp, lastHash, hash, data = [], nonce, difficulty){
            this.timestamp = timestamp;
            this.lastHash = lastHash;
            this.hash = hash;
            this.data = data;
            this.nonce = nonce;
            this.difficulty = difficulty;
    };

    static firstBlock(){
        // return new this('firstBlock time','----',SHA256('C455AdrA-Wh173'),[],0,4);
        return new this('firstBlock time','----',SHA256('C455AdrA-Wh173'),[],0,4);
    };

    static mineBlock(lastBlock,data){

        let hash;
        let timestamp;
        const lastHash = lastBlock.hash;

        let { difficulty } = lastBlock;

        let nonce = 0;
        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty(lastBlock,timestamp);
            hash = Block.hash(timestamp,lastHash,data,nonce,difficulty);
        } while(hash.substring(0,difficulty) !== '0'.repeat(difficulty));

        return new this(timestamp,lastHash,hash,data,nonce,difficulty);
    }


    static adjustDifficulty(lastBlock,currentTime){
        let { difficulty } = lastBlock; 
        difficulty = lastBlock.timestamp + 3000 > currentTime ? difficulty + 1 : difficulty - 1; 

        return difficulty; 
    }

    static hash(timestamp,lastHash,data,nonce,difficulty){
        return SHA256(JSON.stringify(timestamp) + lastHash + JSON.stringify(data) + nonce + difficulty);
    }

    static getHash(block) {
            const { timestamp, lastHash, data, nonce,difficulty } = block;
         return SHA256(JSON.stringify(timestamp) + lastHash + JSON.stringify(data) + nonce + difficulty);
     
    }


};


module.exports = Block;

// const block = new Block();


// block.addBlock(["je suis un test", 1, "3 datas"]);
// block.addBlock(["je suis un second test", 2, "là aussi" ]);

// block.addBlock(["popo", 65, "Sprout"]);
// block.addBlock(["argent :", 20, "€" ]);
//  console.log(block.chain[1]);
// block.chain[1].data = ["0"];

// console.log(block.chain);

// console.log(block.isValidChain());


