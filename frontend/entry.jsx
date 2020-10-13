import React from "react";
import ReactDOM from "react-dom";
import {login, logout, signup} from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {

    //test
    window.login = login
    window.logout = logout
    window.signup = signup
    //test

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Heimerdinger</h1>, root);
});

let user1 = {email: "EB@liberl.com", password: "shines"}