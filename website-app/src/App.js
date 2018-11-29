import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {
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
} from 'semantic-ui-react'


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const myDataSourceBar = {
    "chart": {
        "caption": "Percentage of Users Who Would Use a Framework Again",
        "yAxisName": "Users (%)",
        "xAxisName": "Frameworks",
        "numberSuffix": "%",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "React",
            "value": "92"
        },
        {
            "label": "Vue",
            "value": "88"
        },
        {
            "label": "N/A",
            "value": "65"
        },
        {
            "label": "Angular 2",
            "value": "64"
        },
        {
            "label": "Ember",
            "value": "47"
        },
        {
            "label": "Angular",
            "value": "46"
        },
        {
            "label": "Backbone",
            "value": "31"
        }
    ]
};

const chartConfigsBar = {
      type: 'column2d',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      dataSource: myDataSourceBar,
};

const myDataSourcePie = {
  "chart": {
    "caption": "Development Primary Focus - NodeJS",
    "showvalues": "1",
    "showpercentintooltip": "1",
    "numbersuffix": "%",
    "enablemultislicing": "1",
    "theme": "fusion"
  },
  "data": [
      {
          "label": "Back-End Development",
          "value": "39"
      },
      {
          "label": "Full Stack",
          "value": "36"
      },
      {
          "label": "Front-End Development",
          "value": "16"
      },
      {
          "label": "Other",
          "value": "9"
      }
  ]
};

const chartConfigsPie = {
    type: 'pie3d',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: myDataSourcePie,
};


class App extends Component{

  state={visible:false}

