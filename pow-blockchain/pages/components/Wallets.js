import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Grid,
  Form,
  Input,
  Transition,
  Message,
  Icon,
  Menu,
  Segment,
  Card,
} from "semantic-ui-react";

class Wallets extends Component {
  render() {
    return (
      <>
        <Grid style={{ marginBottom: "2rem", marginTop: "2rem" }}>
          <Grid.Row>
            <Grid.Column width={8}>
              <h2>Tous les Wallets :</h2>
            </Grid.Column>

            <Grid.Column width={8}>
              <Button
                floated="right"
                color="black"
                onClick={this.props.createWallet}
              >
                Créer un Wallet
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid style={{ marginBottom: "2rem", marginTop: "2rem" }}>
          <Grid.Row>
            {this.props.walletKeys.map((wallet, index) => {
              return (
                <Grid.Column
                  key={index}
                  width={8}
                  style={{ marginBottom: "1rem" }}
                >
                  <Card style={{ backgroundColor: "#F9F9F9" }}>
                    <Card.Content>
                      <Card.Header>
                        Wallet {index == 0 ? "Mineur" : (index == 1 || index == 2) ? `Exemple ${index}`  : index}
                      </Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="key" />
                        clé Public :
                        <p style={{ overflow: "auto" }}>{wallet.publicKey}</p>
                      </a>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="key" />
                        clé Privé :
                        <p style={{ overflow: "auto" }}>{wallet.privateKey}</p>
                      </a>
                    </Card.Content>

                    <Card.Content extra>
                      <a>
                        <Icon name="money" />
                        Solde :
                        <p style={{ overflow: "auto" }}>
                          {this.props.blockchain.BlockchainInstance.getBalanceOfAddress(
                            wallet.publicKey
                          )}
                        </p>
                      </a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default Wallets;
