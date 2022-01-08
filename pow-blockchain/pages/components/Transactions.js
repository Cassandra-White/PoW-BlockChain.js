import React from "react";
import { Table } from "semantic-ui-react";
import TransactionTab from "./TransactionsTab";

export default function Transactions(props) {
    // console.log(props.block);
  return (
    <>
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
            block={props.block}
            index="0"
            isValid="0"
          />
        </Table.Body>
      </Table>
    </>
  );
}
