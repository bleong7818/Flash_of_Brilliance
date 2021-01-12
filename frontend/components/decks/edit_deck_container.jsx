import { connect } from 'react-redux';
import { EditDeck } from './edit_deck';
import  { updateDeck, removeDeckErrors, recieveDeckErrors, requestDecks } from '../../actions/deck_actions';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    return {
        decks: Object.values.state.entities.decks.all,
        errors: state.errors.decks,
        currentUser: state.session
    };
};

const MDTP = dispatch => {
    return {
        requestDecks: (decks) => dispatch(requestDecks(decks)),
        updateDeck: (deck) => dispatch(updateDeck(deck)),
        receiveDeckErrors: (deckErrors) => dispatch(receiveDeckErrors(deckErrors)),
        removeDeckErrors: () => dispatch(removeDeckErrors())
    };
};