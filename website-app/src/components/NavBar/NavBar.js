import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './NavBar.css';
import {
  Container,
  Menu,
  Icon,
} from 'semantic-ui-react'

class NavBar extends Component {
  state = {}

  render() {
    const { children } = this.props

    return (
      <div>
        <Menu
          fixed='top'
          inverted
          color='violet'
          secondary
          size='large'
        >
          <Container>
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>Setup</Menu.Item>
            <Menu.Item as='a'>Styles</Menu.Item>
            <Menu.Item as='a'>Demonstration</Menu.Item>
            <Menu.Item as='a'>Conclusion</Menu.Item>
            <Menu.Item as='a'>About Us</Menu.Item>
            <Menu.Item position='right'>
              <Icon name='react' loading size='large' />
            </Menu.Item>
          </Container>
        </Menu>
    {children}
    </div>
    );
  }
}

export default NavBar;
