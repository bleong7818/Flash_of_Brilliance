import { connect } from 'react-redux'
import { updateDeck, deleteDeck, requestDeck } from '../../actions/deck_actions';
import DeckShow from './deck_show';

const MSTP = (state, ownProps) => {
    debugger;
    return {
        deck: state.entities.decks[ownProps.match.params.deckId]
    }
}

const MDTP = dispatch => {
    return {
        updateDeck: (deck) => dispatch(updateDeck(deck)),
        deleteDeck: (deckId) => dispatch(deleteDeck(deckId)),
        requestDeck: (deckId) => dispatch(requestDeck(deckId))
    }
}

export default connect(MSTP, MDTP)(DeckShow)

