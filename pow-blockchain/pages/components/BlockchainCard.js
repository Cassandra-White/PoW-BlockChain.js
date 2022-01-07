import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const BlockChainCard = (props) => (
    <Card >
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>Block N° {props.index} </Card.Header>
        {/* <Card.Header>2 {console.log(props)} </Card.Header> */}
        <Card.Meta>Nonce : {props.block.nonce}</Card.Meta>
        <Card.Description>
          {/* {

            props.block.transactions.map((transaction, index) => {
                return (<p key={index}>{transaction}</p>)
            })
            
        } */}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <h4>Hash Précédent</h4>
        <div>
            <div className='ui' style={{marginBottom:'0.6rem', height:"3.5rem", overflow:"hidden"}}>
                <p style={{color:'#C70039'}} >{props.block.previousHash} ...</p>
            </div>
        </div>
        
      </Card.Content>
      <Card.Content extra>
        <h4>Hash</h4>
        <div className='ui 'style={{overflow:"hidden",height:"3.5rem"}}>
          <p style={{color:'#6A96EC'}}> {props.block.hash} ...</p>
        </div>
      </Card.Content>
      <Card.Content extra>
        <h4>Timestamp</h4>
        <div className='ui 'style={{overflow:"hidden",height:"3.5rem"}}>
          <p style={{color:'#6A96EC'}}> {props.block.timestamp}</p>
        </div>
      </Card.Content>
    </Card>
)

export default BlockChainCard
