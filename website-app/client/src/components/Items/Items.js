import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Image,
  Button,
  Card,
  Feed,
  Segment
} from 'semantic-ui-react';
import './Item.css'

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
          <Feed>
              <Segment style={{fontSize: '16px'}}>
              {this.state.items.map(item =>
                 <Feed.Event style={{display: 'inline'}}>
                   <Feed.Label style={{height: '150px', width: '150px', display: 'inline-block',}}><Image id='item' avatar size='large' src={item.image} /> </Feed.Label>
                   <Feed.Label style={{    display: 'inline-block', padding: '24px', fontSize: '22px'}}>
                     <Feed.Date  style={{fontSize: '16px'}} content={item.price} />
                     <Feed.Summary>
                       {item.name}
                     </Feed.Summary>
                   </Feed.Label>
                   <br />

                 </Feed.Event>
            )}
            </Segment>
          </Feed>
    </div>
    );
  }
}

export default Items;
