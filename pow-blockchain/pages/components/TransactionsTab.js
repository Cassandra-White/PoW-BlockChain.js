import React from 'react'

import { Table } from 'semantic-ui-react'
const TransactionTab = (props) => (


              
                props.block.transactions.length == 0 ? (
                    <Table.Row>
                        <Table.Cell>{props.index}</Table.Cell>
                        <Table.Cell>Aucune Transaction</Table.Cell>
                        <Table.Cell>Aucune Transaction</Table.Cell>
                        <Table.Cell>Aucune Transaction</Table.Cell>
                        <Table.Cell>{props.block.timestamp}</Table.Cell>

                        <Table.Cell selectable>
                        <a href='#'>Edit</a>
                        </Table.Cell>
                    </Table.Row>
                ) : (
                   <Table.Row>
                    <Table.Cell>{props.index}</Table.Cell>
                    <Table.Cell>{props.block.transactions}</Table.Cell>
                    <Table.Cell>{props.block.transactions}</Table.Cell>
                    <Table.Cell>{props.block.transactions}</Table.Cell>
                    <Table.Cell>{props.block.isValid}</Table.Cell>

                    <Table.Cell selectable>
                    <a href='#'>Edit</a>
                    </Table.Cell>
                </Table.Row>
               )
            
            
     

)

export default TransactionTab
