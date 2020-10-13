import React from 'react';
import {Route} from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div className="header">
        <h1>Flash of Brilliance</h1>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <h2>who goes there</h2>
    </div>
);

export default App