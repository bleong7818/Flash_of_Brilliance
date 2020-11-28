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
            <li className="deck-list">
                <div className="deck-li">
                    <h3 className="deck-title" onClick={this.deckRedirect(this.props.deck.id)}>{this.props.deck.title}</h3>
                </div>
            </li>
        )
    }

}

export default Deckbox;