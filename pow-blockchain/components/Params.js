import React, { Component } from "react";
import { Button, Grid, Form, Input } from "semantic-ui-react";
import Information from "./Informations";

export default class Params extends Component {
  state = {
    difficulty: this.props.blockchain.BlockchainInstance.difficulty,
    miningReward: this.props.blockchain.BlockchainInstance.miningReward,
    difficultySend: this.props.blockchain.BlockchainInstance.difficulty,
    miningRewardSend: this.props.blockchain.BlockchainInstance.miningReward,
    messageMiningReward: "",
    messageDifficulty: "",
    messageErrorMiningReward: "",
    messageErrorDifficulty: "",
  };

  onSubmitDifficulty = async (event) => {
    if (isNaN(this.state.difficulty)) {
      this.setState({
        messageErrorDifficulty: "Vous n'avez pas renseigné de difficulté",
        messageDifficulty: "",
        messageErrorMiningReward: "",
        messageMiningReward: "",
      });
      return;
    }
    this.props.blockchain.BlockchainInstance.difficulty = this.state.difficulty;
    this.setState({
      difficultySend: this.state.difficulty,
      messageMiningReward: "",
      messageDifficulty:
        "La difficulté de minage est maintenant parametré . Attention : Plus la difficulté est grande plus le block mets de temps à être trouvé. Pour ne pas créer un trop grand lag le maximum est 4",
      messageErrorMiningReward: "",
      messageErrorDifficulty: "",
    });
  };

  onSubmitMiningReward = async (event) => {
    if (isNaN(this.state.miningReward)) {
      this.setState({
        messageErrorMiningReward: "Vous n'avez pas renseigné de récompense",
        messageMiningReward: "",
        messageErrorDifficulty: "",
        messageMiningReward: "",
      });
      return;
    }
    this.props.blockchain.BlockchainInstance.miningReward = this.state.miningReward;
    this.setState({
      miningRewardSend: this.state.miningReward,
      messageMiningReward:
        "Les Récompences des Mineurs sont maintenant parametré ",
      messageDifficulty: "",
      messageErrorDifficulty: "",
      messageErrorMiningReward: "",
    });
  };

  render() {
    return (
      <>
        <Information
          state={this.state}
          messageMiningReward={this.state.messageMiningReward}
          messageDifficulty={this.state.messageDifficulty}
          messageErrorDifficulty={this.state.messageErrorDifficulty}
          messageErrorMiningReward={this.state.messageErrorMiningReward}
        />
        <div>
          <h2 style={{ marginBottom: "2rem" }}>Paramètres :</h2>
        </div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form onSubmit={this.onSubmitDifficulty}>
                <Form.Field>
                  <label>Difficulté</label>
                  <Input
                    style={{ marginTop: "0.5rem", marginBottom: "2rem" }}
                    label="Difficulty"
                    labelPosition="right"
                    placeholder={this.state.difficulty}
                    onChange={(event) =>
                      this.setState({
                        difficulty:
                          parseInt(event.target.value) > 4
                            ? 4
                            : parseInt(event.target.value),
                      })
                    }
                  />
                  <Button color="black" fluid>
                    Changer Difficulté
                  </Button>
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form onSubmit={this.onSubmitMiningReward}>
                <Form.Field>
                  <label>Récompence Mineurs</label>
                  <Input
                    style={{ marginTop: "0.5rem", marginBottom: "2rem" }}
                    label="Récompence"
                    labelPosition="right"
                    placeholder={this.state.miningReward}
                    onChange={(event) =>
                      this.setState({
                        miningReward: parseInt(event.target.value),
                      })
                    }
                  />
                  <Button color="black" fluid>
                    Changer Récompence
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
