import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_DECK } from '../actions/deck_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_DECK:
            return newState[action.currentUser.deck.id]
        default:
            return state;
    }
};

export default usersReducer;