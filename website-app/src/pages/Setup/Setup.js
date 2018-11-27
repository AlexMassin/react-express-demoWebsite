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
              offers many different preset frameworks that cater to specific needs, such as Node.
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
      <Container text style={{ margin: '2em 0em 4em 0em' }}>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Update NPM and NPX
        </Header>
        <p>
          In order to create a React app template, we need to use an NPM command. It is recommended to make sure that your server
          has the latest NPM version which contains packages for the NPX command.
          <br /><br />
          You need to execute
          <pre style={{ color: '#2BEF00', backgroundColor: '#000000' }}>{`
  npm install -g npm
          `}</pre>
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
              Once the App is created, the files may be distributed among your team and edited outside of the server with a text editor of their choice in an
              environement they are comfortable in.
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
        Creating and Running a React App
    </Divider>
    <Container text style={{ margin: '2em 0em 4em 0em' }}>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Creating a React App
        </Header>
        <p>
          We are ready to create the folder for our web application. A simple command will create the main directory for our application along with
          subdirectories containing template files to begin creating our website. 
          <br /><br />
          You need to execute
          <pre style={{ color: '#2BEF00', backgroundColor: '#000000' }}>{`
  npx create-react-app my-app
          `}</pre>
          After pressing enter, it will take a while to create the files. This is the most CPU intensive process of the installation and where the 2 GB of
          RAM is useful. Once the creation is complete, you will find a folder named <strong>my-app</strong>. From here, you may 
          <a href="https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/#platform-linux" target="_blank"> link up a Git repository </a>
          (recommended) or 
          <a href="https://docs.oracle.com/cd/E26502_01/html/E29001/remotehowtoaccess-55154.html" target="_blank"> scp </a> 
          the files to your local machine so you and your team may edit the files on their own machines with a text editor of their choice, such as Visual Studio Code.
        </p>
    </Container>
    <Container text style={{ margin: '2em 0em 4em 0em' }}>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Running a React App
        </Header>
        <p>
          After the files are edited or your build is updated and you wish to see the site hosted, you will need to run the React app to view changes. Once you are in the root
          directory of your React app you can begin the developmental build with an simple command.
          <br /><br />
          You need to execute
          <pre style={{ color: '#2BEF00', backgroundColor: '#000000' }}>{`
  npm start
          `}</pre>
          Once the program is running without errors, your website will be publicly visible on browsers by simply typing in your VPS IP into the address bar with the
          port 3000.
          <br /><br />
          You can visit your site by typing
          <pre style={{ color: '#000000', backgroundColor: '#E8E8E8' }}>{`
  SERVER_IP_ADDRESS:3000
          `}</pre>
          When the web app is running as intended, you can start hosting with an optimized production build. You can create the optimized build with a single command.
          <br /><br />
          You need to execute
          <pre style={{ color: '#2BEF00', backgroundColor: '#000000' }}>{`
  npm run build
  npm install -g serve
  serve -s build
          `}</pre>
          Once the build is served, your website will be publicly visible on browsers by simply typing in your VPS IP into the address bar with the
          port 5000.
          <br /><br />
          You can visit your site by typing
          <pre style={{ color: '#000000', backgroundColor: '#E8E8E8' }}>{`
  SERVER_IP_ADDRESS:5000
          `}</pre>
        </p>
    </Container>
    <Divider
          as='h3'
          className='header'
          horizontal
          style={{ margin: '2em 0em', textTransform: 'uppercase' }}
        >
        Domain Redirection
    </Divider>
    [[CONTINUE FROM HERE]]
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