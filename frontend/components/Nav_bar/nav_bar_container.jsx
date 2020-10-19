import { connect } from 'react-redux';
import React from 'react';
import { requestUser } from '../../actions/session_actions';
import  NavBar from './nav_bar';
import {withRouter} from 'react-router-dom';

const MSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session
        demoUser: state.entities.users
    };
};

const MDTP = (dispatch) => {
    return {
        requestUser: userId => dispatch(requestUser(userId))
    };
};

export default connect(MSTP, MDTP)(NavBar);
