import React, { Component } from "react";
import LoginModal from '../login_module/login_modal';
import SignInModal from '../login_module/signup_modal';
import CreateDeckContainer from '../decks/create_deck_container';

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
        this.showCreateModal = this.showCreateModal.bind(this);
    }

    componentDidMount() {
        this.props.requestUser(this.props.session_id);
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
        e.preventDefault();
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

    showCreateModal() {
        let modalBg = document.querySelector('.modal-bg');
        modalBg.classList.add('bg-active');
    }

    render () {
        const display = this.props.session_id ? (
        <div className="logged-in-nav">
            <div className="leftside-nav-bar">
                <div className="main-page-link" onClick={this.mainPage}>Flash of Brilliance</div>
                <a target="_blank"href="https://github.com/bleong7818">
                    <img className="github-logo" src={window.github} alt=""/>
                </a>
                <a target="_blank"href="https://www.linkedin.com/in/brandon-leong-8bb965138/">
                    <img className="linkedin-logo" src={window.linkedin} alt=""/>
                 </a>
            </div>
            <div className="logged-in-nav-buttons">
                <button className="modal-create-button" onClick={this.showCreateModal}>Create a Deck</button>
                <button className="deck-index-button" onClick={this.deckIndex}>View All Decks</button>
                <button className="profile-button" onClick={this.profileRedirect}>Profile</button>
                <button className="logout-button-navbar" onClick={this.handleLogout}>Log Out</button>
            </div>
            <div className="logged-in-nav-create-modal">
                <CreateDeckContainer />
            </div>
        </div>
        ) : (
            <div className="modal-nav">
                    <div className="leftside-nav-bar">
                        <div className="main-page-link" onClick={this.mainPage}>Flash of Brilliance</div>
                        <a href="#" onclick='window.open("https://github.com/bleong7818");return false;'></a>
                        {/* onclick="window.open ('http://www.foracure.org.au', ''); return false" href="javascript:void(0);" */}
                        {/* <a onclick="window.open(this.href,'_blank');return false;" href="http://www.foracure.org.au">Some Other Site</a> */}
                        <a target="_blank"href="https://github.com/bleong7818">
                            <img className="github-logo" src={window.github} alt="" />
                        </a>
                        <a target="_blank"href="https://www.linkedin.com/in/brandon-leong-8bb965138/" target="_top">
                            <img className="linkedin-logo" src={window.linkedin} alt="" />
                        </a>
                        {/* href="https://www.w3schools.com" target="_blank" */}
                    </div>
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