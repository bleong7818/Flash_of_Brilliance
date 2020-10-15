import React from 'react';
import LoginFormContainer from '../session_form/login_form_container'

const LoginModal = (props) => {
    const showHideClassname = props.show ? "modal-display-block" : "modal-display-none"
    
    return (
        <div className={showHideClassname}>
            <section className="login-modal">
                <LoginFormContainer hideModal={props.hideModal} formType="Log in"/>
            </section>
        </div>
    )
}

export default LoginModal;