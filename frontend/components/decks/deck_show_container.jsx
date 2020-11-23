import { connect } from 'react-redux'
import DeckShow from './deck_show';
import { requestUsers } from '../../actions/session_actions';
import { updateDeck, deleteDeck, requestDeck } from '../../actions/deck_actions';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    return {
        deck: state.entities.decks[ownProps.match.params.deckId],
        deckId: ownProps.match.params.deckId,
        users: Object.values(state.entities.users)
        // creatorId: state.entities.decks[ownProps.match.params.deckId].creator_id
    };
};

const MDTP = dispatch => {
    return {
        updateDeck: (deck) => dispatch(updateDeck(deck)),
        deleteDeck: (deckId) => dispatch(deleteDeck(deckId)),
        requestDeck: (deckId) => dispatch(requestDeck(deckId)),
        requestUsers: () => dispatch(requestUsers())
        // requestUser: (creatorId) => dispatch(requestUser(creatorId))
    };
};

export default withRouter(connect(MSTP, MDTP)(DeckShow));

