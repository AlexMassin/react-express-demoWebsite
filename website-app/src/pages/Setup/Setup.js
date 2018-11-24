import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import backend_img from "../../images/digital_ocean.png";
import sidebar_img from "../../images/project_sidebar.png";
import project_creation from "../../images/create_project.png";
import droplet_dash from "../../images/new_dashboard.png";
import server_image from "../../images/vps_image.png";
import hardware from "../../images/server_hardware.png";
import datacenter from "../../images/datacenter.png";
import droplet from "../../images/droplet.png";
import creds from "../../images/server_login.png";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Transition,
  Icon,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const Setup = () => (
  <div>
    <Segment inverted style={{ padding: '5em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={ 8 }>
            <Header inverted as='h3' style={{ fontSize: '2em' }}>
              Setting Up A Back-end Server
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We recommend setting up a VPS as a permanent, long-term solution for a back-end server.
              There are many options to begin experimenting with such as Google Cloud, Amazon's AWS, and Digital Ocean.
              We set up our website to be hosted on Digital Ocean as it is easy to set up, requires very little validation, and
              offers many different preset servers that cater to specific needs.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={ 6 }>
            <Image rounded size='large' src={ backend_img } />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
          <Button color='blue' style={{ width: '280px' }} size='massive' animated='fade' onClick={() => { window.open("https://digitalocean.com/", "_blank"); }}>
            <Button.Content visible>Learn More</Button.Content>
            <Button.Content hidden>Visit Digital Ocean</Button.Content>
          </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Divider
          as='h3'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
        Setting Up Digital Ocean
    </Divider>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Create a Digital Ocean Account
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Sign-up for an account with digital ocean. For new accounts, you will receive a $100 credit for 60 days to gauge your experience. 
          Like other VPS services, you will need to provide a valid credit card and email address to complete account validation for 
          security purposes. You will not be charged until your trial is over and if you do not want to continue, you can simply deactive
          your account.
        </p>
        <br />
        <Header as='h3' style={{ fontSize: '2em' }}>
          Create a New Project
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Before we start creating a VPS, we need to make a project. On the left, you should see a sidebar with an option to create a new project.
        </p>
        <div>
          <Image style={{ marginLeft: 'auto', marginRight: 'auto', display: 'inline', width: '15em' }} rounded size='large' src={ sidebar_img } />
          <Image style={{ marginLeft: 'auto', marginRight: 'auto', display: 'inline' }} rounded size='large' src={ project_creation } />
        </div>
        <br />
        <p style={{ fontSize: '1.33em' }}>
          Give your project a name, a relevant description, and whatever feedback that applies to you. When they ask for resources, simply skip
          this step because this is your first project. Resources allow you to transfer old server data to new projects.
        </p>
        <br />
        <Header as='h3' style={{ fontSize: '2em' }}>
          Create a New Droplet
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Digital Ocean refers to each VPS as a droplet. You should be presented with the following dashboard, ready to create a new VPS.
          Click the <strong>Get Started With a Droplet</strong> button to customize the server as we need.
        </p>
        <div>
          <Image style={{ marginLeft: 'auto', marginRight: 'auto', width: '50em' }} rounded size='large' src={ droplet_dash } />
        </div>
        <p style={{ fontSize: '1.33em' }}>
          <ol>
            <li style={{ padding: '16px' }}>Navigate to the <strong>One-click apps</strong> tab and select <strong>NodeJS 8.10.0 on 18.04</strong>.</li>
            <div>
              <Image style={{ marginLeft: 'auto', marginRight: 'auto', width: '50em' }} bordered rounded size='large' src={ server_image } />
            </div>
            <li style={{ padding: '16px' }}>Select a CPU with at least 2 GB of RAM. We went with the $10/mo option.</li>
            <div>
              <Image style={{ marginLeft: 'auto', marginRight: 'auto', width: '50em' }} bordered rounded size='large' src={ hardware } />
            </div>
            <li style={{ padding: '16px' }}>Select the nearest datacenter. For us, this was Toronto.</li>
            <div>
              <Image style={{ marginLeft: 'auto', marginRight: 'auto', width: '50em' }} bordered rounded size='large' src={ datacenter } />
            </div>
            <li style={{ padding: '16px' }}>We can optionally change hostname but, default is descriptive enough.</li>
            <li style={{ padding: '16px' }}>Press the large, green <strong>Create</strong> button to finish.</li>
            <li style={{ padding: '16px' }}>After a few seconds, the server will be created, and run with a 24 hour uptime. We are ready to SSH.</li>
            <div>
              <Image style={{ marginLeft: 'auto', marginRight: 'auto', width: '50em' }} bordered rounded size='large' src={ droplet } />
            </div>
          </ol>
        </p>
        <br />
      </Container>
    <Divider
          as='h3'
          className='header'
          horizontal
          style={{ margin: '2em 0em', textTransform: 'uppercase' }}
        >
        Setting Up Server Infrastructure
    </Divider>
      <Container text style={{ margin: '2em 0em 4em 0em' }}>
        <Header as='h3' style={{ fontSize: '2em' }}>
          SSH to your VPS
        </Header>
        <p>
          You will be emailed your password for the server.
          <div style={{ padding: '16px' }}>
            <Image style={{ width: '20em' }} bordered rounded size='large' src={ creds } />
          </div>
          You need to execute
          <pre style={{ color: '#2BEF00', backgroundColor: '#000000' }}>{`
  ssh root@Server_IP_Address
          `}</pre>
          Paste in your password, and you will be prompted to change it.
        </p>
      </Container>
      <Segment inverted style={{ padding: '5em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={ 8 }  style={{ marginTop: '-8em' }}>
            <Header inverted as='h3' style={{ fontSize: '2em' }}>
              Setting Up A Front-end Web Application
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Once a back-end server is set up, a React.JS App must be created. We recommend setting up GitHub for better file management and version handling.
              <br />More content here...
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={ 6 } >
            <Header icon={ <Icon name='react' /> } style={{ fontSize: '100px', textAlign: 'right', marginTop: '0.2em' }} as='h1' inverted color='blue'/>
            <Header icon={ <Icon name='node js' /> } style={{ fontSize: '100px', marginLeft: '1em' }} as='h1' inverted color='green'/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
          <Button color='blue' style={{ width: '280px' }} size='massive' animated='fade' onClick={() => { window.open("https://react.semantic-ui.com/", "_blank"); }}>
            <Button.Content visible>Learn More</Button.Content>
            <Button.Content hidden>Visit Semantic UI React</Button.Content>
          </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Divider
          as='h3'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
        Setting Up React
    </Divider>
      <Container text style={{ padding: '2em 0em' }}>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Create a React JS App
        </Header>
        <p>
          Add content here...
        </p>
      </Container>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)
export default Setup