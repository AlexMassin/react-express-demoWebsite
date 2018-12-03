import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { Container, Divider, Header, Segment, Transition, Card, Image, Message } from 'semantic-ui-react';
import color_image from '../../images/color.jpg';
import jordan_image from '../../images/jordan.jpg';
import alexm_image from '../../images/alexm.jpg';
import alexg_image from '../../images/alexg.jpg';
import brent_image from '../../images/brent.jpg';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

class AboutUs extends Component {
	state = { visible: false };

	toggleVisibility = () => this.setState({ visible: !this.state.visible });

	componentDidMount = () => {
		setTimeout(this.setState({ visible: true }), 3000);
	};

	render() {
		const { visible } = this.state;
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
								The individuals who worked countless hours to contribute to this beautiful demo and
								tutorial webpage.
							</Header>
						</Container>
					</Transition>
				</Segment>

				<Segment style={{ backgroundColor: '#F3F3F3', margin: '0px', paddingBottom: '3em' }}>
					<Container>
						<Card.Group itemsPerRow={4} centered style={{ margin: '2em 0em 0em 0em' }}>
							<Card>
								<Image
									centered
									src={alexg_image}
									style={{
										height: '225px',
										width: '225px',
										objectFit: 'cover',
										marginBottom: '1em',
										marginTop: '1em'
									}}
								/>
								<Card.Content
									textAlign="center"
									style={{ backgroundColor: '#FFFFFF', height: '15em', paddingTop: '1em' }}
								>
									<Card.Header style={{ fontSize: '25px' }}>Alex Gomes</Card.Header>
									<Card.Description>
										Alex was responsible for the Setup page, Demo page, and the current page you're
										reading right now. He gathered most of the image assets used, created the card
										component, and helped set up the server.
									</Card.Description>
								</Card.Content>
							</Card>

							<Card>
								<Image
									centered
									src={alexm_image}
									style={{
										height: '225px',
										width: '225px',
										objectFit: 'cover',
										marginBottom: '1em',
										marginTop: '1em'
									}}
								/>
								<Card.Content
									textAlign="center"
									style={{ backgroundColor: '#FFFFFF', height: '15em', paddingTop: '1em' }}
								>
									<Card.Header style={{ fontSize: '25px' }}>Alexander Massin</Card.Header>
									<Card.Description>
										Alexander was responsible for the Home page, Setup page, and the Demo page. He
										created the Navbar component, Footer component, the shopping cart and helped set
										up the server as well as managed the back-end database creation.
									</Card.Description>
								</Card.Content>
							</Card>

							<Card>
								<Image
									centered
									src={brent_image}
									style={{
										height: '225px',
										width: '225px',
										objectFit: 'cover',
										marginBottom: '1em',
										marginTop: '1em'
									}}
								/>
								<Card.Content
									textAlign="center"
									style={{ backgroundColor: '#FFFFFF', height: '15em', paddingTop: '1em' }}
								>
									<Card.Header style={{ fontSize: '25px' }}>Brent Flores</Card.Header>
									<Card.Description>Brent was responsible for the Conclusions page.</Card.Description>
								</Card.Content>
							</Card>

							<Card>
								<Image
									centered
									src={jordan_image}
									style={{
										height: '225px',
										width: '225px',
										objectFit: 'cover',
										marginBottom: '1em',
										marginTop: '1em'
									}}
								/>

								<Card.Content
									textAlign="center"
									style={{ backgroundColor: '#FFFFFF', height: '15em', paddingTop: '1em' }}
								>
									<Card.Header style={{ fontSize: '25px' }}>Jordan Quan</Card.Header>
									<Card.Description>
										Jordan was responsible for the Styles page, this implementing all the components
										in its entirety, and all the styling of the page. He also completely styled the
										Team page and gathered several image assets.
									</Card.Description>
								</Card.Content>
							</Card>
						</Card.Group>
					</Container>
				</Segment>
				<Divider
					as="h3"
					className="header"
					horizontal
					style={{ fontSize: '2em', margin: '2em 0em 2em 0em', textTransform: 'uppercase' }}
				>
					External Resources
				</Divider>

				<Container style={{ margin: '2em 0em 2em 0em', textAlign: 'center' }}>
					<Message
						floating
						style={{
							lineHeight: '1.6em',
							padding: '1.5em',
							fontSize: '1.2em',
							width: '100%',
							marginBottom: '4em'
						}}
					>
						<Header as="h3" style={{ fontSize: '1.3em', margin: '0em 0em 0.5em 0em' }}>
							Hat Image Assets
						</Header>
						The image assets used in our demo page were taken from{' '}
						<a href="https://www.lids.ca/men/hats" target="_blank">
							Lids
						</a>. We do not own these images nor claim to. This is strictly for educational purposes and we
						are not monetising traffic or actually selling products.
					</Message>
				</Container>
			</div>
		);
	}
}

export default AboutUs;
