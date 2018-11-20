import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { Button, Container, Grid, Header, Transition, Segment } from 'semantic-ui-react';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

class Styles extends Component {
	state = { visible: false };

	toggleVisibility = () => this.setState({ visible: !this.state.visible });

	componentDidMount = () => {
		setTimeout(this.setState({ visible: true }), 3000);
	};

	render() {
		const { visible } = this.state;
		return (
			<div>
				<Segment inverted style={{ paddingTop: '8em', paddingBottom: '6em' }} vertical>
					<Grid container stackable verticalAlign="middle">
						<Grid.Row>
							<Grid.Column>
								<Transition visible={visible} animation="fade down" duration={4000}>
									<Container textAlign="center">
										<Header
											style={{ fontSize: '72px' }}
											as="h1"
											inverted
											color="blue"
											content={'React JS Styling'}
										/>
										<Header
											style={{ fontSize: '20px' }}
											as="h3"
											inverted
											color="white"
											content={'How to Style a React JS Page'}
										/>
									</Container>
								</Transition>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</div>
		);
	}
}

export default Styles;
