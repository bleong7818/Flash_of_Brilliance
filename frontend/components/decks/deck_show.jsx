import React from 'react';
import { Link } from 'react-router-dom';
import CardboxContainer from '../cards/cardbox_container';
import CreateCardContainer from '../cards/create_card_container';
import EditDeckContainer from './edit_deck_container';

class DeckShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showEditDeck: false
        };
        // this.filter = this.filter.bind(this);
        // this.props.deckId = this.props.deckId.bind(this);
        this.editDeckModal = this.editDeckModal.bind(this);
        this.studyRedirect = this.studyRedirect.bind(this);
        this.addUserDeck = this.addUserDeck.bind(this);
        this.deleteUserDeck = this.deleteUserDeck.bind(this);
    }

    componentDidMount() {
        
        this.props.requestUsers();
        this.props.requestDeck(this.props.deckId);
        this.props.requestCards();
        this.props.requestUserDecks();
    }

    studyRedirect(e) {
        e.preventDefault();
        this.props.history.push(`/decks/${this.props.deckId}/study`);
    }

    addUserDeck() {
        this.props.addDecktoUser(this.props.deck);
    }

    deleteUserDeck() {
        this.props.deleteDeckFromUser(this.props.deck.id);
    }

    createCardModal() {
        let modalCardBg = document.querySelector('.card-modal-bg');
        modalCardBg.classList.add('bg-active');
        
    }

    editDeckModal() {
        this.setState({
            showEditDeck: !this.state.showEditDeck
        });
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
        let deck2Cards = this.props.cards.map(card => {
            if (card.deck_id === this.props.deck.id) {
                return (
                    <CardboxContainer key={card.id} deck={this.props.deck} card={card}></CardboxContainer>
                )
            }
        });

        // let studyCards = this.props.cards.filter(card => parseInt(card.deck_id, 10) === this.props.deck.id);
        const studyButton = this.props.deckCards.length !== 0 ? ( <button className="study-deck-button" onClick={this.studyRedirect} >Study This Deck</button>
        ) : null
        const deckId = this.props.deck.id
        let ifUserDeck = false
        this.props.userDecks.forEach((deck) => {
            if (deck.id === deckId) {
                ifUserDeck = true
            }
        })

        const addDeckButton = ifUserDeck ? (
            <button className="delete-from-userdecks-button" onClick={this.deleteUserDeck}>Unsave Deck</button>
        ) : (
            <button className="add-userdeck-button" onClick={this.addUserDeck}>Save Deck</button>
        )

        const createButton = this.props.currentUser.id === this.props.deck.creator_id ? (
            <button className="create-card-modal-button" onClick={this.createCardModal}>Create a Card</button>
        ) : null
        const create = this.props.currentUser.id === this.props.deck.creator_id ? <CreateCardContainer /> : null

        const editButton = this.props.currentUser.id === this.props.deck.creator_id ? (
            <button className="edit-deck-modal-button" onClick={this.editDeckModal}>Edit Deck Title</button>
        ) : null
        const edit = this.props.currentUser.id === this.props.deck.creator_id ? <EditDeckContainer close={this.editDeckModal} /> : null
        // onClick = { this.editDeckModal }

        return (
            <div className="deck-show">
                <div className="first-row">
                    <div className="pack-header-main">
                        <h1 className="deck-title-show">{this.props.deck.title}</h1>
                        <div className="deck-show-creator">Deck Creator: {creator[0].first_name + " " + creator[0].last_name}</div>
                    </div>
                    <div className="deck-options-container">
                        <div className="deck-options">
                            {editButton}
                            {createButton}
                            {addDeckButton}
                            {studyButton}
                            {/* <button className="study-deck-button" onClick={this.studyRedirect} >Study</button> */}
                        </div>
                    </div>
                    <div>
                        {create}
                        {this.state.showEditDeck ? edit : null}
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