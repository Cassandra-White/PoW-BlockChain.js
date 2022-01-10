import React, { Component } from "react";
import Informations from "./Informations";
import { Button, Grid, Form, Input, Transition, Message, Icon } from "semantic-ui-react";
import Information from "./Informations";

import { Transaction } from "../../../blockchain/Transaction";
import TransactionTab from "./TransactionsTab";
import PendingTransactions from "./PendingTransaction";

export default class Params extends Component {
  // export default function Params(props) {

  constructor(props) {
    super(props);
    this.TransactionInstance = new Transaction();
    this.pendingTransactions = this.props.blockchain.getPendingTransactions() 
    this.state = {
      walletKeys: this.props.blockchain.walletKeys[0],
      newTransaction: {},
      fromAddress:'',
      toAddress: '',
      amount: 0,
      pendingTransactions : this.pendingTransactions,
      loading : false,
      messageCreateTransaction : '',
      messageMiningPendingTransactions : ''
    };
    // console.log(this.TransactionInstance);
  }


  createTransaction = () => {
    this.setState({messageCreateTransaction : ''});
    if(this.state.fromAddress == '' || this.state.toAddress == ''){
      this.setState({messageCreateTransaction : 'Toutes les addresses de la transaction ne sont pas défini.\nInfo : Si vous n\'avez pas d\'addresse vous pouvez en créer une dans la section Wallet'});
      return
    }
      
    this.TransactionInstance.fromAddress = this.state.walletKeys.publicKey;
    this.TransactionInstance.toAddress = this.state.toAddress;
    this.TransactionInstance.amount = this.state.amount;
    this.TransactionInstance.signTransaction(this.state.walletKeys.keyObj);
    console.log(this.TransactionInstance);
    this.props.blockchain.BlockchainInstance.addTransaction(this.TransactionInstance);

    this.TransactionInstance = new Transaction();
    this.setState({pendingTransactions : this.props.blockchain.getPendingTransactions()})
  }

  miningPendingTransactions = async ()=> {
    try {
      this.setState({loading: true, messageMiningPendingTransactions: ''});
    } catch (error) {
      console.log(error)
    }
   
    this.props.blockchain.miningPendingTransactions()
    this.setState({pendingTransactions : this.props.blockchain.getPendingTransactions()});
    this.props.getBlocks()
    this.setState({loading: false,  messageMiningPendingTransactions: 'Le Block à été miné avec succès, vous le retrouverez dans La Blockchain'});
    

}

onClickGetPendingTransactions = () => {
    
  this.setState({pendingTransactions : this.props.blockchain.getPendingTransactions()})



}

  // onSubmitAddTransaction = async (event) => {
  //   console.log(this.props.blockchain.BlockchainInstance)
  // this.props.blockchain.BlockchainInstance.
  // console.log(this.props.blockchain.BlockchainInstance.difficulty);
  // };

  render() {
   console.log("IIIIIICCCCCCCIIIII",this.state.loading);
    // console.log(this.state.walletKeys.publicKey);
    
    return (
      <>
        <div>
        <Grid style={{marginBottom:"2rem"}}>
            <Grid.Row>
              <Grid.Column width={8}>
                <h2>Créer une Transaction :</h2>
                <p>Envoyez de l'argent à un autre compte</p>
              </Grid.Column>
              <Grid.Column width={8}>
                <h2>Créer un Wallet :</h2>
                <p>Créer vos Nouvelles Clés</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid style={{marginBottom:"2rem"}}>
            <Grid.Row>
              <Grid.Column width={8}>
                <Form onSubmit={this.createTransaction}>
                <Grid>
                   <Grid.Row>
                  <Grid.Column width={6}>
                  <Form.Field required>
                    <label>Depuis l'addresse :</label>
                    
                    <Input
                    
                      style={{ marginTop: "0.5rem", width:'10rem' }}
                      label="Addresse"
                      labelPosition="left"
                      placeholder={this.state.fromAddress}
                      onChange={(event) =>
                        this.setState({
                          fromAddress: event.target.value,
                        })
                      }
                    />
                  </Form.Field>

                  </Grid.Column>
                  <Grid.Column width={6} style={{marginBottom:'2rem'}}>
                  <Form.Field required>
                    <label>À l'addresse :</label>
                    <Input
                      style={{ marginTop: "0.5rem",  width:'10rem' }}
                      label="Addresse"
                      labelPosition="right"
                      placeholder={this.state.toAddress}
                      onChange={(event) =>
                        this.setState({
                          toAddress: event.target.value,
                        })
                      }
                    />
                  </Form.Field>
                  </Grid.Column>
                  <Grid.Column width={6}>
                  <Form.Field required>
                    <label>Montant de la transaction:</label>
                    <Input
                      focus
                      type='number'
                      style={{ marginTop: "0.5rem" }}
                      label="Montant"
                      labelPosition="right"
                      placeholder={this.state.amount}
                      onChange={(event) =>
                        this.setState({
                          amount: parseInt(event.target.value),
                        })
                      }
                    />
                    
                  </Form.Field>
                  </Grid.Column>
                  <Grid.Column width={16} style={{marginTop:'2rem'}}>
                  <Button primary>Appliquer Changement</Button>
                  </Grid.Column>
                  <Message 
                    negative
                    hidden={this.state.messageCreateTransaction == ''}
                    header='Error Transaction :'
                    content={this.state.messageCreateTransaction}
                  />
                  </Grid.Row>
                 
                  </Grid>
                </Form>
              </Grid.Column>
              
            </Grid.Row>
          </Grid>

          <PendingTransactions blockchain={this.props.blockchain} pendingTransactions={this.state.pendingTransactions} miningPendingTransactions={this.miningPendingTransactions} loading={this.state.loading}/>
          <Message icon
              loading
              hidden={this.state.loading == false}

          >
            <Icon name='circle notched' loading />
             <Message.Content>
              <Message.Header>Juste quelques secondes</Message.Header>
              Vous êtes en train de miner votre block
            </Message.Content>
          </Message>
          
          <Message 
                    positive
                    hidden={this.state.messageMiningPendingTransactions == ''}
                    header='Block Miné :'
                    content={this.state.messageMiningPendingTransactions}
                  />
                  
        </div>
      </>
    );
  }
}
