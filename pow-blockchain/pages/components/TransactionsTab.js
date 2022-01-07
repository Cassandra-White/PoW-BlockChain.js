import React from 'react'
import {Block} from '../../../blockchain/Block'

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
                    props.block.transactions.map((transaction, index) => {
                    return(
                        <Table.Row>
                            <Table.Cell>{index}</Table.Cell>
                            <Table.Cell>{transaction.fromAddress === null ? 'Le System' : transaction.fromAddress}</Table.Cell>
                            <Table.Cell>{transaction.toAddress}</Table.Cell>
                            <Table.Cell>{transaction.amount}</Table.Cell>
                            <Table.Cell>{props.block.timestamp}</Table.Cell>
                            <Table.Cell>{transaction.isValid() ? 'oui' : 'non'}</Table.Cell>

                            {/* <Table.Cell selectable>
                            <a href='#'>Edit</a>
                            </Table.Cell> */}
                        </Table.Row>
                         )
                    })
                   
               )
            
            
     

)

export default TransactionTab
