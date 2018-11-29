import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './NavBar.css';
import {
  Container,
  Menu,
  Icon,
} from 'semantic-ui-react'

class NavBar extends Component {


  handleItemClick = (e, { name }) => {
    window.location.href = '/' + name;

  }
  render() {
    const { children } = this.props;
    
    return (
      <div>
        <Menu
          fixed='top'
          inverted
          style={{opacity: '0.9'}}
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
            <Menu.Item position='right'>
              <Icon name='react' size='large' />
            </Menu.Item>
          </Container>
        </Menu>
    {children}
    </div>
    );
  }
}

export default NavBar;
