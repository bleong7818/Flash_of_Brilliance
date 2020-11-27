import { requestDeck, deleteDeck } from '../../actions/deck_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Deckbox from './deckbox';

const MSTP = (state, ownProps) => {
    // debugger;
    return {
        currentUser: state.session
    };
};

const MDTP = dispatch => {
    return {
        requestDeck: (deckId) => dispatch(requestDeck(deckId)),
        deleteDeck: (deckId) => dispatch(deleteDeck(deckId))
    };
};

export default withRouter(connect(MSTP, MDTP)(Deckbox));
// export default withRouter(connect(MSTP, MDTP)(DeckIndex));