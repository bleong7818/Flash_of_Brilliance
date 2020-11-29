import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import DeckboxContainer from './deckbox_container';

class DeckIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestDecks();
    }

    render() {
        const allDecks = this.props.decks.map(deck => {
            return (
                <DeckboxContainer key={deck.id} deck={deck}></DeckboxContainer>
            )
        })
        
        return (
            <main className="deck-index-main">
                <h1 className="deck-index-title">Browse all the flashcards created by top users and Flash of Brilliance!</h1>
                <Link to="/dashboard"> Dashboard </Link>
                <ul className="deck-index-ul">
                    {allDecks}
                </ul>
            </main>
        );
    }

}

export default withRouter(DeckIndex);