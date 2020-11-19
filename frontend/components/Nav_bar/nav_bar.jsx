import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import LoginModal from '../login_module/login_modal';
import SignInModal from '../login_module/signup_modal';
import DashboardContainer from '../user_page/dashboard_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loginShow: false, sessionShow: false };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.homepage = this.homepage.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
    }

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

    homepage() {
        e.preventDefault();
        this.props.history("/"); 
    }

    demoSubmit(e) {
        e.preventDefault()
        this.props.login(this.props.demoUser).then(
            () => {
            this.props.history.push("/dashboard");
        });
    }

    render () {
        const display = this.props.currentUser ? (
           <DashboardContainer />
        ) : (
            <div className="modal-nav">
                <img className="nav-logo" onClick={this.homepage} src="https://www.brainscape.com/blog/wp-content/uploads/2018/07/Transparent-Background.png" />
                <div className="nav-bar-buttons">
                    <button className="demo-button" type="submit" onClick={this.demoSubmit}>Demo log in</button>
                    <div className="login-modal-div">
                        <LoginModal show={this.state.loginShow}
                            hideModal={this.hideModal}
                            className="modal" />
                        <button className="login-button" onClick={() => this.showModal("loginShow")}>
                            Log In
                        </button>
                    </div>
                    <div className="sign-up-modal">
                        <SignInModal show={this.state.sessionShow}
                            hideModal={this.hideModal}
                            className="modal" />
                        <button className="sign-up-button" onClick={() => this.showModal("sessionShow")}>
                            Get Started
                        </button>
                    </div>
                </div>
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