  toggleVisibility = () => this.setState({ visible: !this.state.visible })


componentDidMount = () => {
    setTimeout(
      this.setState({visible:true}),
      3000
    )
}

render() {
  const {visible} = this.state
  return (
  <div>
    <Segment inverted style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column>
          <Transition visible={visible} animation='fade down' duration={8000}>
              <Header icon={<Icon name='react' />} style={{fontSize: '72px'}} as='h1' inverted color='blue' content={'What is ReactJS?'} />
          </Transition>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          <Transition visible={visible} animation='fade up' duration={8000}>
              <Header style={{fontSize: '72px', float: 'right', margin: '24px'}} as='h1' inverted color='green' icon={<Icon name='node js' />} content={'What is Express?'} />
          </Transition>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
    <Divider
          as='h2'
          className='header'
          horizontal
          style={{ margin: '1em 2em', textTransform: 'uppercase', textAlign: 'center' }}
        >
          <Icon name='users' circular color='teal'/>
          Popularity
        </Divider>
      <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '2em', paddingTop: '1em' }}>
             <ReactFC {...chartConfigsBar} />
             <Popup trigger={<Label style={{float: 'left'}} color='violet'  size='tiny'>Citation</Label>} content={"Thinkwik. “Why ReactJS Is Gaining so Much Popularity These Days.” Medium.com, Medium, 6 Dec. 2017, medium.com/@thinkwik/why-reactjs-is-gaining-so-much-popularity-these-days-c3aa686ec0b3."} />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
          <Header as='h4' style={{ fontSize: '2em' }}>
            What is ReactJS?
          </Header>
          <p style={{ fontSize: '1.1em' }}>
           ReactJS is an open source JavaScript Library that was designed by Facebook to provide the best DOM rendering performance for web apps with minimal coding and files required.          </p>
          <Header as='h4' style={{ fontSize: '2em' }}>
            Why is it so popular?
          </Header>
          <p style={{ fontSize: '1.1em' }}>
            ReactJS allows for pieces of code to be broken into components for reusability using JSX which allows developers to create a more efficient and simplified web app.
            ReactJS implements JSX which uses HTML syntax to construct React Components in a single file, rather than having nested HTML documents using JS syntax.
            If you wish to learn more about JSX, <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank">click here. </a> 
            <br />
            <br />
            Within an article by Medium, it states, "Today, ReactJS has become highly popular because of its extra simplicity and flexibility. Many people are even referring to it as the future of web development. It is estimated that more than 1,300 developers and over 94,000 sites utilize ReactJS" (Thinkwik).
            Furthermore, ReactJS has gained credibility by being the #1 Framework used by Facebook, Airbnb, and Instagram within their web apps.
          </p>
         </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '2em', paddingTop: '4em' }}>
          <Header as='h4' style={{ fontSize: '2em' }}>
            What is Express?
          </Header>
          <p style={{ fontSize: '1.1em' }}>
           Express is a web application server framework that provides a thin layer of robust features and 
           applications on top of NodeJS. NodeJS is an open source server environment that uses Chrome's V8 JavaScript engine.
           </p>
          <Header as='h4' style={{ fontSize: '2em' }}>
            Why is it so popular?
          </Header>
          <p style={{ fontSize: '1.1em' }}>
            Since Express is built off of NodeJS, it provides the same features and flexibility that NodeJS provides. Moreover, since 
            Express is a minimailistic framework, it does not take away from the raw performance of NodeJS. 
            Express also adds functionality to NodeJS, such as routing, middleware, and static files serving. 
            This framework has become a Full Stack Developer's dream due to these benefits.w
            <br />
            <br />
            Since NodeJS is extremely flexible, it offers that flexibility towards Express, making it highly demanded within the workspace today.
          </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
                  <ReactFC {...chartConfigsPie} />
                  <Popup trigger={<Label style={{float: 'right'}} color='violet' size='tiny'>Citation</Label>} content={"Hámori, F. (2017, July 26th). This is what Node.js is used for in 2017 - Survey Results. Retrieved from https://blog.risingstack.com/what-is-node-js-used-for-2017-survey/"} />
         </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


    <Header as='h1' style = {{margin: '3em 3em', marginBottom: '-1em'}} icon textAlign='center'>
      <Icon name='code' color='red' circular />
      <Header.Content>Strengths & Weaknesses</Header.Content>
      <Header.Subheader>Hover over cells for more detail</Header.Subheader>
    </Header>

    <Grid stackable columns='equal'>
      <Grid.Row textAlign='center'>
        <Grid.Column>
        <Header as='h2' style = {{margin: '1em'}} icon textAlign='center'>
            <Icon name='react' color='teal' circular />
            <Header.Content>ReactJS</Header.Content>
        </Header>
        </Grid.Column>
        <Grid.Column>
        <Header as='h2' style = {{margin: '1em'}} icon textAlign='center'>
          <Icon name='node js' color='green' circular />
          <Header.Content>Express</Header.Content>
        </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign='center'>
        <Grid.Column>
            <center>
            <Table color = 'blue' celled fixed style={{width: '75%', marginBottom: '5em'}}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Strength</Table.HeaderCell>
                <Table.HeaderCell>Weakness</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Popup trigger={<Table.Cell>Virtual DOM in ReactJS promotes a stronger user experience & allows for faster development</Table.Cell>} content="Usually frameworks need to update the whole DOM of a website when content changes. ReactJS uses an abstract copy of the DOM called a Virtual DOM. This Virtual DOM allows ReactJS apps to update small changes without affecting other parts of the interface." />
                <Table.Cell>Unknown</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Popup trigger={<Table.Cell>React components save developers time when code needs to be reused</Table.Cell>} content="Since ReactJS allows for JSX code to be broken down into components, this allows developers to create a modular app with minimal requirement to copy code into HTML files. This is why ReactJS is highly preferred over AngularJS by developers today. Changing one component does not affect anything else and allows for isolated updates to an application."/>
                <Table.Cell>
                  <Icon name='checkmark' />
                  Approved
                </Table.Cell>
              </Table.Row>
              <Table.Row>
              <Popup trigger={<Table.Cell>ReactJS provides a one-direction data flow which allows for a more stable application</Table.Cell>} content="The data flow in ReactJS is only downward data binding. This means that any changes in child props does not affect the parent component to ensure safety and stability within the application. The only way to pass data from a child to a parent is through callbacks." />
                <Table.Cell>Unknown</Table.Cell>
                
              </Table.Row>
              <Table.Row>
              <Popup trigger={<Table.Cell>The development of ReactJS is at a high pace due to his popularity and open source characteristic</Table.Cell>} content="ReactJS is an open source project made by Facebook. Since the code is on Github, it allows for other developers to work on the framework without having to be at Facebook. This causes the development of the framework to be highly supported."/>
                <Table.Cell>Unknown</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
                
              </Table.Row>
              <Table.Row negative>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          </center>
        </Grid.Column>
        <Grid.Column>
        <center>
            <Table celled fixed style={{width: '75%', marginBottom: '5em'}}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Strength</Table.HeaderCell>
                <Table.HeaderCell>Weakness</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
              </Table.Row>
              <Table.Row positive>
                <Table.Cell>Jimmy</Table.Cell>
                <Table.Cell>
                  <Icon name='checkmark' />
                  Approved
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
                
              </Table.Row>
              <Table.Row negative>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Unknown</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          </center>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  </div>
  );
  }
}
export default App