import { connect } from 'react-redux';
import React from 'react';
import { requestUser, login, logout } from '../../actions/session_actions';
import  NavBar from './nav_bar';
import {withRouter} from 'react-router-dom';

const MSTP = (state, ownProps) => {
    // debugger;
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session,
        demoUser: {
            email: "Sieg@Liberl.orb",
            password: "Grancel"
        }
    };
};

const MDTP = (dispatch) => {
    return {
        requestUser: userId => dispatch(requestUser(userId)),
        login: user => dispatch(login(user)), 
        logout: () => dispatch(logout())
    };
};

export default withRouter(connect(MSTP, MDTP)(NavBar));
