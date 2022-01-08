import React, {Component} from "react";
import Informations from "./Informations";
import { Button, Grid, Form, Input } from "semantic-ui-react";
import Information from "./Informations";

export default class Params extends Component {
// export default function Params(props) {
  state = {
    difficulty : 2,
    miningReward: 100
}

onSubmitDifficulty = async (event) => {
    this.props.blockchain.BlockchainInstance.difficulty = this.state.difficulty;
    console.log(this.props.blockchain.BlockchainInstance.difficulty);
};

onSubmitMiningReward = async (event) => {
  this.props.blockchain.BlockchainInstance.miningReward = this.state.miningReward;
  console.log(this.props.blockchain.BlockchainInstance.miningReward);
};

render() {
  return (
    <>
    <Information state={this.state}/>
      <div>
        <h3>Paramètres :</h3>
      </div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form onSubmit={this.onSubmitDifficulty}>
              <Form.Field>
                <label>Difficulté</label>
                <Input
                  style={{ marginTop: "0.5rem" }}
                  label="Difficulty"
                  labelPosition="right"
                  placeholder={this.state.difficulty}
                  onChange={(event) =>
                    (this.setState({difficulty : parseInt( event.target.value )}))
                  }
                />
                <Button primary>
                  Appliquer Changement
                </Button>
                


              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form onSubmit={this.onSubmitMiningReward}>
              <Form.Field>
                <label>Récompence Mineurs</label>
                <Input
                  style={{ marginTop: "0.5rem" }}
                  label="Récompence"
                  labelPosition="right"
                  placeholder={this.state.miningReward}
                  onChange={(event) =>
                    (this.setState({miningReward : parseInt( event.target.value )}))
                  }
                />
                <Button primary>
                Appliquer Changement
                </Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
}
