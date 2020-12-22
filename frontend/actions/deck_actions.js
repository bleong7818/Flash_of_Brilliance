import * as APIUtil from '../util/deck.api.util';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const REMOVE_DECK = 'DELETE_DECK';
export const RECEIVE_DECK_ERRORS = 'RECEIVE_DECK_ERRORS';
export const REMOVE_DECK_ERRORS = 'REMOVE_DECK_ERRORS';

const receiveDecks = (decks) => {
    return {
        type: RECEIVE_DECKS,
        decks
    };
};

const receiveDeck = (deck) => {
    debugger;
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

const receiveDeckErrors = (deckErrors)  => {
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

export const requestDeck = (deckId) => {
    debugger;
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

export const updateDeck = (deck) => {
    return dispatch => {
        return APIUtil.updateDeck(deck)
            .then(updatedDeck => {
                return dispatch(receiveDeck(updatedDeck));
            });
    };
};

export const deleteDeck = (deckId) => {
    return dispatch => {
        return APIUtil.deleteDeck(deckId)
            .then(() => {
                return dispatch(removeDeck(deckId));
            }); 
    };
};
