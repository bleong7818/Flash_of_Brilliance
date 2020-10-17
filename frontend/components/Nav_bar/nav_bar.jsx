import React from 'react';
import ReactDOM from 'react-dom';
import LoginModal from '../login_module/login_modal';
import SignInModal from '../login_module/signup_modal';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loginShow: false, sessionShow: false };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    // componentDidMount() {
    //     debugger;
    // }

    showModal(type) {
        this.setState({ [type]: true });
    }

    hideModal() {
        if (this.state.loginShow) {
            this.setState({loginShow: false});
        } else {
            this.setState({sessionShow: false});
        }
    }

    render () {
        const display = this.props.currentUser ? (
            null
        ) : (
            <div className="modal-nav">
                <LoginModal show={this.state.loginShow}
                    hideModal={this.hideModal}
                    className="modal" />
                <button className="login-button" onClick={() => this.showModal("loginShow")}>
                    Log In
                </button>
                <SignInModal show={this.state.sessionShow}
                    hideModal={this.hideModal}
                    className="modal" />
                <button className="sign-up-button" onClick={() => this.showModal("sessionShow")}>
                    Sign Up
                </button>
            </div>
        )
        return (
            <nav>
                {display}
            </nav>
        )
    }
}

export default NavBar;