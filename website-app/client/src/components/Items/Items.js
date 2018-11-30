import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Image,
  Button,
  Card
} from 'semantic-ui-react'

class Items extends Component {

  constructor(){
      super();
      this.state = {
          items: []
      }
  }

  componentDidMount = () =>{
      fetch('api/items')
        .then(res => res.json())
        .then(items => this.setState({items}, () => console.log('Items Fetched: ', items)));
  }

  render() {
    return (
      <div>
          <h2>Items</h2>
          <ul>
              {this.state.items.map(item =>
                <li key={item.name}>{item.name}</li>    
            )}
          </ul>
    </div>
    );
  }
}

export default Items;
