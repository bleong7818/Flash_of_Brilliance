import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
// import NavBar from './Nav_bar/Nav_Bar';
import NavBarContainer from './Nav_bar/nav_bar_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
import DashboardContainer from './user_page/dashboard_container';
import MainPageContainer from './main_page/main_page_container'
import { AuthRoute } from '../util/route_util';
import MainPage from './main_page/main_page';


const App = () => (
    <div className="front-page">
        <header>
            <h1>Flash of Brilliance</h1>
        </header>
        <Switch>
            <AuthRoute exact path={`/dashboard`} component={DashboardContainer}/>
            <Route path="/" component={MainPageContainer} />
        </Switch>
    </div>
);

export default App;