import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import LoginModal from '../login_module/login_modal';
import SignInModal from '../login_module/signup_modal';
import CreateDeckContainer from '../decks/create_deck_container';
import DashboardContainer from '../user_page/dashboard_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loginShow: false, sessionShow: false };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.homepage = this.homepage.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
        this.profileRedirect = this.profileRedirect.bind(this);
        this.mainPage = this.mainPage.bind(this);
        this.deckIndex = this.deckIndex.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.createRedirect = this.createRedirect.bind(this);
    }

    componentDidMount() {
        this.props.requestUser(this.props.session_id);
        let modalBtn = document.querySelector('.modal-create-button');
        let modalBg = document.querySelector('.modal-bg');
        let modalClose = document.querySelector('.create-close-button');
        // debugger;
        let deckSubmit = document.querySelector('.deck-button');

        if (modalBtn) {
            // debugger;
            modalBtn.addEventListener('click', function(){
            modalBg.classList.add('bg-active');
            });
        }

        if (modalClose) {
            modalClose.addEventListener('click', function (){
            modalBg.classList.remove('bg-active');
            });
        }

        if (deckSubmit) {
            deckSubmit.addEventListener('click', function () {
                modalBg.classList.remove('bg-active');
            });
        }
    }

    componentWillUnmount() {
        // debugger;
        // modalBtn.removeEventListener('click');
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

    profileRedirect(e) {
        e.preventDefault();
        this.props.history.push("/dashboard");
    }

    mainPage(e) {
        e.preventDefault();
        this.props.history.push("/");
    }

    deckIndex(e) {
        e.preventDefault(e);
        this.props.history.push("/decks");
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout().then(() => {
            this.props.history.push("/");
        });
    }

    createRedirect(e) {
        e.preventDefault();
        this.props.history.push("/dashboard/newDeck");
    }

    render () {
        // debugger;
        const display = this.props.session_id ? (
        //    <DashboardContainer />
        <div className="logged-in-nav">
            <div className="main-page-link" onClick={this.mainPage}>Flash of Brilliance</div>
            <div className="logged-in-nav-buttons">
                <button className="modal-create-button">Create button modal</button>
                {/* <button className="create-deck-button" onClick={this.createRedirect}>Create a deck</button> */}
                <button className="deck-index-button" onClick={this.deckIndex}>View All Decks</button>
                <button className="profile-button" onClick={this.profileRedirect}>Profile</button>
                <button className="logout-button-navbar" onClick={this.handleLogout}>Log Out</button>
            </div>
            <div className="modal-bg">
                <div className="create-deck-modal">
                    <CreateDeckContainer />
                    {/* <div className="create-close-button">×</div> */}
                </div>
            </div>
            {/* <div className="name-and-decks" onClick={this.profileRedirect}>
                <div className="username">Welcome, {this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</div>
                <div className="see-decks">Click here to see your decks</div>
            </div> */}
            {/* <div>Welcome, {this.props.currentUser.first_name + " " + this.props.currentUser.last_name}</div> */}
        </div>
        ) : (
            <div className="modal-nav">
                <div className="logo">Flash of Brilliance</div>
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