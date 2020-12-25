import React from 'react';
import { Link } from 'react-router-dom';
import CardboxContainer from '../cards/cardbox_container';
import CreateCardContainer from '../cards/create_card_container';

class DeckShow extends React.Component {
    constructor(props) {
        super(props);

        // this.filter = this.filter.bind(this);
        // this.props.deckId = this.props.deckId.bind(this);
        this.studyRedirect = this.studyRedirect.bind(this);
    }

    componentDidMount() {
        // debugger;
        this.props.requestUsers();
        this.props.requestDeck(this.props.deckId);
        this.props.requestCards();
    }

    studyRedirect(e) {
        e.preventDefault();
        // debugger;
        this.props.history.push(`/decks/${this.props.deckId}/study`);
    }

    createCardModal() {
        let modalCardBg = document.querySelector('.card-modal-bg');
        modalCardBg.classList.add('bg-active');
    }

    showCreateModal() {
        // let modalBtn = document.querySelector('.modal-create-button');
        let modalBg = document.querySelector('.modal-bg');
        modalBg.classList.add('bg-active');
    }

    render() {
        if (!this.props.deck) return null;
        if (this.props.deck.id !== parseInt(this.props.deckId, 10)) return null;
        const creator = this.props.users.filter(user => user.id === this.props.deck.creator_id);
        if (creator.length === 0) return null;
        // debugger;
        let deck2Cards = this.props.cards.map(card => {
            if (card.deck_id === this.props.deck.id) {
                return (
                    <CardboxContainer key={card.id} deck={this.props.deck} card={card}></CardboxContainer>
                )
            }
        });
        debugger;

        // let studyCards = this.props.cards.filter(card => parseInt(card.deck_id, 10) === this.props.deck.id);
        const studyButton = this.props.deckCards.length !== 0 ? ( <button className="study-deck-button" onClick={this.studyRedirect} >Study</button>
        ) : null
        // <button className="study-deck-button" onClick={this.studyRedirect} >Study</button>
        // parseInt(this.props.deckId, 10))
        // debugger;
        const createButton = this.props.currentUser.id === this.props.deck.creator_id ? (
            <button className="create-card-modal-button" onClick={this.createCardModal}>Create a card</button>
        ) : null
        const create = this.props.currentUser.id === this.props.deck.creator_id ? <CreateCardContainer /> : null
        return (
            <div className="deck-show">
                <div className="first-row">
                    <div className="pack-header-main">
                        <h1 className="deck-title-show">{this.props.deck.title}</h1>
                        <div className="deck-show-creator">Deck Creator: {creator[0].first_name + " " + creator[0].last_name}</div>
                    </div>
                    <div className="deck-options-container">
                        <div className="deck-options">
                            {createButton}
                            {studyButton}
                            {/* <button className="study-deck-button" onClick={this.studyRedirect} >Study</button> */}
                        </div>
                    </div>
                    <div>
                        {create}
                    </div>
                    <div className="deck-cards">
                        <ul className="deck-card-list">
                            {deck2Cards}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeckShow;