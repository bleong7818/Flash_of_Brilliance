import { connect } from 'react-redux'
import DeckShow from './deck_show';
import { updateDeck, deleteDeck, requestDeck } from '../../actions/deck_actions';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    // debugger;
    return {
        deck: state.entities.decks[ownProps.match.params.deckId],
        deckId: ownProps.match.params.deckId
    }
}

const MDTP = dispatch => {
    return {
        updateDeck: (deck) => dispatch(updateDeck(deck)),
        deleteDeck: (deckId) => dispatch(deleteDeck(deckId)),
        requestDeck: (deckId) => dispatch(requestDeck(deckId))
    }
}

export default withRouter(connect(MSTP, MDTP)(DeckShow));

