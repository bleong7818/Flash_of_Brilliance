import { connect } from 'react-redux';
import CreateDeck from './create_deck';
import { createDeck } from '../../actions/deck_actions';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    return {
        decks: state.entities.decks, 
        user: state.entities.users[state.session.id]
    };
};

const MDTP = dispatch => {
    return {
        createDeck: (deck) => dispatch(createDeck(deck))
    };
};

export default withRouter(connect(MSTP, MDTP)(CreateDeck));