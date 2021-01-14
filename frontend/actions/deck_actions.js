import * as APIUtil from '../util/deck.api.util';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const REMOVE_DECK = 'DELETE_DECK';
export const ADD_DECK_TO_USER = 'ADD_DECK_TO_USER';
export const DELETE_DECK_FROM_USER = 'DELETE_DECK_FROM_USER';
export const RECEIVE_USER_DECKS = 'RECEIVE_USER_DECKS';
export const RECEIVE_DECK_ERRORS = 'RECEIVE_DECK_ERRORS';
export const REMOVE_DECK_ERRORS = 'REMOVE_DECK_ERRORS';

const receiveDecks = (decks) => {
    return {
        type: RECEIVE_DECKS,
        decks
    };
};

const receiveUserDecks = (userDecks) => {
    return {
        type: RECEIVE_USER_DECKS,
        userDecks
    };
};

const receiveDeck = (deck) => {
    // debugger;
    return {
        type: RECEIVE_DECK,
        deck
    };
};

const removeDeck = (deckId) => {
    return {
        type: REMOVE_DECK,
        deckId
    };
};

const addUserDeck = (deck) => {
    return {
        type: ADD_DECK_TO_USER,
        deck
    };
};

const deleteUserDeck = (deckId) => {
    // debugger;
    return {
        type: DELETE_DECK_FROM_USER,
        deckId
    };
};

export const receiveDeckErrors = (deckErrors)  => {
    // debugger;
    return {
        type: RECEIVE_DECK_ERRORS,
        deckErrors
    };
};

export const removeDeckErrors = () => {
    return {
        type: REMOVE_DECK_ERRORS
    };
};

export const requestDecks = () => {
    return dispatch => {
        return APIUtil.fetchDecks()
            .then((decks) => {
                return dispatch(receiveDecks(decks));
            });
    };
};

export const requestUserDecks = () => {
    return dispatch => {
        return APIUtil.fetchUserDecks()
            .then((userDecks) => {
                return dispatch(receiveUserDecks(userDecks));
            });
    };
};

export const requestDeck = (deckId) => {
    return dispatch => {
        return APIUtil.fetchDeck(deckId)
            .then(deck => {
                return dispatch(receiveDeck(deck));
            });
    };
};

export const createDeck = (deck) => dispatch => {
    return APIUtil.createDeck(deck)
        .then(
            newDeck => dispatch(receiveDeck(newDeck)),
            errors => dispatch(receiveDeckErrors(errors.responseJSON))
        );
};

// export const updateDeck = (deck) => {
//     return dispatch => {
//         return APIUtil.updateDeck(deck)
//             .then(updatedDeck => {
//                 return dispatch(receiveDeck(updatedDeck));
//             });
//     };
// };

export const updateDeck = (deck) => dispatch => {
    return APIUtil.updateDeck(deck)
        .then(
            updatedDeck => dispatch(receiveDeck(updatedDeck)),
            errors => dispatch(receiveDeckErrors(errors.responseJSON))
        );
};

export const deleteDeck = (deckId) => {
    return dispatch => {
        return APIUtil.deleteDeck(deckId)
            .then((res) => {
                return dispatch(removeDeck(deckId));
            }); 
    };
};

export const addDecktoUser = (deck) => {
    return dispatch => {
        return APIUtil.addDecktoUser(deck)
            .then((deck) => {
                return dispatch(addUserDeck(deck));
            });
    };
};

export const deleteDeckFromUser = (deckId) => {
    return dispatch => {
        return APIUtil.deleteDeckFromUser(deckId)
            .then(() => {
                return dispatch(deleteUserDeck(deckId));
            });
    };
};