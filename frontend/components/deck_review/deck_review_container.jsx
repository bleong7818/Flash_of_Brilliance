import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestCards } from '../../actions/card_actions';
import { requestDeck } from '../../actions/deck_actions';
import DeckReview from './deck_review';

const MSTP = (state, ownProps) => {
    // debugger;
    return {
        deck: state.entities.decks.current,
        deckCards: Object.values(state.entities.cards).filter(card => card.deck_id === state.entities.decks.current.id),
        deckId: ownProps.match.params.deckId,
        currentUser: state.session
    };
};

const MDTP = dispatch => {
    return {
        requestCards: () => dispatch(requestCards()),
        requestDeck: (deckId) => dispatch(requestDeck(deckId)),
    };
};

export default withRouter(connect(MSTP, MDTP)(DeckReview));
