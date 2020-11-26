import React from "react";
import { Link } from 'react-router-dom';

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
            <li className="deck-testing" key={deck.id}>{deck.title}</li>
            )
        })
        return (
            <main className="deck-index-main">
                <ul>
                    {allDecks}
                </ul>
                <Link to="/dashboard"> Dashboard </Link>
            </main>
            
        );
    }

}

export default DeckIndex;