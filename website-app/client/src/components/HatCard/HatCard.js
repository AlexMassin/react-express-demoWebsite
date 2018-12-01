import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './HatCard.css';
import {
  Image,
  Button,
  Card,
  Popup,
  ButtonContent
} from 'semantic-ui-react'

class HatCard extends Component {



  
  state = {hovered: false, added: false};

  onClickButton = () =>{
    this.setState({added: true, hovered: true});
  }


  onEnter = () => {
    this.setState({hovered: true});
  }

  onExit = () => {
    this.setState({hovered: false});
  }

  handleSubmit = (data) => {
    try {
      var request = new Request('http://165.227.36.115:5000/api/add');

      fetch(request, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST',
        },
        body: JSON.stringify(data),
      })
      .then(console.log('test'))
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
              disabled={this.state.added}
              color='green'
              onClick={() => {this.onClickButton(); this.handleSubmit({name, image, price})}}>
              <ButtonContent>
                  {this.state.added ? 'Added to Cart!' : 'Add to Cart.'}
              </ButtonContent>
              
              </Button>
          </Card.Content>
        </Card>
    </div>
    );
  }
}

export default HatCard;
