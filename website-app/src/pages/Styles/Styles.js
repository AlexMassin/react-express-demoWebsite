import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import {
	Accordion,
	Icon,
	Popup,
	Container,
	Grid,
	Header,
	Transition,
	Segment,
	GridRow,
	GridColumn
} from 'semantic-ui-react';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

class Styles extends Component {
	state = { visible: false, activeIndex: 0 };

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

	Accordion() {
		const { activeIndex } = this.state;

		return (
			<Accordion>
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
											React Grid
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
								<Popup trigger={this.Grid()} style={{ padding: '2em' }}>
									<Popup.Header style={{ color: '#2284D0' }}>3 x 4 Grid</Popup.Header>
									<Popup.Content>
										<pre>
											<code>{this.gridCode}</code>
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
							<Grid.Column>
								<Grid container textAlign="left">
									<Container>
										<Grid.Row>
											<Header
												style={{ fontSize: '20px' }}
												as="h3"
												color="black"
												content={'Accodion Options'}
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

											<p style={{ color: '#2284D0' }}> Hover over grid to see code</p>
										</Grid.Row>
									</Container>
								</Grid>
							</Grid.Column>

							<Grid.Column
								textAlign="left"
								style={{ fontSize: '20px', backgroundColor: 'white', padding: '1em' }}
							>
								{this.Accordion()}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</div>
		);
	}
}

export default Styles;
