import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DeckShow from '../decks/deck_show';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deckRedirect = this.deckRedirect.bind(this);
    }

    componentDidMount() {
        // debugger;
        this.props.requestUser(this.props.session_id);
        this.props.requestDecks();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout().then(() => {
            this.props.history.push("/")});
    }

    deckRedirect(deckId) {
        // debugger;
        return e => {
        e.preventDefault();
        this.props.history.push(`/decks/${deckId}`);
        };
    }

    render() {
        // debugger;
        if (!this.props.user) return null;
        // debugger;
        // const noDupes = this.props.decks.filter((value, index) => this.props.decks.indexOf(value) === index);
        const filteredDecks = this.props.decks.filter(deck => deck.creator_id === this.props.user.id);
        // console.log(userDeckss);
        const userDecks = filteredDecks.map(deck => {
                return (
                <li className="deck-li" key={deck.id} onClick={this.deckRedirect(deck.id)}> 
                    <div>{deck.title}</div>
                </li>
                )
        });
        const numberOfDecks = userDecks.length === 0 ? null : <p className="number-of-decks">{userDecks.length} decks created</p>

        return (
            <main className="Dashboard-main">
                <section className="dashboard-user-section">
                    <header className="dashboard-user-side">
                        <img className="dashboard-logo" src="https://www.brainscape.com/assets/bsc-share-icon.png" alt=""/>
                        <div className="greetings-and-info">
                            <p className="greeting">Hello, {this.props.user.first_name} {this.props.user.last_name}</p>
                            {numberOfDecks}
                        </div> 
                        <div>
                            <Link to ="/dashboard/newDeck"> Create </Link>
                        </div>
                        <div className="dashboard-dropdown">
                            <i className="fas fa-cog"></i>
                            <button className="dashboard-logout" onClick={this.handleSubmit}>Log out</button>
                        </div>
                    </header>
                    <ul className="deck-list">
                        {userDecks}
                    </ul>
                </section>
                <div className="current-deck">
                    current deck
                </div>
            </main>   
        )
    }
}

export default Dashboard;