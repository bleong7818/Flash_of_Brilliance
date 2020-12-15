import React from 'react';
import { Link } from 'react-router-dom';
import Cardbox from '../cards/cardbox';
import CreateCardContainer from '../cards/create_card_container';

class DeckShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestUsers();
        this.props.requestDeck(this.props.deckId);
        this.props.requestCards();
    }

    creatCardModal() {
        let modalCardBg = document.querySelector('.card-modal-bg');
        modalCardBg.classList.add('bg-active');
        // debugger;
    }

    showCreateModal() {
        // let modalBtn = document.querySelector('.modal-create-button');
        let modalBg = document.querySelector('.modal-bg');
        modalBg.classList.add('bg-active');
    }

    render() {
        if (!this.props.deck) return null;
        const creator = this.props.users.filter(user => user.id === this.props.deck.creator_id);
        if (creator.length === 0) return null;
        
        let deckCards = this.props.cards.map(card => {
            if (card.deck_id === this.props.deck.id) {
                return (
                    <Cardbox key={card.id} card={card}></Cardbox>
                )
            }
        });
        const createButton = this.props.currentUser.id === this.props.deck.creator_id ? (
            <button className="create-card-button" onClick={this.creatCardModal}>Create a card</button>
        ) : null
        const create = this.props.currentUser.id === this.props.deck.creator_id ? <CreateCardContainer /> : null
        // debugger;
        return (
            <div className="deck-show">
                <div className="first-row">
                    <div className="pack-header-main">
                        <h1 className="deck-title-show">{this.props.deck.title}</h1>
                        <div className="deck-show-creator">Creator: {creator[0].first_name + " " + creator[0].last_name}</div>
                    </div>
                    <div className="deck-options">
                        {createButton}
                    </div>
                    <div>
                        {create}
                    </div>
                    <div className="deck-cards">
                        <ul className="deck-card-list">
                            {deckCards}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeckShow;