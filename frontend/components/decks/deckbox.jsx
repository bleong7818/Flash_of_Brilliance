import React from "react";
import { deleteDeck } from "../../util/deck.api.util";
import DeleteDeckContainer from './delete_deck_container';


class Deckbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDeleteDeck: false
        };

        this.deckRedirect = this.deckRedirect.bind(this);
        this.deleteRedirect = this.deleteRedirect.bind(this);
        this.deleteDeckModal = this.deleteDeckModal.bind(this);
    }

    deckRedirect(deckId) {
        return e => {
            e.preventDefault();
            this.props.history.push(`/decks/${deckId}`);
        };
    }

    deleteDeckModal() {
        this.setState({
           showDeleteDeck: !this.state.showDeleteDeck 
        });
    }

    deleteRedirect() {
        this.props.deleteDeck(this.props.deck.id);
        // this.props.history.push(`/dashboard`);
    }

    render() {

        const deleteButton = this.props.deck.creator_id === this.props.currentUser.id ? (
            <div className="delete-deck-button" onClick={this.deleteDeckModal}>Delete Deck</div>
        ) : null;
        const deleteDeckModal = <DeleteDeckContainer deck={this.props.deck} deleteDeck={this.deleteRedirect} close={this.deleteDeckModal} />
        return (
            <li className="deck-li" >
                <h3 className="deck-title" onClick={this.deckRedirect(this.props.deck.id)}>{this.props.deck.title}</h3>
                {deleteButton}
                {this.state.showDeleteDeck ?  deleteDeckModal : null}
            </li>
        )
    }

}

export default Deckbox;