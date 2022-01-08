import React, { useEffect, useState, Component } from "react";
import { Card, Grid } from "semantic-ui-react";
import BlockChainCard from "./components/BlockCard";
import Transactions from "./components/Transactions";


export default class Blockscard extends Component {
    
    state = {
        activeItem : 0
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

render() {

  return (
    <>
      <Grid>
        <Grid.Row>
          {this.props.blockchain.BlockchainInstance.chain.map((block, index) => {
            return (
              <Grid.Column width={5}>
                <Card
                  style={{ margin: "0.5rem" }}
                  key={index}
                  name={index}
                  active={this.state.activeItem === 'editorials'}
                  onClick={this.handleItemClick}
                >
                  <BlockChainCard key={index} block={block} index={index} />
                </Card>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>

      <Transactions block={this.props.blockchain.BlockchainInstance.chain[this.state.activeItem]} activeItem={this.state.activeItem}/>
    </>
  );
}
}
