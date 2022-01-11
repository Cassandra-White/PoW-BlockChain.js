import React, { Component } from "react";
import { Message, Menu } from "semantic-ui-react";

import { Transaction } from "../blockchain/Transaction";
import PendingTransactions from "./PendingTransaction";
import ModuleTransactions from "./ModuleTransactions";
import Wallets from "./Wallets";

export default class Params extends Component {
  constructor(props) {
    super(props);
    this.TransactionInstance = new Transaction();
    this.pendingTransactions = this.props.blockchain.getPendingTransactions();
    this.state = {
      walletKeys: this.props.blockchain.walletKeys,
      newTransaction: {},
      fromAddress: "",
      toAddress: "",
      amount: 0,
      pendingTransactions: this.pendingTransactions,
      loading: false,
      messageCreateTransaction: "",
      messageMiningPendingTransactions: "",
      activeItem: "Transactions",
      keyObj: {},
    };
  }

  createTransaction = () => {
    this.setState({ messageCreateTransaction: "" });
    if (this.state.fromAddress == "" || this.state.toAddress == "") {
      this.setState({
        messageCreateTransaction:
          "Toutes les addresses de la transaction ne sont pas défini.\nInfo : Si vous n'avez pas d'addresse vous pouvez en créer une dans la section Wallet",
      });
      return;
    }

    if (isNaN(this.state.amount)) {
      this.setState({
        messageCreateTransaction:
          "Le Montant de la transaction n'est' pas défini.",
      });
      return;
    }

    this.TransactionInstance.fromAddress = this.state.fromAddress;
    this.TransactionInstance.toAddress = this.state.toAddress;
    this.TransactionInstance.amount = this.state.amount;
    let i = 0;

    while (i < this.state.walletKeys.length - 1) {
      if (this.state.walletKeys[i].publicKey == this.state.fromAddress) {
        break;
      }
      i++;
    }
    if (this.state.walletKeys[i].publicKey != this.state.fromAddress) {
      this.setState({
        messageCreateTransaction:
          "L'address du Wallet d'envoi n'existe pas. Si vous n'en avez pas vous pouvez en créer un dans l'onglet Wallet",
      });
      return;
    }

    this.TransactionInstance.signTransaction(this.state.walletKeys[i].keyObj);
    this.props.blockchain.BlockchainInstance.addTransaction(
      this.TransactionInstance
    );

    this.TransactionInstance = new Transaction();
    this.setState({
      pendingTransactions: this.props.blockchain.getPendingTransactions(),
    });
  };

  miningPendingTransactions = async () => {
    this.setState({ messageMiningPendingTransactions: "" });
    this.props.blockchain.miningPendingTransactions();
    this.setState({
      pendingTransactions: this.props.blockchain.getPendingTransactions(),
    });
    this.props.getBlocks();
    this.setState({
      messageMiningPendingTransactions:
        "Le Block à été miné avec succès, vous le retrouverez dans La Blockchain",
    });
  };

  onClickGetPendingTransactions = () => {
    this.setState({
      pendingTransactions: this.props.blockchain.getPendingTransactions(),
    });
  };

  updateFromAddress = (event) => {
    this.setState({ fromAddress: event });
  };

  updateToAddress = (event) => {
    this.setState({ toAddress: event });
  };

  updateAmount = (event) => {
    this.setState({ amount: event });
  };
  updateWalletKeys = () => {
    this.setState({ walletKeys: this.props.blockchain.walletKeys });
  };

  updateKeyObj = (data) => {
    this.setState({ keyObj: data });
  };

  createWallet = () => {
    this.props.blockchain.generateWalletKeys();
    this.setState({ walletKeys: this.props.blockchain.walletKeys });
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <>
        <div>
          <Menu attached="top" tabular>
            <Menu.Item
              name="Transactions"
              active={this.state.activeItem === "Transactions"}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name="Wallets"
              active={this.state.activeItem === "Wallets"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
        <div>
          {this.state.activeItem === "Transactions" ? (
            <ModuleTransactions
              createTransaction={this.createTransaction}
              updateFromAddress={this.updateFromAddress}
              updateToAddress={this.updateToAddress}
              updateAmount={this.updateAmount}
              state={this.state}
            />
          ) : (
            <Wallets
              walletKeys={this.state.walletKeys}
              blockchain={this.props.blockchain}
              createWallet={this.createWallet}
            />
          )}

          {/* /////////////////////////////////////////////////////////// */}

          <PendingTransactions
            blockchain={this.props.blockchain}
            pendingTransactions={this.state.pendingTransactions}
            miningPendingTransactions={this.miningPendingTransactions}
            loading={this.state.loading}
          />

          <Message
            positive
            hidden={this.state.messageMiningPendingTransactions == ""}
            header="Block Miné :"
            content={this.state.messageMiningPendingTransactions}
          />
        </div>
      </>
    );
  }
}
