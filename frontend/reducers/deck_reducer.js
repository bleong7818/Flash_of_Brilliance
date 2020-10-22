import {
    RECEIVE_DECKS,
    RECEIVE_DECK,
    REMOVE_DECK,
    RECEIVE_DECK_ERRORS
} from '../actions/deck_actions';

const DecksReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_DECKS:
            return action.decks
        case RECEIVE_DECK:
            newState[action.deck.id] = action.deck
            return newState;
        case REMOVE_DECK: 
            delete newState[action.deckId];
            return newState;
        default:
            return newState;
    };
};

export default DecksReducer;