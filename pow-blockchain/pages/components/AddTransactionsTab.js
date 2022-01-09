import React from "react";
import { Block } from "../../../blockchain/Block";

import { Table } from "semantic-ui-react";
const AddTransactionsTab = (props) => (
  // props.pendTran.length == 0 ? (
  //     <Table.Row>
  //         <Table.Cell>{props.index}</Table.Cell>
  //         <Table.Cell>Aucune Transaction</Table.Cell>
  //         <Table.Cell>Aucune Transaction</Table.Cell>
  //         <Table.Cell>Aucune Transaction</Table.Cell>
  //         <Table.Cell>{props.block.timestamp}</Table.Cell>

  //         <Table.Cell selectable>
  //         <a href='#'>Edit</a>
  //         </Table.Cell>
  //     </Table.Row>
  // ) : (

  <Table.Row>
    {/* {console.log(props)} */}
    <Table.Cell>{props.index}</Table.Cell>
    <Table.Cell width={1}>
    <div style={{ overflow: "auto", width: "25rem" }}>
      {props.pendTran.fromAddress === undefined
        ? "Le System"
        : props.pendTran.fromAddress}
    </div>
    </Table.Cell>
    <Table.Cell>
      <div style={{ overflow: "auto", width: "25rem" }}>
        {props.pendTran.toAddress === undefined
          ? "Le System"
          : props.pendTran.toAddress}
      </div>
    </Table.Cell>
    <Table.Cell>
      <div>{props.pendTran.amount}</div>
      <span style={{ fontSize: "smaller" }}>
        {props.pendTran.fromAddress === undefined ? "Récomponse mineur" : ""}
      </span>
    </Table.Cell>
    {/* <Table.Cell>
                                <div>{props.block.timestamp}</div>
                                <span style={{fontSize:"smaller"}}>{
                                        new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(props.block.timestamp)}</span>
                            </Table.Cell> */}
    <Table.Cell>{props.pendTran.isValid() ? "oui" : "non"}</Table.Cell>

    {/* <Table.Cell selectable>
                            <a href='#'>Edit</a>
                            </Table.Cell> */}
  </Table.Row>
);

// )

export default AddTransactionsTab;
