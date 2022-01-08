import React from 'react'
import Informations from "./Informations"
import { Button, Grid, Form, Input } from 'semantic-ui-react'



export default function Params(props) {
    return (
        <>
        <div>
            <h3>Paramètres :</h3>
        </div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8} >
                        <Form>
                            <Form.Field>
                            <label>Difficulté</label>
                            <Input
                                style={{ marginTop: "0.5rem" }}
                                label="Difficulty"
                                labelPosition="right"
                                placeholder={props.BlockchainInstance.difficulty}
                                onChange={(event) =>
                                    props.BlockchainInstance.difficulty = parseInt(event.target.value)
                                    
                                }
                            />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Form>
                            <Form.Field >
                            <label>Récompence Mineurs</label>
                            <Input
                                style={{ marginTop: "0.5rem" }}
                                label="Récompence"
                                labelPosition="right"
                                placeholder={props.BlockchainInstance.miningReward}
                                onChange={(event) =>
                                    props.BlockchainInstance.miningReward = parseInt(event.target.value)
                                }
                            />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Informations difficulty={props.BlockchainInstance.difficulty} BlockchainInstance={props.BlockchainInstance}></Informations>
            </Grid>
           
       
        </>
    )
}
