import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './HatCard.css';
import {
  Image,
  Button,
  Card
} from 'semantic-ui-react'

class HatCard extends Component {


  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
   }
  
  state = {hovered: false};

  onEnter = () => {
    this.setState({hovered: true});
  }

  onExit = () => {
    this.setState({hovered: false});
  }

  async function handleSubmit(data){
    try {
      let response = await fetch('/api/add', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.parse(data),
      });
      
    } catch(error){
      console.error(error);
    }

        
   };

  render() {
    const name = this.props.name;
    const image = this.props.imgsrc;
    const price = this.props.price;

    return (
      <div style={{ padding: '0.8em' }}>
        <Card>
          <Card.Content style={{ height: '23em', maxHeight: '26em' }}>
            <Image src={this.props.imgsrc}/>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>{this.props.sub}</Card.Meta>
            <Card.Description>{this.props.price}</Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Button 
              style={{ float: 'right' }} 
              onMouseEnter={this.onEnter} 
              onMouseLeave={this.onExit} 
              basic={!this.state.hovered} 
              color='green'
              onClick={this.handleSubmit({name, image, price})}>Add to Cart
              </Button>
          </Card.Content>
        </Card>
    </div>
    );
  }
}

export default HatCard;
