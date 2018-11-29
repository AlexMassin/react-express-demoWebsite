import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import standard_image from '../../images/standard.png';
import color_image from '../../images/color.jpg';
import link_image from '../../images/link.png';
import paragraph_image from '../../images/paragraph.png';
import {
	Accordion,
	Icon,
	Popup,
	Container,
	Grid,
	Header,
	Transition,
	Segment,
	Radio,
	Card,
	Feed,
	Image,
	Button,
	Modal,
	ModalActions
} from 'semantic-ui-react';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

class Styles extends Component {
	state = { visible: false, activeIndex: 0, inverted: false, styled: true };

	toggleVisibility = () => this.setState({ visible: !this.state.visible });

	componentDidMount = () => {
		setTimeout(this.setState({ visible: true }), 3000);
	};

	handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};

	accordionSegmentStyle() {
		if (this.state.inverted == true) {
			return { boxShadow: 'none', border: '0px' };
		} else {
			return { backgroundColor: '#F3F3F3', boxShadow: 'none', border: '0px' };
		}
	}

	accordionOption(title, text) {
		return <div style={{ paddingBottom: '1em' }} />;
	}

	gridCode = `<Grid columns={4}>
	<Grid.Row>
		<Grid.Column/>
		<Grid.Column/>
		<Grid.Column/>
		<Grid.Column/>
	</Grid.Row>
	...
</Grid>
`;

	linkCode = `<Card
image = "..."
href = "..."
header = "..."
description = "..."
/>
`;

	cardCode = `<Card>
	<Image src="..."/>
	<Card.Content>
		<Card.Header/>
		<Card.Description/>
	</Card.Content>
</Card>
`;

	feedCardCode = `<Card>
	<Card.Content>
		<Card.Header/>
		<Card.Description/>
	</Card.Content>
	<Card.Content>
		<Feed/>
	</Card.Content>
</Card>
`;

	colorCardCode = `<Card
image = "..."
color = "..."
header = "..."
description = "..."
/>
`;

	standardModalText = `To top align the modal set centered attribute to false.

<Modal trigger={<Button/>} centered='true'>
	<Modal.Header/>
	<Modal.Content image>
		<Image/>
		<Modal.Description/>
	</Modal.Content>
</Modal>
`;

	basicModalText = `<Modal trigger={<Button/>} basic >
	<Modal.Header/>
	<Modal.Content/>
	<Modal.Actions>
		<Button/>
		<Button/>
	</Modal.Actions>
</Modal>
`;

	scrollingModalText = `<Modal trigger={<Button/>} centered='true'>
	<Modal.Header/>
	<Modal.Content scrolling image>
		<Image/>
		<Modal.Description/>
	</Modal.Content>
</Modal>
`;

	Card(image, header, description) {
		return (
			<Card>
				<Image src={image} style={{ height: '225px', objectFit: 'cover' }} />
				<Card.Content>
					<Card.Header>{header}</Card.Header>
					<Card.Meta>
						<span className="date">meta</span>
					</Card.Meta>
					<Card.Description>{description}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name="dollar" />
						extra
					</a>
				</Card.Content>
			</Card>
		);
	}

	contentCard() {
		return (
			<Card>
				<Card.Content>
					<Card.Header>Recent Activity</Card.Header>
					<Card.Description>This is an example using a Feed within a Card </Card.Description>
				</Card.Content>
				<Card.Content>
					<Feed>
						<Feed.Event>
							<Feed.Label icon="dollar" />
							<Feed.Content>
								<Feed.Date content="1 day ago" />
								<Feed.Summary>
									You added <a>Jenny Hess</a> to your <a>coworker</a> group.
								</Feed.Summary>
							</Feed.Content>
						</Feed.Event>

						<Feed.Event>
							<Feed.Label icon="address book" />
							<Feed.Content>
								<Feed.Date content="3 days ago" />
								<Feed.Summary>
									You added <a>Molly Malone</a> as a friend.
								</Feed.Summary>
							</Feed.Content>
						</Feed.Event>

						<Feed.Event>
							<Feed.Label icon="envelope" />
							<Feed.Content>
								<Feed.Date content="4 days ago" />
								<Feed.Summary>
									You added <a>Elliot Baker</a> to your <a>musicians</a> group.
								</Feed.Summary>
							</Feed.Content>
						</Feed.Event>
						<Feed.Event>
							<Feed.Label icon="bell" />
							<Feed.Content>
								<Feed.Date content="7 days ago" />
								<Feed.Summary>
									You added <a>Joe West</a> to your <a>sports</a> group.
								</Feed.Summary>
							</Feed.Content>
						</Feed.Event>
					</Feed>
				</Card.Content>
			</Card>
		);
	}

	colorCard(imageSrc) {
		return (
			<Card color="blue">
				<Image src={imageSrc} style={{ height: '300px', objectFit: 'cover' }} />
				<Card.Content>
					<Card.Header>Color Card</Card.Header>
					<Card.Description>
						The color attribute allows you to add a colored bar to the card.
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}

	linkCard(imageSrc) {
		return (
			<Card href="https://react.semantic-ui.com/views/card/">
				<Image inverted src={imageSrc} style={{ height: '300px', objectFit: 'cover' }} />
				<Card.Content>
					<Card.Header>Link Card</Card.Header>
					<Card.Description>This card will take you to the React UI Semantic Card page.</Card.Description>
				</Card.Content>
			</Card>
		);
	}

	Accordion() {
		const { activeIndex } = this.state;
		const { styled } = this.state;
		const { inverted } = this.state;

		return (
			<Accordion styled={styled} inverted={inverted}>
				<Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
					<Icon name="dropdown" />
					What is a dog?
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 0}>
					<p>
						A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
						as a welcome guest in many households across the world.
					</p>
				</Accordion.Content>

				<Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
					<Icon name="dropdown" />
					What kinds of dogs are there?
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 1}>
					<p>
						There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a
						breed of dog that they find to be compatible with their own lifestyle and desires from a
						companion.
					</p>
				</Accordion.Content>

				<Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
					<Icon name="dropdown" />
					How do you acquire a dog?
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 2}>
					<p>
						Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or
						shelters.
					</p>
					<p>
						A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows
						you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly,
						finding your dog from a shelter, helps give a good home to a dog who may not find one so
						readily.
					</p>
				</Accordion.Content>
			</Accordion>
		);
	}

	Grid() {
		return (
			<Grid columns={4} style={{ height: '400px', width: '100%' }}>
				<Grid.Row textAlign="center">
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns="equal" textAlign="center">
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns="equal" textAlign="center">
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
					<Grid.Column>
						<div style={{ height: '100px', width: '100%', backgroundColor: 'darkgray' }} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}

	render() {
		const { visible } = this.state;
		const { inverted } = this.state;
		return (
			<div>
				<Segment inverted style={{ paddingTop: '8em', paddingBottom: '6em' }} vertical>
					<Transition visible={visible} animation="fade down" duration={4000}>
						<Container textAlign="center">
							<Header
								style={{ fontSize: '72px' }}
								as="h1"
								inverted
								color="blue"
								content={'React JS Styling'}
							/>
							<Header style={{ fontSize: '20px' }} as="h3" inverted color="white">
								How to Style a React JS Page
							</Header>
						</Container>
					</Transition>
				</Segment>

				{/* Grid Segment */}

				<Segment style={{ paddingTop: '4em', paddingBottom: '6em' }} vertical>
					<Grid container stackable verticalAlign="middle">
						<Container style={{ paddingBottom: '2em' }} textAlign="center">
							<Grid.Row style={{ paddingBottom: '1em' }}>
								<Grid.Column>
									<Header style={{ fontSize: '30px' }} as="h2" color="black">
										<a
											href="https://react.semantic-ui.com/collections/grid/"
											style={{ cursor: 'pointer', color: 'black' }}
										>
											Grid
										</a>
									</Header>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row>
								<Container>
									<p>
										The UI Semantic Grid system is used seamlessley with React JS to easily create
										any website layout.
									</p>
								</Container>
							</Grid.Row>
						</Container>

						<Grid.Row columns={2} textAlign="center">
							<Grid.Column>
								<Popup inverted trigger={this.Grid()} style={{ padding: '2em' }}>
									<Popup.Header style={{ color: '#2284D0' }}>3 x 4 Grid</Popup.Header>
									<Popup.Content>
										<pre>
											<code style={{ color: '#53FF54' }}>{this.gridCode}</code>
										</pre>
									</Popup.Content>
								</Popup>
							</Grid.Column>

							<Grid.Column>
								<Grid container textAlign="left" style={{ height: '400px', width: '100%' }}>
									<Container>
										<Grid.Row>
											<Header
												style={{ paddingTop: '1em', fontSize: '20px' }}
												as="h3"
												color="black"
												content={'Adjusting the Grid'}
											/>
											<Header
												style={{ fontSize: '16px' }}
												as="h3"
												color="blue"
												content={'Columns'}
											/>
											<p>
												Grids divide horizontal space into indivisible units called "columns".
												All columns in a grid must specify their width as proportion of the
												total available row width. All grid systems choose an arbitrary column
												count to allow per row. Semantic's default theme uses 16 columns.
											</p>

											<Header
												style={{ fontSize: '16px' }}
												as="h3"
												color="blue"
												content={'Rows'}
											/>
											<p>
												Rows are groups of columns which are aligned horizontally. Rows can
												either be explicit, marked with an additional row element, or implicit,
												automatically occurring when no more space is left in a previous row.
												After each group of columns vertical spacing is added to separate each
												group of columns, creating vertical rhythm.
											</p>
											<br />
											<p style={{ color: '#2284D0' }}> Hover over grid to see code</p>
										</Grid.Row>
									</Container>
								</Grid>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>

				{/* Grid Segment */}

				<Segment style={{ paddingTop: '4em', paddingBottom: '6em', backgroundColor: '#F3F3F3' }} vertical>
					<Grid container stackable verticalAlign="middle">
						<Container style={{ paddingBottom: '2em' }} textAlign="center">
							<Grid.Row style={{ paddingBottom: '1em' }}>
								<Grid.Column>
									<Header style={{ fontSize: '30px' }} as="h2" color="black">
										<a
											href="https://react.semantic-ui.com/modules/accordion/"
											style={{ cursor: 'pointer', color: 'black' }}
										>
											Accordion
										</a>
									</Header>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row>
								<Container>
									<p>An accordion allows users to toggle the display of sections of content.</p>
								</Container>
							</Grid.Row>
						</Container>

						<Grid.Row columns={2} textAlign="center">
							<Grid.Column textAlign="left" style={{ fontSize: '20px', padding: '1em' }}>
								<Segment style={this.accordionSegmentStyle()} inverted={inverted}>
									{this.Accordion()}
								</Segment>
							</Grid.Column>

							<Grid.Column>
								<Grid container stackable verticalAlign="middle" textAlign="left">
									<Grid.Row>
										<Grid.Column>
											<Container>
												<Header
													style={{ fontSize: '20px' }}
													as="h3"
													color="black"
													content={'Accordion Options'}
												/>

												<p style={{ fontSize: '16px', marginBottom: '2em' }}>
													These are additional options for the Accordion component.
												</p>

												<Popup
													inverted
													trigger={
														<Radio
															defaultChecked
															style={{ paddingBottom: '1em' }}
															toggle
															onClick={() => {
																this.setState({ styled: !this.state.styled });
															}}
															label="Styled"
														/>
													}
												>
													<Popup.Content>
														<pre>
															<code
																style={{ color: '#53FF54' }}
															>{`<Accordion styled>`}</code>
														</pre>
													</Popup.Content>
												</Popup>

												<br />

												<Popup
													inverted
													trigger={
														<Radio
															style={{ paddingBottom: '1em' }}
															toggle
															onClick={() => {
																this.setState({ inverted: !this.state.inverted });
															}}
															label="Inverted"
														/>
													}
												>
													<Popup.Content>
														<pre>
															<code style={{ color: '#53FF54' }}>
																{'<Segment inverted>\n\t<Accordion inverted>'}
															</code>
														</pre>
													</Popup.Content>
												</Popup>

												<p style={{ fontSize: '14px', color: '#2284D0', marginTop: '1em' }}>
													Click on the toggles to preview the option and hover over the
													toggles to see the code.
												</p>
											</Container>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>

				{/* Card Segment */}

				<Segment style={{ paddingTop: '4em', paddingBottom: '6em' }} vertical>
					<Grid container stackable verticalAlign="middle">
						<Container style={{ paddingBottom: '2em' }} textAlign="center">
							<Grid.Row style={{ paddingBottom: '1em' }}>
								<Grid.Column>
									<Header style={{ fontSize: '30px' }} as="h2" color="black">
										<a
											href="https://react.semantic-ui.com/views/card/"
											style={{ cursor: 'pointer', color: 'black' }}
										>
											Card
										</a>
									</Header>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row>
								<Container>
									<p>A card displays site content in a manner similar to a playing card</p>
									<p style={{ fontSize: '14px', color: '#2284D0', marginTop: '1em' }}>
										Hover over cards to reveal code.
									</p>
								</Container>
							</Grid.Row>
						</Container>

						<Grid.Row textAlign="center">
							<Grid.Column>
								<Card.Group itemsPerRow={4}>
									<Popup
										inverted
										trigger={this.Card(
											standard_image,
											'Standard Card',
											'This is standard Card created with multiple tags rather than <Card> attributes.'
										)}
										style={{ padding: '2em' }}
									>
										<Popup.Content>
											<pre>
												<code style={{ color: '#53FF54' }}>{this.cardCode}</code>
											</pre>
										</Popup.Content>
									</Popup>

									<Popup inverted trigger={this.linkCard(link_image)} style={{ padding: '2em' }}>
										<Popup.Content>
											<pre>
												<code style={{ color: '#53FF54' }}>{this.linkCode}</code>
											</pre>
										</Popup.Content>
									</Popup>

									<Popup inverted trigger={this.colorCard(color_image)} style={{ padding: '2em' }}>
										<Popup.Content>
											<pre>
												<code style={{ color: '#53FF54' }}>{this.colorCardCode}</code>
											</pre>
										</Popup.Content>
									</Popup>

									<Popup inverted trigger={this.contentCard()} style={{ padding: '2em' }}>
										<Popup.Content>
											<pre>
												<code style={{ color: '#53FF54' }}>{this.feedCardCode}</code>
											</pre>
										</Popup.Content>
									</Popup>
								</Card.Group>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>

				{/* Modal */}

				<Segment style={{ paddingTop: '4em', paddingBottom: '6em', backgroundColor: '#F3F3F3' }} vertical>
					<Grid container stackable verticalAlign="middle">
						<Container style={{ paddingBottom: '2em' }} textAlign="center">
							<Grid.Row style={{ paddingBottom: '1em' }}>
								<Grid.Column>
									<Header style={{ fontSize: '30px' }} as="h2" color="black">
										<a
											href="https://react.semantic-ui.com/modules/modal/"
											style={{ cursor: 'pointer', color: 'black' }}
										>
											Modal
										</a>
									</Header>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row>
								<Container>
									<p>
										A modal displays content that temporarily blocks interactions with the main view
										of a site.
									</p>
									<p style={{ fontSize: '14px', color: '#2284D0', marginTop: '1em' }}>
										Hover over the modals to see code. Click to see example.
									</p>
								</Container>
							</Grid.Row>
						</Container>

						<Grid.Row textAlign="center">
							<Container textAlign="center">
								<Modal
									trigger={
										<Button color="blue" style={{ padding: '0px' }}>
											<Popup
												inverted
												trigger={<div style={{ padding: '20px' }}>Standard Modal</div>}
											>
												<Popup.Content>
													<pre>
														<code style={{ color: '#53FF54' }}>
															{this.standardModalText}
														</code>
													</pre>
												</Popup.Content>
											</Popup>
										</Button>
									}
								>
									<Modal.Header>Select a Photo</Modal.Header>
									<Modal.Content image>
										<Image wrapped size="medium" src={color_image} />
										<Modal.Description>
											<Header>Default Profile Image</Header>
											<p>
												We've found the following gravatar image associated with your e-mail
												address.
											</p>
											<p>Is it okay to use this photo?</p>
										</Modal.Description>
									</Modal.Content>
								</Modal>

								<Modal
									basic
									trigger={
										<Button color="blue" style={{ padding: '0px' }}>
											<Popup
												inverted
												trigger={<div style={{ padding: '20px' }}>Basic Modal</div>}
											>
												<Popup.Content>
													<pre>
														<code style={{ color: '#53FF54' }}>{this.basicModalText}</code>
													</pre>
												</Popup.Content>
											</Popup>
										</Button>
									}
								>
									<Header icon="archive" content="Archive Old Messages" />
									<Modal.Content>
										<p>
											Your inbox is getting full, would you like us to enable automatic archiving
											of old messages?
										</p>
									</Modal.Content>
									<Modal.Actions>
										<Button color="red" inverted>
											<Icon name="remove" /> No
										</Button>
										<Button color="green" inverted>
											<Icon name="checkmark" /> Yes
										</Button>
									</Modal.Actions>
								</Modal>

								<Modal
									trigger={
										<Button color="blue" style={{ padding: '0px' }}>
											<Popup
												inverted
												trigger={<div style={{ padding: '20px' }}>Scrolling Modal</div>}
											>
												<Popup.Content>
													<pre>
														<code style={{ color: '#53FF54' }}>
															{this.scrollingModalText}
														</code>
													</pre>
												</Popup.Content>
											</Popup>
										</Button>
									}
								>
									<Modal.Header>Profile Picture</Modal.Header>
									<Modal.Content scrolling image>
										<Image wrapped size="medium" src={standard_image} />
										<Modal.Description>
											<Header>Modal Header</Header>
											<p>
												This is an example of expanded content that will cause the modal's
												dimmer to scroll
											</p>
											<Image src={paragraph_image} />
											<Image src={paragraph_image} />
											<Image src={paragraph_image} />
											<Image src={paragraph_image} />
											<Image src={paragraph_image} />
											<Image src={paragraph_image} />
											<Image src={paragraph_image} />
											<br />
										</Modal.Description>
									</Modal.Content>
								</Modal>
								{/* </Container>
						</Grid.Row>

						<Container textAlign="center">
							<Grid.Row> */}
								<Modal
									size="mini"
									trigger={
										<Button color="blue" style={{ padding: '0px' }}>
											<Popup inverted trigger={<div style={{ padding: '20px' }}>Mini Modal</div>}>
												<Popup.Content>
													<pre>
														<code
															style={{ color: '#53FF54' }}
														>{`<Modal size='mini' trigger={}>\n\t...\n</Modal>`}</code>
													</pre>
												</Popup.Content>
											</Popup>
										</Button>
									}
								>
									<Modal.Header>Delete Your Account</Modal.Header>
									<Modal.Content>
										<p>Are you sure you want to delete your account</p>
									</Modal.Content>
									<Modal.Actions>
										<Button negative>No</Button>
										<Button positive icon="checkmark" labelPosition="right" content="Yes" />
									</Modal.Actions>
								</Modal>
								<Modal
									size="small"
									trigger={
										<Button color="blue" style={{ padding: '0px' }}>
											<Popup
												inverted
												trigger={<div style={{ padding: '20px' }}>Small Modal</div>}
											>
												<Popup.Content>
													<pre>
														<code
															style={{ color: '#53FF54' }}
														>{`<Modal size='small' trigger={}>\n\t...\n</Modal>`}</code>
													</pre>
												</Popup.Content>
											</Popup>
										</Button>
									}
								>
									<Modal.Header>Delete Your Account</Modal.Header>
									<Modal.Content>
										<p>Are you sure you want to delete your account</p>
									</Modal.Content>
									<Modal.Actions>
										<Button negative>No</Button>
										<Button positive icon="checkmark" labelPosition="right" content="Yes" />
									</Modal.Actions>
								</Modal>
								<Modal
									size="fullscreen"
									trigger={
										<Button color="blue" style={{ padding: '0px' }}>
											<Popup
												inverted
												trigger={<div style={{ padding: '20px' }}>Fullscreen Modal</div>}
											>
												<Popup.Content>
													<pre>
														<code
															style={{ color: '#53FF54' }}
														>{`<Modal size='fullscreen' trigger={}>\n\t...\n</Modal>`}</code>
													</pre>
												</Popup.Content>
											</Popup>
										</Button>
									}
								>
									<Modal.Header>Delete Your Account</Modal.Header>
									<Modal.Content>
										<p>Are you sure you want to delete your account</p>
									</Modal.Content>
									<Modal.Actions>
										<Button negative>No</Button>
										<Button positive icon="checkmark" labelPosition="right" content="Yes" />
									</Modal.Actions>
								</Modal>
							</Container>
						</Grid.Row>
					</Grid>
				</Segment>
			</div>
		);
	}
}

export default Styles;
