import React from 'react';

class DeckShow extends React.Component {
    constructor(props) {
        super(props)
        // debugger;
    }

    componentDidMount() {
        // this.props.requestDeck(this.props.decks.id)
        this.props.requestDeck(this.props.deckId)
    }

    render() {
        debugger;
        if (!this.props.deck) return null;
        return (
            <div className="deck-show">
                <div className="first-row">
                    <div>stuff
                        <h1>{this.props.deck.title}</h1>
                        <div>Creator: {this.props.deck.creator.first_name + " " +this.props.deck.creator.last_name}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeckShow;