import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import {
  Container,
  Divider,
  Header,
  Segment,
  Transition,
  Card
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

class AboutUs extends Component {

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
        <Transition visible={visible} animation="fade down" duration={4000}>
				  <Container textAlign="center">
						<Header
							style={{ fontSize: '72px', color: '#5D33B8' }}
							as="h1"
							inverted
							content={'About the Team'}
						/>
						<Header style={{ fontSize: '20px' }} as="h3" inverted color="white">
							The individuals who worked countless hours to contribute to this beautiful demo and tutorial webpage.
					</Header>
				</Container>
			</Transition>
    </Segment>

    <Card.Group itemsPerRow={4} centered style={{ margin: '1em 0em' }}>
      <Card>
        <Card.Content style={{ height: '3em' }}>
          <Card.Header>About Alex Gomes</Card.Header>
        </Card.Content>
        <Card.Content style={{ height: '10em' }}>
          <Card.Description>
            Alex was responsible for the Setup page, Demo page, and the current page you're reading right now.
            He gathered most of the image assets used, created the card component, and helped set up the server. 
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content style={{ height: '3em' }}>
          <Card.Header>About Alexander Massin</Card.Header>
        </Card.Content>
        <Card.Content style={{ height: '10em' }}>
          <Card.Description>
            Alexander was responsible for the Home page, Setup page, and the Demo page.
            He created the Navbar component, Footer component, the shopping cart and 
            helped set up the server as well as managed the back-end database creation.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content style={{ height: '3em' }}>
          <Card.Header>About Brent Flores</Card.Header>
        </Card.Content>
        <Card.Content style={{ height: '10em' }}>
          <Card.Description>
            Brent was responsible for the Conclusions page.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content style={{ height: '3em' }}>
          <Card.Header>About Jordan Quan</Card.Header>
        </Card.Content>
        <Card.Content style={{ height: '10em' }}>
          <Card.Description>
            Jordan was responsible for the Styles page.
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
    <Divider
          as='h3'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
        External Resources
    </Divider>
    <Container text style={{ margin: '2em 0em 4em 0em', textAlign: 'center' }}>
     <Header as='h3' style={{ fontSize: '2em' }}>Hat Image Assets</Header>
      <p>
        The image assets used in our demo page were taken from 
        <a href="https://www.lids.ca/men/hats"
           target="_blank"> Lids</a>.
        We do not own these images nor claim to. This is strictly for educational purposes and
        we are not monetising traffic or actually selling products.
      </p>
    </Container>
  </div>
  );
}
}

export default AboutUs;