import { connect } from 'react-redux';
import CreateDeck from './create_deck';
import { createDeck, removeDeckErrors } from '../../actions/deck_actions';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    // debugger;
    return {
        decks: state.entities.decks, 
        errors: state.errors.decks,
        user: state.entities.users[state.session.id]
    };
};

const MDTP = dispatch => {
    return {
        createDeck: (deck) => dispatch(createDeck(deck)),
        removeDeckErrors: () => dispatch(removeDeckErrors())
    };
};

export default withRouter(connect(MSTP, MDTP)(CreateDeck));