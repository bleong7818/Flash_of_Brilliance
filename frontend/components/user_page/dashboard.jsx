import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DeckShow from '../decks/deck_show';
import DeckboxContainer from '../decks/deckbox_container';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.requestUser(this.props.session_id);
        this.props.requestDecks();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout().then(() => {
            this.props.history.push("/")});
    }

    deckRedirect(deckId) {
        return e => {
        e.preventDefault();
        this.props.history.push(`/decks/${deckId}`);
        };
    }

    render() {
        if (!this.props.user) return null;
        debugger;
        // const noDupes = this.props.decks.filter((value, index) => this.props.decks.indexOf(value) === index);
        const filteredDecks = this.props.decks.filter(deck => deck.creator_id === this.props.user.id);
        const userDecks = filteredDecks.map(deck => {
            return (
                <DeckboxContainer key={deck.id} deck={deck}></DeckboxContainer>
            )
        });
        // const numberOfDecks = userDecks.length === 0 ? null : <p className="usermade-decks">{userDecks.length} decks created</p>

        return (
            <main className="Dashboard-main">
                <div className="dashboard-user-section">
                    <header className="dashboard-user-side">
                        {/* <img className="dashboard-logo" src="https://www.brainscape.com/assets/bsc-share-icon.png" alt=""/> */}
                        <div className="greetings-and-info">
                            <p className="greeting"> Welcome, {this.props.user.first_name} {this.props.user.last_name}</p>
                            {/* {numberOfDecks} */}
                        </div>
                        <div className="greeting-pt2">This is your profile page! Here you can look at decks that you've made and decks that you are studying.</div>
                    </header>
                    <div className="dashboard-second-row">
                        <h4 className="no-of-decks">Your Created Decks ({userDecks.length})</h4>
                        {/* <h1 className="add-deck-button" onClick={this.createDeckRedirect}>Create a Deck</h1> */}
                    </div>
                    <div className="created-section">
                        <ul className="deck-list">
                            {userDecks}
                        </ul>
                    </div>
                    <div className="study-section">
                        Studying decks
                    </div>
                    {/* <div className="to-be-deleted">placeholder</div> */}
                </div>
            </main>   
        )
    }
}

export default Dashboard;