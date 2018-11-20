import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import AboutUs from './pages/AboutUs/AboutUs.js';
import Conclusion from './pages/Conclusion/Conclusion.js';
import Demonstration from './pages/Demonstration/Demonstration.js';
import Setup from './pages/Setup/Setup.js';
import Styles from './pages/Styles/Styles.js';


const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/home' component={App} />
        <Route path='/team' component={AboutUs} />
        <Route path='/conclusion' component={Conclusion} />
        <Route path='/demonstration' component={Demonstration} />
        <Route path='/setup' component={Setup} />
        <Route path='/styles' component={Styles} />
    </Switch>
    </BrowserRouter>

);

export default Routes