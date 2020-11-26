import { connect } from 'react-redux';
import { requestDecks } from '../../actions/deck_actions';
import { withRouter } from 'react-router-dom';
import DeckIndex from './deck_index';

const MSTP = (state, ownProps) => {
    return {
        decks: Object.values(state.entities.decks)
    };
};

const MDTP = dispatch => {
    return {
        requestDecks: () => dispatch(requestDecks())
    };
};

export default withRouter(connect(MSTP, MDTP)(DeckIndex));