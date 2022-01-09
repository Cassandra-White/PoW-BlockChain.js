import React, { Component } from "react";
import Informations from "./Informations";
import { Button, Grid, Form, Input, Transition } from "semantic-ui-react";
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
    };
    // console.log(this.TransactionInstance);
  }


  createTransaction = () => {
    this.TransactionInstance.fromAddress = this.state.walletKeys.publicKey;
    this.TransactionInstance.toAddress = this.state.toAddress;
    this.TransactionInstance.amount = this.state.amount;
    this.TransactionInstance.signTransaction(this.state.walletKeys.keyObj);
    console.log(this.TransactionInstance);
    this.props.blockchain.BlockchainInstance.addTransaction(this.TransactionInstance);

    this.TransactionInstance = new Transaction();
    this.setState({pendingTransactions : this.props.blockchain.getPendingTransactions()})
  }

  miningPendingTransactions = ()=> {
    this.setState({loading: true});
    this.props.blockchain.miningPendingTransactions()
    this.setState({pendingTransactions : this.props.blockchain.getPendingTransactions()});
    this.props.getBlocks()
    this.setState({loading: false});

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
    // console.log(this.TransactionInstance);
    // console.log(this.state.walletKeys.publicKey);
    return (
      <>
        <div>
          <h2>Créer une Transaction :</h2>
          <p>Envoyez de l'argent à un autre compte</p>

          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Form onSubmit={this.createTransaction}>
                  <Form.Field>
                    <label>Depuis :</label>
                    <Input
                    
                      style={{ marginTop: "0.5rem" }}
                      label="fromAddress"
                      labelPosition="right"
                      placeholder={this.state.fromAddress}
                      onChange={(event) =>
                        this.setState({
                          fromAddress: event.target.value,
                        })
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>A :</label>
                    <Input
                      style={{ marginTop: "0.5rem" }}
                      label="toAddress"
                      labelPosition="right"
                      placeholder={this.state.toAddress}
                      onChange={(event) =>
                        this.setState({
                          toAddress: event.target.value,
                        })
                      }
                    />
                  </Form.Field>

                  <Form.Field>
                    <label>Montant :</label>
                    <Input
                  
                      style={{ marginTop: "0.5rem" }}
                      label="amount"
                      labelPosition="right"
                      placeholder={this.state.amount}
                      onChange={(event) =>
                        this.setState({
                          amount: parseInt(event.target.value),
                        })
                      }
                    />
                    <Button primary>Appliquer Changement</Button>
                  </Form.Field>

                  
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <PendingTransactions blockchain={this.props.blockchain} pendingTransactions={this.state.pendingTransactions} miningPendingTransactions={this.miningPendingTransactions} loading={this.state.loading}/>
        </div>
      </>
    );
  }
}
