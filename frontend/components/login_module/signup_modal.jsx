import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container'

const SignInModal = (props) => {
    const showHideClassname = props.show ? "modal-display-block" : "modal-display-none"

    return (
        <div className={showHideClassname}>
            <section className="login-modal">
                <SignupFormContainer hideModal={props.hideModal} formType="Sign up"/>
            </section>
        </div>
    )
}

export default SignInModal;



