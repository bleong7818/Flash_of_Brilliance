import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from '../actions/session_actions';
import { RECEIVE_DECK } from '../actions/deck_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USERS:
            // debugger;
            newState = action.users;
            return newState;
        case RECEIVE_CURRENT_USER:
            // debugger;
            // newState = action.currentUser;
            // return newState;
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        default:
            return state;
    }
};

export default usersReducer;