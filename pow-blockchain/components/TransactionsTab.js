import React from "react";
import { Table } from "semantic-ui-react";

const TransactionTab = (props) =>
  props.block.transactions.length == 0 ? (
    <Table.Row>
      <Table.Cell>{props.index}</Table.Cell>
      <Table.Cell>Aucune Transaction</Table.Cell>
      <Table.Cell>Aucune Transaction</Table.Cell>
      <Table.Cell>Aucune Transaction</Table.Cell>
      <Table.Cell>
        <div>{props.block.timestamp}</div>
        <span style={{ fontSize: "smaller" }}>
          {new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(props.block.timestamp)}
        </span>
      </Table.Cell>

      <Table.Cell selectable>
        <a href="#">Aucune Transaction</a>
      </Table.Cell>
    </Table.Row>
  ) : (
    props.block.transactions.map((transaction, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>{index}</Table.Cell>
          <Table.Cell>
            <div style={{ overflow: "auto", maxWidth: "15rem" }}>
              {transaction.fromAddress === null
                ? "Le System"
                : transaction.fromAddress}
            </div>
          </Table.Cell>
          <Table.Cell>
            <div style={{ overflow: "auto", maxWidth: "15rem" }}>
              {transaction.toAddress}
            </div>
          </Table.Cell>
          <Table.Cell>
            <div>{transaction.amount}</div>
            <span style={{ fontSize: "smaller" }}>
              {transaction.fromAddress === null ? "Récomponse mineur" : ""}
            </span>
          </Table.Cell>
          <Table.Cell>
            <div>{props.block.timestamp}</div>
            <span style={{ fontSize: "smaller" }}>
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }).format(props.block.timestamp)}
            </span>
          </Table.Cell>
          <Table.Cell>{transaction.isValid() ? "oui" : "non"}</Table.Cell>
        </Table.Row>
      );
    })
  );

export default TransactionTab;
