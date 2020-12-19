import { connect } from 'react-redux';
import CreateDeck from './create_deck';
import { createDeck, removeDeckErrors, requestDecks } from '../../actions/deck_actions';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    // debugger;
    return {
        decks: Object.values(state.entities.decks), 
        errors: state.errors.decks,
        currentUser: state.session
    };
};

const MDTP = dispatch => {
    return {
        requestDecks: (decks) => dispatch(requestDecks(decks)),
        createDeck: (deck) => dispatch(createDeck(deck)),
        removeDeckErrors: () => dispatch(removeDeckErrors())
    };
};

export default withRouter(connect(MSTP, MDTP)(CreateDeck));