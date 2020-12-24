import React from "react";

class Deckbox extends React.Component {
    constructor(props) {
        super(props);
        this.deckRedirect = this.deckRedirect.bind(this);
        this.deleteRedirect = this.deleteRedirect.bind(this);
    }

    deckRedirect(deckId) {
        return e => {
            e.preventDefault();
            this.props.history.push(`/decks/${deckId}`);
        };
    }

    deleteRedirect() {
        // debugger;
        this.props.deleteDeck(this.props.deck.id);
        // debugger;
        // this.props.history.push(`/dashboard`);
    }
    render() {
        const deleteButton = this.props.deck.creator_id === this.props.currentUser.id ? (
            <div className="delete-deck-button" onClick={this.deleteRedirect}>Delete Deck</div>
        ) : null;
        return (
            <li className="deck-li">
                <h3 className="deck-title" onClick={this.deckRedirect(this.props.deck.id)}>{this.props.deck.title}</h3>
                {deleteButton}
            </li>
        )
    }

}

export default Deckbox;