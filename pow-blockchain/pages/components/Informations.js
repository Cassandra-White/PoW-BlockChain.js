import React, {Component} from 'react'

import { Button, Grid, Form } from 'semantic-ui-react'

export default class Information extends Component {
// export default function Information(props) {
    

    render(){
    return (
        <>
        <div>
            <h3>Informations Blockchain :</h3>
        </div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8} >
                        <h4>Difficulté : {this.props.state.difficultySend}</h4>
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <h4>Récompence Mineurs : {this.props.state.miningRewardSend}</h4>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
       
        </>
    )
}
}
