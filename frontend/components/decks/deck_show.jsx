import React from 'react';
import { Link } from 'react-router-dom';

class DeckShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.requestUsers();
        this.props.requestDeck(this.props.deckId);
    }

    render() {
        if (!this.props.deck) return null;
        const creator = this.props.users.filter(user => user.id === this.props.deck.creator_id);
        if (creator.length === 0) return null;
        
        // if (!this.props.deck.creator) return null;
        return (
            <div className="deck-show">
                <div className="first-row">
                    <div className="pack-header-main">
                        <h1 className="deck-title-show">{this.props.deck.title}</h1>
                        <div className="deck-show-creator">Creator: {creator[0].first_name + " " + creator[0].last_name}</div>
                    </div>
                    <div>
                        flashcards
                    </div>
                    <div> 
                        <Link to="/dashboard"> Dashboard </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeckShow;