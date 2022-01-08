import React, { Component } from 'react';
import EC from 'elliptic';
import {Blockchain} from '../../../blockchain/Blockchain';

class BlockChain extends Component {
    constructor(props) {
        super(props);

        this.BlockchainInstance = new Blockchain();
        this.walletKeys = [];
        this.BlockchainInstance.difficulty = 2;
        this.generateWalletKeys();
        this.BlockchainInstance.miningPendingTransactions("mineur-address");
        this.BlockchainInstance.miningPendingTransactions("mineur-address");
    
        this.BlockchainInstance.miningPendingTransactions("mineur-address");
        this.BlockchainInstance.miningPendingTransactions("mineur-address");
    
        this.BlockchainInstance.miningPendingTransactions("mineur-address");
        this.BlockchainInstance.miningPendingTransactions("mineur-address");

        this.state = {
            blocks: this.getBlocks(),
            selectedBlock : 0,
            activeItem : 0,
            difficulty : this.BlockchainInstance.difficulty
          };

    }

    getBlocks = () => {
        return this.BlockchainInstance.chain;
    }

    generateWalletKeys(){
        const ec = new EC.ec("secp256k1");
        const key = ec.genKeyPair();
  
        this.walletKeys.push({
            keyObj: key,
            publicKey : key.getPublic('hex'),
            privateKey : key.getPrivate('hex'),
            
        });
  
    }

    render() {
        return (
            <div>
                <h1>block</h1>
            </div>
        );
    }
}

const blockchain = new BlockChain;


export default blockchain;