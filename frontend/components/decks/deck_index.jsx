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
        // const allDecks = this.props.decks.map(deck => {
        //     return (
        //     <li className="deck-testing" key={deck.id}>{deck.title}</li>
        //     )
        // })
        //     < ul >
        // {
        //     this.props.decks.map(deck => (
        //         <Deckbox key={deck.id} deck={deck} />
        //     ))
        // }
        //         </ul >
        // debugger;
        return (
            <main className="deck-index-main">
                <h1>testing</h1>
                <ul>
                    {allDecks}
                </ul>
                <Link to="/dashboard"> Dashboard </Link>
            </main>
        );
    }

}

export default withRouter(DeckIndex);