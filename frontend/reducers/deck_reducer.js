import {
    RECEIVE_DECKS,
    RECEIVE_USER_DECKS,
    RECEIVE_DECK,
    REMOVE_DECK,
    RECEIVE_DECK_ERRORS,
    ADD_DECK_TO_USER,
    DELETE_DECK_FROM_USER,
} from '../actions/deck_actions';

const DecksReducer = (oldState = { all: {}, current: {}, user: {}}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_DECKS:
            newState.all = action.decks;
            return newState;
        case RECEIVE_USER_DECKS:
            newState.user = action.userDecks;
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
        case ADD_DECK_TO_USER:
            // newState.user[action.deck.deck.id] = action.deck.deck;
            newState.user.push(action.deck.deck);
            return newState;
        case DELETE_DECK_FROM_USER:
            for(let i = 0; i < newState.user.length; i++) {
                if (newState.user[i].id === action.deckId) {
                    newState.user.splice(i, 1);
                    // delete newState.user[i];
                }
            }
            return newState;    
        default:
            return oldState;
    }
};

export default DecksReducer;