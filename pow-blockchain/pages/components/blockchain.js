import React, { Component } from 'react';
import BlockChainCard from './BlockchainCard'
import styles from '../../styles/Home.module.css'
import {Blockchain} from '../../../blockchain/Blockchain';
import {Block } from '../../../blockchain/Block';
import EC from 'elliptic';
import TransactionTab from './TransactionsTab';
import { Button, Card, Image, Grid } from 'semantic-ui-react'

import { Table } from 'semantic-ui-react'

export default class extends Component {
    BlockchainInstance = new Blockchain();
    walletKeys = [];


    
  constructor() {
    super();
    this.BlockchainInstance.difficulty = 2;
    

    this.generateWalletKeys();
    this.BlockchainInstance.miningPendingTransactions("mineur-address");
    this.BlockchainInstance.miningPendingTransactions("mineur-address");

    this.BlockchainInstance.miningPendingTransactions("mineur-address");
    this.BlockchainInstance.miningPendingTransactions("mineur-address");

    this.BlockchainInstance.miningPendingTransactions("mineur-address");
    this.BlockchainInstance.miningPendingTransactions("mineur-address");
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

  state = {
    blocks: this.getBlocks(),
    selectedBlock : 0,
    activeItem : 0,
    
}
  
handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
   
      // console.log(this.state.selectedBlock);
    return (
        <div className={styles.container}>
          <Grid  >
          <Grid.Row>
        {
            this.state.blocks.map((block, index) => {
               return (
                
                   
                    <Grid.Column width={5}>
                    <Card style={{margin : "0.5rem"}}  
                    key={index}
                    name={index}
                    active={this.state.activeItem === 'editorials'}
                    onClick={this.handleItemClick}
                    
                    >
                      <BlockChainCard key={index} block={block} index={index} />
                    </Card>
                    </Grid.Column>
                )
            })
        }
        </Grid.Row>
      </Grid>
    <Table celled>
        
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Block</Table.HeaderCell>
            <Table.HeaderCell>Depuis</Table.HeaderCell>
            <Table.HeaderCell>A</Table.HeaderCell>
            <Table.HeaderCell>Montant</Table.HeaderCell>
            <Table.HeaderCell>Timestamp</Table.HeaderCell>
            <Table.HeaderCell>Valide ?</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
        
                    <TransactionTab
                      block={this.state.blocks[this.state.activeItem]}
                      index='0'
                      isValid="0"
                    />
             
    </Table.Body>
    </Table>
        

      
      </div>
    );
  }
}