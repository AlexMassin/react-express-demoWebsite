import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './HatCard.css';
import {
  Image,
  Button,
  Card
} from 'semantic-ui-react'

class HatCard extends Component {

  state = {hovered: false};

  onEnter = () => {
    this.setState({hovered: true});
  }

  onExit = () => {
    this.setState({hovered: false});
  }


  render() {
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
              color='green'>Add to Cart
              </Button>
          </Card.Content>
        </Card>
    </div>
    );
  }
}

export default HatCard;
