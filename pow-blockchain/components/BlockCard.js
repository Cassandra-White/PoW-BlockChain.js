import React from "react";
import { Card } from "semantic-ui-react";

const BlockChainCard = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>Block N° {props.index} </Card.Header>
      <Card.Meta>Nonce : {props.block.nonce}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <h4>Hash Précédent</h4>
      <div>
        <div
          className="ui"
          style={{
            marginBottom: "0.6rem",
            height: "3.5rem",
            overflow: "hidden",
          }}
        >
          <p style={{ color: "#C70039" }}>{props.block.previousHash} ...</p>
        </div>
      </div>
    </Card.Content>
    <Card.Content extra>
      <h4>Hash</h4>
      <div className="ui " style={{ overflow: "hidden", height: "3.5rem" }}>
        <p style={{ color: "#6A96EC" }}> {props.block.hash} ...</p>
      </div>
    </Card.Content>
    <Card.Content extra>
      <h4>Timestamp</h4>
      <div className="ui " style={{ overflow: "hidden", height: "3.5rem" }}>
        <p style={{ color: "#008000" }}>{props.block.timestamp}</p>
        <p>
          {" "}
          {new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(props.block.timestamp)}
        </p>
      </div>
    </Card.Content>
  </Card>
);

export default BlockChainCard;
