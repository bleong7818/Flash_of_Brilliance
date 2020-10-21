import React from 'react';

class DeckShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestDeck(this.props.deck.id)
    }

    render() {
        return (
            <div className="deck-show">
                <div className="first-row">
                    <div>
                        <h1>{this.props.deck.title}</h1>
                        <div>Creator: {this.props.deck.creator_name}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeckShow