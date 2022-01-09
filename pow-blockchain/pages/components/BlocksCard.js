import React, { useEffect, useState, Component } from "react";
import { Card, Grid } from "semantic-ui-react";
import BlockChainCard from "./BlockCard";
import Transactions from "./Transactions";



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
            {this.props.blocks.map((block, index) => {
              return (
                <Grid.Column width={5} key={index + 1000}>
                  <Card
                    
                    style={{ margin: "0.5rem" }}
                    
                    name={index}
                    // active={this.state.activeItem === index}
                    onClick={ () => {
                      this.setState({activeItem : index})
                      this.handleItemClick
                    }
                      
                     
                    }
                  >
                    <BlockChainCard block={block} index={index} />
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
