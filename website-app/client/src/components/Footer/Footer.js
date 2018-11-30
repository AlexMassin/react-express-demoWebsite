
import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';import {
    Button,
    Table,
    Container,
    Divider,
    Grid,
    Header,
    List,
    Segment,
    Transition,
    Icon,
    Label,
    Popup,
    GridColumn,
  } from 'semantic-ui-react';

class Footer extends Component {

  render() {    
    return (
      <div style={{margin: '14px'}}>
      <center>
            <Icon flipped="horizonally" size='large' name='hand point down outline' /> 
            This is the bottom of the page.
            <Icon size='large' name='hand point down outline' />


      </center>
    </div>
    );
  }
}

export default Footer;
