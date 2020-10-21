// import { connect } from 'react-redux';
// import { receiveDecks, removeDeck } from '../../actions/deck_actions';
// import EventIndex from './event_index'

// const MSTP = (state, ownProps) => {
//     return {
//         decks: Object.values(state.entities.decks[ownProps.match.params.userId)
//     };
// };

// const MDTP = dispatch => {
//     return {
//         receiveDecks: () => dispatch(receiveDecks()),
//         removeDeck: (deckId) => dispatch(removeDeck(deckId))
//     }
// }

// export default connect(MSTP, MDTP)(EventIndex)