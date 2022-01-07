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

    isValidChain(chain){
         let i = 1;

        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.firstBlock()))
            return false

            while ( i < chain.length) {
                const currentBlock = chain[i];
                const prevBlock = chain[i-1];
                // console.log(Block.firstBlock());
                if (currentBlock.hash !== Block.getHash(currentBlock) || prevBlock.hash !== currentBlock.lastHash) {
                    return false;
                }
                i++;
            }

        return true;
    }

    replaceChain(newChain){
        if ( newChain.length <= this.chain.length){
            console.log("Error : La chaine est trop courte par rapport à l'actuel. Aucun changement")
            return;
        }
        else if (!this.isValidChain(newChain)) {
            console.log("Error : La chaine n'est pas valide. Aucun changement.");
            return
        }

        console.log("Remplacement de la chaine actuel par la nouvelle")
        this.chain = newChain;
    };

}

module.exports = Blockchain;

// const block = new Blockchain();


// block.addBlock(["je suis un test", 1, "3 datas"]);
// block.addBlock(["je suis un second test", 2, "là aussi" ]);
// const chain2 = block;

// chain2.addBlock(["popo", 65, "Sprout"]);
// chain2.addBlock(["argent :", 20, "€" ]);


// console.log(chain2.chain);
// console.log("taille block :",block.chain.length);
// console.log("taille chaine2 :",chain2.chain.length);

// console.log(block.replaceChain(chain2.chain));

// console.log(block.isValidChain(block.chain));

