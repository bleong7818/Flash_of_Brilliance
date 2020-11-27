import React from "react";

class Deckbox extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.deckRedirect = this.deckRedirect.bind(this);
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
        return (
            <li className="deck-li" onClick={this.deckRedirect(this.props.deck.id)}>{this.props.deck.title}</li>
        )
    }

}

export default Deckbox;