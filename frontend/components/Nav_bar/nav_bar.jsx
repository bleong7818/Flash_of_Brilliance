import React from 'react';
import ReactDOM from 'react-dom';
import LoginModal from '../login_module/signup_modal';
import SignInModal from '../login_module/signup_modal';
import SessionForm from '../session_form/session_form';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
        // debugger;
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal() {
        this.setState({ show: true })
    }

    hideModal() {
        this.setState({ show: false })
    }

    render () {
        return (
            <nav className="modal-nav">
                <LoginModal show={this.state.show}
                    hideModal={this.hideModal} 
                    className="modal"/>
                <button onClick={this.showModal}>
                    Log In
                </button>
                <SignInModal show={this.state.show}
                    hideModal={this.hideModal}
                    className="modal" />
                <button onClick={this.showModal}>
                    Sign In
                </button>
            </nav>
        )
    }
}

export default NavBar;