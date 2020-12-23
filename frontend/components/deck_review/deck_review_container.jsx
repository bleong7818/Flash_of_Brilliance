import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCards } from '../../actions/card_actions';
import { fetchDeck } from '../../actions/deck_actions';
import DeckReview from './deck_review';

const MSTP = (state, ownProps) => {
    debugger;
    return {
        deck: state.entities.decks.current,
        cards: Object.values(state.entities.cards),
        deckId: ownProps.match.params.deckId,
        currentUser: state.session
    };
};

const MDTP = dispatch => {
    return {
        fetchCards: () => dispatch(fetchCards()),
        fetchDeck: (deckId) => dispatch(fetchDeck(deckId))
    };
};

export default withRouter(connect(MSTP, MDTP)(DeckReview));
