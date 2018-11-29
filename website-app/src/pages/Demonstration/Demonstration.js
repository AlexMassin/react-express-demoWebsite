import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import {
  Button,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Accordion,
	Icon,
	Popup,
	Container,
	Transition,
	Radio,
  GridRow,
  Card,
  CardGroup
} from 'semantic-ui-react'
import HatCard from '../../components/HatCard/HatCard';
import hat_TR_NBA from "../../images/hat_TR_NBA.jpeg";
import hat_MH_NBA from "../../images/hat_MH_NBA.jpeg";
import hat_CB_NBA from "../../images/hat_CB_NBA.jpeg";
import hat_LAL_NBA from "../../images/hat_LAL_NBA.jpeg";
import hat_BJ_MLB from "../../images/hat_BJ_MLB.jpeg";
import hat_NYY_MLB from "../../images/hat_NYY_MLB.jpeg";
import hat_DT_MLB from "../../images/hat_DT_MLB.jpeg";
import hat_BRS_MLB from "../../images/hat_BRS_MLB.jpeg";
import hat_TML_NHL from "../../images/hat_TML_NHL.jpeg";
import hat_EO_NHL from "../../images/hat_EO_NHL.jpeg";
import hat_CAN1_NHL from "../../images/hat_CAN1_NHL.jpeg";
import hat_CAN2_NHL from "../../images/hat_CAN2_NHL.jpeg";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

class Demonstration extends Component {

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
							style={{ fontSize: '72px', color: '#FC8200' }}
							as="h1"
							inverted
							content={'Imperial Caps'}
						/>
						<Header style={{ fontSize: '20px' }} as="h3" inverted color="white">
							Modern Day Helmets for Modern Day Warriors <Icon name='hand rock outline' style={{ color: '#FC8200' }}/>
					</Header>
				</Container>
			</Transition>
    </Segment>

    <Card.Group itemsPerRow={4} centered style={ {margin: '1em 0em' }}>
      <HatCard 
        imgsrc={hat_TR_NBA} 
        name='Toronto Raptor New Era NBA City Series 2.0'
        sub='59FIFTY Cap'
        price='$48.99'
        />

        <HatCard 
        imgsrc={hat_MH_NBA}
        name='Miami Heat NBA City Series 2.0'
        sub='59FIFTY Cap'
        price='$48.99'
        />

        <HatCard 
        imgsrc={hat_CB_NBA}
        name='Chicago Bulls NBA City Series 2.0'
        sub='59FIFTY Cap'
        price='$48.99'
        />

        <HatCard 
        imgsrc={hat_LAL_NBA}
        name='Los Angeles Lakers NBA City Series 2.0'
        sub='59FIFTY Cap'
        price='$48.99'
        />

        <HatCard 
        imgsrc={hat_BJ_MLB} 
        name='Toronto Blue Jays New Era MLB Authenic Collection'
        sub='59FIFTY Cap'
        price='$42.99'
        />

        <HatCard 
        imgsrc={hat_NYY_MLB} 
        name='New York Yankees New Era MLB Authenic Collection'
        sub='59FIFTY Cap'
        price='$42.99'
        />

        <HatCard 
        imgsrc={hat_DT_MLB} 
        name='Detroit Tigers New Era MLB Authenic Collection'
        sub='59FIFTY Cap'
        price='$42.99'
        />

        <HatCard 
        imgsrc={hat_BRS_MLB} 
        name='Boston Red Sox New Era MLB Authenic Collection'
        sub='59FIFTY Cap'
        price='$42.99'
        />

        <HatCard 
        imgsrc={hat_TML_NHL} 
        name='Toronto Maple Leafs NHL Rinkside'
        sub='Flex Cap'
        price='$40.99'
        />

        <HatCard 
        imgsrc={hat_EO_NHL} 
        name='Edmonton Oilers NHL Throwback'
        sub='Snapback Cap'
        price='$39.99'
        />

        <HatCard 
        imgsrc={hat_CAN1_NHL} 
        name='Canada Hockey Nike IIHF Dri-Fit Wool'
        sub='Adjustable Cap'
        price='$29.99'
        />

        <HatCard 
        imgsrc={hat_CAN2_NHL} 
        name='Canada Hockey Nike Olympics Dri-Fit Wool'
        sub='Classic Cap'
        price='$29.99'
        />
      </Card.Group>
    </div>
  );
}
}
export default Demonstration;