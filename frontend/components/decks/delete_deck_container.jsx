import { deleteDeck } from '../../actions/deck_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeleteDeck from './delete_deck';

const MSTP = (state, ownProps) => {
    return {
        // deck: state.entities.decks.current
    };
};

const MDTP = dispatch => {
    return {
        deleteDeck: (deckId) => dispatch(deleteDeck(deckId))
    };
};

export default withRouter(connect(MSTP, MDTP)(DeleteDeck));

