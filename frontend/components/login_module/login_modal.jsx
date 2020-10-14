import React from 'react';
import LoginFormContainer from '../session_form/signup_form_container'

const LoginModal = (props) => {
    const showHideClassname = props.show ? "modal-display-block" : "modal-display-none"

    return (
        <div className={showHideClassname}>
            <section className="login-modal">
                <LoginFormContainer hideModal={props.hideModal} formType="Log in"/>
                {/* <button onClick={props.hideModal}>Close</button> */}
            </section>
        </div>
    )
}

export default LoginModal;