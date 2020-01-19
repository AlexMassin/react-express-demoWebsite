import React, { Component } from 'react';
import history from '../../history';
import 'semantic-ui-css/semantic.min.css';
import './NavBar.css';
import Items from '../Items/Items';
import {
  Container,
  Menu,
  Icon,
  Button,
  Modal,
  Message
} from 'semantic-ui-react'

class NavBar extends Component {

  constructor() {
    super();
    this.state = {
      curLoc: window.location.pathname, 
      modalOpen: false,
      endMessage: false
    }

    window.onbeforeunload = function(e) {
      this.setState({curLoc: window.location.pathname})
   };
  }

  handleItemClick = (e, { name }) => {
    this.setState({curLoc: window.location.pathname}) //this will cause component to update when router is pushed to the Router
    history.push('/' + name);
  }

  openModal = () => {
    fetch('http://' + window.location.hostname + ':5000/api/items').then(() => {;
      this.setState({modalOpen: true});
    });
  }

  closeModal = () => {
    this.setState({modalOpen: false});
  }

  showEndMessage = () => {
    window.scrollTo(0, 0);
    this.setState({endMessage: true});
    setTimeout(this.closeEndMessage, 5000);
  }

  closeEndMessage = () => {
    this.setState({endMessage: false});
  }

  onModalClick = () => {
    fetch('http://' + window.location.hostname + ':5000/api/reset').then(() => {
      console.log('reset items from modal');
    });
    this.closeModal();
    let hook = document.createElement('div')
    document.body.append(hook)
    window.dispatchEvent(new Event('resetDemo'));
    window.dispatchEvent(new Event('resetDemo'));
    hook.remove();
    console.log('Modal Checkout Clicked')
    this.showEndMessage();
    //end of demo, simulating a redirect and "looping" back to fresh demo state
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
                        active={window.location.pathname.endsWith('/home') || window.location.pathname.endsWith('/')} 
                        onClick={this.handleItemClick} />
             <Menu.Item  name='setup' 
                        active={window.location.pathname.endsWith('/setup')} 
                        onClick={this.handleItemClick} />
              <Menu.Item  name='styles' 
                        active={window.location.pathname.endsWith('/styles')} 
                        onClick={this.handleItemClick} />
              <Menu.Item  name='demonstration' 
                        active={window.location.pathname.endsWith('/demonstration')} 
                        onClick={this.handleItemClick} />
              <Menu.Item  name='conclusion' 
                        active={window.location.pathname.endsWith('/conclusion')} 
                        onClick={this.handleItemClick} />
              <Menu.Item  name='team' 
                        active={window.location.pathname.endsWith('/team')} 
                        onClick={this.handleItemClick} />
            {Boolean(window.location.pathname.endsWith('/demonstration')) && 
            <Menu.Item position='right'>
            <Modal open={this.state.modalOpen} closeOnDimmerClick={true} onClose={this.closeModal} trigger={<Button basic color='yellow' id='shopping-cart' animated='fade' onClick={this.openModal}>
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

      { (this.state.endMessage) &&
      <Message
        success
        floating
        icon
        onDismiss={this.closeEndMessage}>
        <Icon name='smile outline' />
        <Message.Content>
          <Message.Header>Thank you!</Message.Header>
          This is the end of the demo, you can play with it again.
        </Message.Content>
      </Message>
      }
    {children}
    </div>
    );
  }
}

export default NavBar;
