import React from 'react';
import {Link, Route} from 'react-router-dom';
import NavBar from './Nav_bar/Nav_Bar';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div className="front-page">
        <header>
            <h1></h1>
        </header>
        <Route path="/" component={NavBar}></Route>
    </div>
);

export default App;