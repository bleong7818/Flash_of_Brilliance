import {
    RECEIVE_DECK_ERRORS,
    REMOVE_DECK_ERRORS
} from '../actions/deck_actions';

const deckErrorReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_DECK_ERRORS:
            // debugger;
            newState = action.deckErrors;
            return newState;
        case REMOVE_DECK_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default deckErrorReducer;