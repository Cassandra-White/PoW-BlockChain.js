import React, { Component } from 'react';
import { Button, Grid, Form, Input, Message} from "semantic-ui-react";

class ModuleTransactions extends Component {

    render() {
        return (
            <>
            <Grid style={{marginBottom:"2rem", marginTop:'2rem'}}>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h2>Créer une Transaction :</h2>
                    {/* <p>Envoyez de l'argent à un autre compte</p> */}
                  </Grid.Column>
                  
                </Grid.Row>
              </Grid>
              <Grid style={{marginBottom:"2rem"}}>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Form onSubmit={this.props.createTransaction}>
                    <Grid>
                      <Grid.Row>
                      <Grid.Column width={10} style={{marginBottom:'2rem'}}>
                      <Form.Field required>
                        <label>Depuis l addresse :</label>
                        
                        <Input
                          name='fromAddress'
                          style={{ marginTop: "0.5rem" }}
                          label="Clé Public"
                          labelPosition="right"
                          placeholder={this.props.state.fromAddress}
                          onChange={(event) =>
                            this.props.updateFromAddress(
                              event.target.value,
                            )
                          }
                        />
                      </Form.Field>

                      </Grid.Column>
                      <Grid.Column width={10} style={{marginBottom:'2rem'}}>
                      <Form.Field required>
                        <label>À l addresse :</label>
                        <Input
                        name='fromAddress'
                          style={{ marginTop: "0.5rem"}}
                          label="Clé Public"
                          labelPosition="right"
                          placeholder={this.props.state.toAddress}
                          onChange={(event) =>
                            this.props.updateToAddress(
                              event.target.value,
                            )
                          }
                        />
                      </Form.Field>
                      </Grid.Column>
                      <Grid.Column width={10}>
                      <Form.Field required>
                        <label>Montant de la transaction:</label>
                        <Input
                          focus
                          type='number'
                          style={{ marginTop: "0.5rem" }}
                          label="Montant"
                          labelPosition="right"
                          placeholder={this.props.state.amount}
                          onChange={(event) =>
                            this.props.updateAmount(
                               parseInt(event.target.value),
                            )
                          }
                        />
                        
                      </Form.Field>
                      </Grid.Column>
                      <Grid.Column width={8} style={{marginTop:'2rem'}}>
                      <Button primary>Envoyez votre transaction</Button>
                      </Grid.Column>
                      <Message 
                        negative
                        hidden={this.props.state.messageCreateTransaction == ''}
                        header='Error Transaction :'
                        content={this.props.state.messageCreateTransaction}
                      />
                      </Grid.Row>
                    
                      </Grid>
                    </Form>
                  </Grid.Column>
                  </Grid.Row>
                  </Grid>    

            </>
        );  
    }
}


export default ModuleTransactions;