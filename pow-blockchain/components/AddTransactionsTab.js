import React from "react";

import { Table } from "semantic-ui-react";
const AddTransactionsTab = (props) => (


  <Table.Row>
    {/* {console.log(props)} */}
    <Table.Cell>{props.index}</Table.Cell>
    <Table.Cell width={1}>
    <div style={{ overflow: "auto", maxWidth: "15rem" }}>
      {props.pendTran.fromAddress === null
        ? "Le System"
        : props.pendTran.fromAddress}
    </div>
    </Table.Cell>
    <Table.Cell>
      <div style={{ overflow: "auto", maxWidth: "15rem" }}>
        {props.pendTran.toAddress === null
          ? "Le System"
          : props.pendTran.toAddress}
      </div>
    </Table.Cell>
    <Table.Cell>
      <div>{props.pendTran.amount}</div>
      <span style={{ fontSize: "smaller" }}>
        {props.pendTran.fromAddress === null ? "Récomponse mineur" : ""}
      </span>
    </Table.Cell>
  </Table.Row>
);

// )

export default AddTransactionsTab;
