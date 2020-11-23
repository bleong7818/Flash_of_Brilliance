import React from 'react';
import { Link } from 'react-router-dom';

class DeckShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // this.props.requestDeck(this.props.decks.id)
        this.props.requestUsers();
        this.props.requestDeck(this.props.deckId);
        // this.props.requestUser(this.props.deck.creator_id);
    }

    render() {
        if (!this.props.deck) return null;
        let creator = this.props.users.forEach(user => {
            let maker = [];
            if (user.id === this.props.deck.creator_id) {
                maker.push(user)
            }
            debugger;
            return maker;
            // debugger;
        });
        // debugger;
        
        // if (!this.props.deck.creator) return null;
        return (
            <div className="deck-show">
                <div className="first-row">
                    <div className="pack-header-main">
                        <h1 className="deck-title">{this.props.deck.title}</h1>
                        {/* <div className="deck-show-creator">Creator: {this.props.deck.creator.first_name + " " +this.props.deck.creator.last_name}</div> */}
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