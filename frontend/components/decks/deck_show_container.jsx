import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { requestUsers } from '../../actions/session_actions';
import { updateDeck, deleteDeck, requestDeck } from '../../actions/deck_actions';
import { requestCards } from '../../actions/card_actions';
import { withRouter } from 'react-router-dom';

const MSTP = (state, ownProps) => {
    // const deckId2 = ownProps.match.params.deckId;
    // let deck2 = Object.values(state.entities.decks).filter((deck) => deck.id === deckId2);
    // debugger;
    return {
        // deck: state.entities.decks[ownProps.match.params.deckId],
        deck: state.entities.decks.current,
        deckCards: Object.values(state.entities.cards).filter(card => card.deck_id === state.entities.decks.current.id),
        decks: Object.values(state.entities.decks.all),
        deckId: ownProps.match.params.deckId,
        // deck2: deck2,
        users: Object.values(state.entities.users),
        cards: Object.values(state.entities.cards),
        currentUser: state.session
    };
};

const MDTP = dispatch => {
    return {
        updateDeck: (deck) => dispatch(updateDeck(deck)),
        deleteDeck: (deckId) => dispatch(deleteDeck(deckId)),
        requestDeck: (deckId) => dispatch(requestDeck(deckId)),
        requestUsers: () => dispatch(requestUsers()),
        requestCards: () => dispatch(requestCards()),
        // requestUser: (creatorId) => dispatch(requestUser(creatorId))
    };
};

export default withRouter(connect(MSTP, MDTP)(DeckShow));

