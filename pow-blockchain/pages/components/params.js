import React from "react";
import Informations from "./Informations";
import { Button, Grid, Form, Input } from "semantic-ui-react";

export default function Params(props) {
  return (
    <>
      <div>
        <h3>Paramètres :</h3>
      </div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label>Difficulté</label>
                <Input
                  style={{ marginTop: "0.5rem" }}
                  label="Difficulty"
                  labelPosition="right"
                  placeholder={props.blockchain.BlockchainInstance.difficulty}
                  onChange={(event) =>
                    (props.blockchain.BlockchainInstance.difficulty = parseInt(
                      event.target.value
                    ))
                  }
                />
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label>Récompence Mineurs</label>
                <Input
                  style={{ marginTop: "0.5rem" }}
                  label="Récompence"
                  labelPosition="right"
                  placeholder={props.blockchain.BlockchainInstance.miningReward}
                  onChange={(event) =>
                    (props.blockchain.BlockchainInstance.miningReward = parseInt(
                      event.target.value
                    ))
                  }
                />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
