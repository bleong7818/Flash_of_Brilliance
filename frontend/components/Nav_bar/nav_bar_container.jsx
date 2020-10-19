import { connect } from 'react-redux';
import React from 'react';
import { requestUser, login } from '../../actions/session_actions';
import  NavBar from './nav_bar';
import {withRouter} from 'react-router-dom';

const MSTP = (state, ownProps) => {
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
        login: user => dispatch(login(user))
    };
};

export default connect(MSTP, MDTP)(NavBar);
