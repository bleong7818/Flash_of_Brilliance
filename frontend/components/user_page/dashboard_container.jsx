import { connect } from 'react';
import React from 'react';
import { requestUser } from '../../actions/session_actions';
import Dashboard from './dashboard';

const MSTP = state => {
    return {
        user: state.currentUser
    }
}

const MDTP = dispatch => {
    return {
        requestUser: user => dispatch(requestUser(user))
    }
}

export default connect(MSTP, MDTP)(Dashboard);