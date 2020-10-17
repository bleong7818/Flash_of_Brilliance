import { connect } from 'react-redux';
import React from 'react';
import { signup, removeSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom';


const MSTP = ({errors}) => {
    return {
        errors: errors.session,
        formType: "Sign up",
    };
};

const MDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
}

export default withRouter(connect(MSTP, MDTP)(SignupForm));