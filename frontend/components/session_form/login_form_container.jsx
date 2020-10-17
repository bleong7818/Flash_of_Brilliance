import { connect } from 'react-redux';
import React from 'react';
import { login, removeSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom'

const MSTP = ( {errors} ) => {
    return {
        errors: errors.session,
        formType: "Login",
    };
};

const MDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    };
};

export default withRouter(connect(MSTP, MDTP)(LoginForm));