import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Transition,
  Icon,
  Label
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
            "label": "No Framework",
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
      height: '200%',
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
    height: '80%',
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
              <Header style={{fontSize: '72px', float: 'right', margin: '24px'}} as='h1' inverted color='green' icon={<Icon name='node js' />} content={'What is NodeJS?'} />
          </Transition>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
             <ReactFC {...chartConfigsBar} />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <ReactFC {...chartConfigsPie} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '2em 0em' }} vertical>
      <Container text>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>




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
  );
  }
}
export default App