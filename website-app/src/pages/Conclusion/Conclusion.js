import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  Transition,
  Icon,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react'
const Conclusion = () => (
  <div>
    <Segment inverted style={{ padding: '5em 0em' }} vertical>
      <Grid columns='3'>
          <Grid.Column textAlign='right'>
          <Icon name='react' color='blue' style={{ padding:'0.9em 0em 0.6em 0em' , fontSize: '8em' }} />
          </Grid.Column>
          <Grid.Column textAlign='center'>
          <Header inverted as='h1' style={{ padding:'0.75em 0em 0.4em 0em' , fontSize: '6em' }}>
          Conclusion
          </Header>
          </Grid.Column>
          <Grid.Column textAlign='left'>
          <Icon name='node js' color='green' style={{ padding:'0.9em 0em 0.6em 0em' , fontSize: '8em' }} />
          </Grid.Column>
      </Grid>
    </Segment>
    <Header as='h2' textAlign='center' style={{padding:'1.2em 0em 0em 0em', fontSize: '2em' }}>
            Our Expectations
    </Header>
    <Container style={{ padding: '2em 0em' }} vertical>
      <Grid stackable verticalAlign='middle' textAlign='center'>
        <Grid.Row>
         <b style={{ fontSize: '1.2em' }}>Did the frameworks perform to your expectations?</b>
        </Grid.Row>
        <Grid.Row style={{lineHeight: '1.6em', padding:'1.5em', fontSize: '1.2em'}}>
        <Message floating>
        
          Our team believes that the frameworks we chose for this project have greatly surpassed our expectations. 
          Semantic UI React has an impressive amount of components and features, which gave our team a variety
          of ways to build and stylize the webpages for this project. Additionally, Semantic UI React is very well-documented, and 
          as a result, learning and implementing Semantic UI React was surprisingly straightforward for our team. Although setting it up
          was quite challenging, Express.js did its job as a back-end framework and it functioned smoothly with our website. The vast capabilities
          of both the front-end and back-end resulted in a website that our team would've never expected to create when we first started.

        </Message>
        </Grid.Row>
      </Grid>
    </Container>
    <Divider horizontal as='h2' style={{ fontSize: '2em' , textTransform: 'none' }}>
        Installation and Configuration Difficulty
    </Divider>
    <Container style={{ padding: '2em 0em' }} vertical>
    <Grid stackable verticalAlign='middle' textAlign='center'>
      <Grid.Row>
      <b style={{ fontSize: '1.2em' }}>Were the frameworks difficult to install or configure?</b>
      </Grid.Row>
      <Grid.Row style={{lineHeight: '1.6em', padding:'1.5em', fontSize: '1.2em'}}>
      <Message floating>
        In general, setting up the frameworks was not too difficult. Due to the existence of online documentation and other resources, getting the frameworks
        to work wasn't a herculean task. Conversely, configuring the frameworks (mainly the back-end) to do what we wanted them to do was considerably harder.
      </Message>
      </Grid.Row>
    </Grid>
    </Container>
    <Divider horizontal as='h2' style={{ fontSize: '2em' , textTransform: 'none' }}>
        Page Creation Difficulty
    </Divider>
    <Container style={{ padding: '2em 0em' }} vertical>
    <Grid stackable verticalAlign='middle' textAlign='center'>
      <Grid.Row>
      <b style={{ fontSize: '1.2em' }}>Was it easy to create the page(s) with the frameworks?</b>
      </Grid.Row>
      <Grid.Row style={{lineHeight: '1.6em', padding:'1.5em', fontSize: '1.2em'}}>
      <Message floating>
        Aside from the pages requiring our back-end, page creation was not difficult at all. Implementing features of Semantic UI React was easy enough for our
        team to experiment with a good amount of what Semantic UI React has to offer. Furthermore, the documentation that Semantic UI React provides practically
        has everything we needed to know about the components we used (we rarely looked outside of the documentation for information about the components). Creating pages that
        utilized our back-end had some difficulty, due to the lack of information and knowledge our team had with the Express.js framework.
      </Message>
      </Grid.Row>
    </Grid>
    </Container>
    <Divider horizontal as='h2' style={{ fontSize: '2em' , textTransform: 'none' }}>
        Learning Curve
    </Divider>
    <Container style={{ padding: '2em 0em' }} vertical>
    <Grid stackable verticalAlign='middle' textAlign='center'>
      <Grid.Row>
      <b style={{ fontSize: '1.2em' }}>Was the learning curve steep compared with regular HTML/CSS/Javascript/PHP?</b>
      </Grid.Row>
      <Grid.Row style={{lineHeight: '1.6em', padding:'1.5em', fontSize: '1.2em'}}>
      <Message floating>
        The learning curve of Semantic UI React was not steep at all (assuming you already have knowledge of HTML/CSS/Javascript). Following the "Getting Started" pages in the Semantic UI React
        documentation should provide enough information for you to build a webpage that utilizes this framework. On the other hand, the learning curve for the Express.js framweork was very steep.
        This is due to the fact that most of the learning that happens with this framework is done through trial and error.
      </Message>
      </Grid.Row>
    </Grid>
    </Container>
    <Divider horizontal as='h2' style={{ fontSize: '2em' , textTransform: 'none' }}>
        Final Thoughts
    </Divider>
    <Container style={{ padding: '2em 0em' }} vertical>
    <Grid stackable verticalAlign='middle' textAlign='center'>
      <Grid.Row>
      <b style={{ fontSize: '1.2em' }}>Would you have done things differently in retrospect? Did you regret your choice of frameworks?</b>
      </Grid.Row>
      <Grid.Row style={{lineHeight: '1.6em', padding:'1.5em', fontSize: '1.2em'}}>
      <Message floating>
        Our team is extremely satisfied with how our website turned out. We all agreed that we do not regret our choice of frameworks, and we believe that there isn't anything we could do differently
        that would make a significant beneficial difference to our final result.
      </Message>
      </Grid.Row>
    </Grid>
    </Container>
  </div>
)
export default Conclusion