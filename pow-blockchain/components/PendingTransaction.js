import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import AddTransactionsTab from "./AddTransactionsTab";

export default class PendingTransactions extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loading: false,
  };

  miningPendingTransactions = async (event) => {
    event.preventDefault();
    await this.setState({ loading: true });
    try {
      await this.props.miningPendingTransactions();
    } catch (error) {
      console.log(error);
    }

    await this.setState({ loading: false });
  };

  render() {
    return (
      <div>
        <h2>Transactions en attentent :</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Block</Table.HeaderCell>
              <Table.HeaderCell>Depuis</Table.HeaderCell>
              <Table.HeaderCell>A</Table.HeaderCell>
              <Table.HeaderCell>Montant</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.pendingTransactions.map((pendTran, index) => {
              return (
                <AddTransactionsTab
                  key={index}
                  pendTran={pendTran}
                  index={index}
                  isValid="0"
                />
              );
            })}
          </Table.Body>
        </Table>

        <Button
          loading={this.state.loading == true}
          fluid
          secondary
          onClick={this.miningPendingTransactions}
        >
          Miner le Block
        </Button>
      </div>
    );
  }
}
