import React, { Component } from 'react';
import BlockChainCard from './BlockCard'
import styles from '../../styles/Home.module.css'
import {Blockchain} from '../../blockchain/Blockchain';
import {Block } from '../../blockchain/Block';
import EC from 'elliptic';
import TransactionTab from './TransactionsTab';
import { Button, Card, Image, Grid, Transition } from 'semantic-ui-react'

import { Table } from 'semantic-ui-react'

import Params from './Params';
import Informations from './Informations';

export default class extends Component {
   
   


    
  constructor() {
    super();
    this.BlockchainInstance = new Blockchain();
    this.Transaction = new Transition();
    this.bloblo = new Blockchain();
    
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
      bloblos : this.getBloBlo(),
      difficulty : this.BlockchainInstance.difficulty
    };


    
  }

  getBlocks = () => {
    
      return this.BlockchainInstance.chain;
  }


  getBloBlo = () => {
    return this.bloblo.chain;
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

  
handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
  //  console.log("BLBLO !!!!!!!",this.state.blocks);
      // console.log(this.state.selectedBlock);
    return (
     <>

    <Card fluid style={{padding:'1rem'}}>
      

      <Button onClick={async e => { e.preventDefault();console.log(
       
      )}}>CONSOLE LOG</Button>
     </Card>
     <Card fluid style={{padding:'1rem'}}>
     <Params  BlockchainInstance={this.BlockchainInstance} difficulty={this.BlockchainInstance.difficulty}/>

     </Card>
        <div className={styles.container}>
          <Grid  blockchain={this.BlockchainInstance}>
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

      </>
    );
  }
}