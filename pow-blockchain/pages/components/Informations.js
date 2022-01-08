import React from 'react'

import { Button, Grid, Form } from 'semantic-ui-react'


export default function Information(props) {
    console.log(props.BlockchainInstance);

    
    return (
        <>
        <div>
            <h3>Informations Blockchain :</h3>
        </div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8} >
                        <h4>Difficulté : {props.BlockchainInstance.difficulty}</h4>
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <h4>Récompence Mineurs : {props.BlockchainInstance.miningReward}</h4>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
       
        </>
    )
}
