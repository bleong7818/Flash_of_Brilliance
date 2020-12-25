import {
    RECEIVE_DECKS,
    RECEIVE_DECK,
    REMOVE_DECK,
    RECEIVE_DECK_ERRORS
} from '../actions/deck_actions';

const DecksReducer = (oldState = { all: {}, current: {} }, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_DECKS:
            newState.all = action.decks;
            return newState;
        case RECEIVE_DECK:
            newState.current = action.deck.deck;
            return newState;
        case REMOVE_DECK: 
            for(let j = 0; j < newState.all.length; j++) {
                if (newState.all[j].id === action.deckId) {
                    delete newState.all[j];
                }
            }
            return newState;
        default:
            return oldState;
    }
};

export default DecksReducer;