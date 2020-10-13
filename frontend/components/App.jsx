import React from 'react';
import {Link, Route} from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavBar from './main_page/Nav_Bar';

const App = () => (
    <div>
        <header>
            <h1>Flash of Brilliance</h1>
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;