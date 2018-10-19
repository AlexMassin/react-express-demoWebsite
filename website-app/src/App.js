import React, { Component } from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import {Header, Transition, Image, Icon} from 'semantic-ui-react';
import './App.css';

class App extends Component {
  state={visible:false}

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount = () => {
      setTimeout(
        this.setState({visible:true}),
        2000
      )
  }

  render() {
    const {visible} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <Image src={logo} className="App-logo" alt="logo"/>
          <Transition visible={visible} animation='fly left' duration={3000}>
              <Header as='h1' icon={<Icon name='truck' flipped='horizontally'/>} content='Coming Soon' color={'yellow'} />
          </Transition>
        </header>
      </div>
    );
  }
}

export default App;
