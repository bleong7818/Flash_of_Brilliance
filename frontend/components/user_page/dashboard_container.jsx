import { connect } from 'react-redux';
import React from 'react';
// import { requestUser } from '../../actions/session_actions';
import Dashboard from './dashboard';
import { requestUser, logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom'

const MSTP = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id]
    }
}

const MDTP = dispatch => {
    return {
        requestUser: userId => dispatch(requestUser(userId)),
        logout: () => dispatch(logout())
    }
}

export default withRouter(connect(MSTP, MDTP)(Dashboard));