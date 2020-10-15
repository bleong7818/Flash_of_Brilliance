import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';


const MSTP = ({errors}) => {
    return {
        errors: errors.session,
        formType: "Sign up",
    };
};

const MDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(MSTP, MDTP)(SignupForm);