import React from "react";

class Deckbox extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.deckRedirect = this.deckRedirect.bind(this);
        this.deleteRedirect = this.deleteRedirect.bind(this);
    }

    deckRedirect(deckId) {
        // debugger;
        return e => {
            e.preventDefault();
            this.props.history.push(`/decks/${deckId}`);
        };
    }

    deleteRedirect(deckId) {
        this.props.deleteDeck(deckId);
    }
    // onClick = { this.deleteRedirect(this.props.deck.id) }
    render() {
        // debugger;
        const deleteButton = this.props.deck.creator_id === this.props.currentUser.id ? (
            <button className="delete-deck-button" >Delete Deck</button>
        ) : null;

        return (
            <li className="deck-list">
                <div className="deck-li">
                    <h3 className="deck-title" onClick={this.deckRedirect(this.props.deck.id)}>{this.props.deck.title}</h3>
                    {deleteButton}
                </div>
            </li>
        )
    }

}

export default Deckbox;