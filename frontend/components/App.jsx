import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
// import NavBar from './Nav_bar/Nav_Bar';
import NavBarContainer from './Nav_bar/nav_bar_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
import DashboardContainer from './user_page/dashboard_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div className="front-page">
        <header>
            <h1>Flash of Brilliance</h1>
        </header>
        <Switch>
            <AuthRoute exact path={`/dashboard`} component={DashboardContainer}/>
            <Route path="/" component={NavBarContainer} />
        </Switch>
    </div>
);

export default App;