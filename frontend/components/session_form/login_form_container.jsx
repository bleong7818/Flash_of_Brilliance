import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const MSTP = ( {errors} ) => {
    return {
        errors: errors.session,
        formType: "Login",
    };
};

const MDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};

export default connect(MSTP, MDTP)(LoginForm);