import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Icon } from 'semantic-ui-react';

const styles = {
    header: {
        fontSize: '72px',
        marginTop: '150px'
    }
}

const NoPage = () => (
    <center>
    <Header as='h1' icon color='red' size='huge'>
        <Icon style={styles.header} name='settings' size='big' />
        Error: 404
        <Header.Subheader>You have visited a page that does not exist</Header.Subheader>
    </Header>
    </center>   

);

export default NoPage