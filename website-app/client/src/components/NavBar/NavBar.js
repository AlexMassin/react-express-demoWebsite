import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './NavBar.css';
import {
  Container,
  Menu,
  Icon,
  Button,
  Modal
} from 'semantic-ui-react'
import Items from '../Items/Items';

class NavBar extends Component {


  handleItemClick = (e, { name }) => {
    window.location.href = '/' + name;
    fetch('api/reset');

  }

  onModalClick = () => {
	fetch('api/reset');
	window.location.reload();
  }

  render() {
    const { children } = this.props;
    
    return (
      <div>
        <Menu
          fixed='top'
          inverted
          style={{opacity: '0.9', height:'2em'}}
          color='violet'
          size='large'
          secondary
        >
          <Container>
            <Menu.Item  name='home' 
                        active={window.location.pathname === '/home' || window.location.pathname === '/'} 
                        onClick={this.handleItemClick} />
             <Menu.Item  name='setup' 
                        active={window.location.pathname === '/setup'} 
                        onClick={this.handleItemClick} />
              <Menu.Item  name='styles' 
                        active={window.location.pathname === '/styles'} 
                        onClick={this.handleItemClick} />
              <Menu.Item  name='demonstration' 
                        active={window.location.pathname === '/demonstration'} 
                        onClick={this.handleItemClick} />
              <Menu.Item  name='conclusion' 
                        active={window.location.pathname === '/conclusion'} 
                        onClick={this.handleItemClick} />
              <Menu.Item  name='team' 
                        active={window.location.pathname === '/team'} 
                        onClick={this.handleItemClick} />
            {Boolean(window.location.pathname === '/demonstration') && 
            <Menu.Item position='right'>
              <Modal trigger={<Button basic color='yellow' id='shopping-cart'  animated='fade'>
              <Button.Content hidden>
                <Icon size='large' style={{marginTop: '-5px'}} name='in cart' />
              </Button.Content>
              <Button.Content visible>
                <Icon size='large' name='cart' />
              </Button.Content>
              </Button>}>
              
                <Modal.Header>Shopping Cart</Modal.Header>
                <Modal.Content scrolling>
                  <Items />
                </Modal.Content>
		     <Modal.Actions>
		                <Button
		                  onClick={this.onModalClick}
		                  positive
		                  labelPosition='right'
		                  icon='checkmark'
		                  content='Checkout'
		                />
		              </Modal.Actions>
              </Modal>
            </Menu.Item>}
          </Container>
        </Menu>
    {children}
    </div>
    );
  }
}

export default NavBar;
