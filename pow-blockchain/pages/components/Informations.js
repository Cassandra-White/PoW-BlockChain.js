import React, {Component} from 'react'

import { Button, Grid, Form, Message } from 'semantic-ui-react'

export default class Information extends Component {
// export default function Information(props) {
    

    render(){
        console.log(this.props.messageMiningReward);
    return (
        <div style={{marginBottom : '5rem'}}>
        <div style={{marginBottom : '2rem'}}>
            <h2>Informations Blockchain :</h2>
        </div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8} >
                        <h3>Difficulté :  {this.props.state.difficultySend}</h3>
                        <Message positive hidden={this.props.messageDifficulty == ''}
                        header="Changement : Difficulté de minage"
                        content={this.props.messageDifficulty}
                    />
                    <Message negative hidden={this.props.messageErrorDifficulty == ''}
                        header="Error : Difficulté"
                        content={this.props.messageErrorDifficulty}
                    />
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <h3>Récompence Mineurs :  {this.props.state.miningRewardSend}</h3>
                    <Message positive hidden={this.props.messageMiningReward == ''}
                        header="Changement : Récompences Mineurs"
                        content={this.props.messageMiningReward}
                    />

                    <Message negative hidden={this.props.messageErrorMiningReward == ''}
                        header="Error : Récompences Mineurs"
                        content={this.props.messageErrorMiningReward}
                    />
                    
                        
                    
                    </Grid.Column>
                </Grid.Row>
            </Grid>
       
        </div>
    )
}
}
