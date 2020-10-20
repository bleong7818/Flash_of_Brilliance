import * as APIUtil from '../util/deck.api.util';

export const RECEIVE_DECK = 'RECEIVE_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const RECEIVE_DECK_ERRORS = 'RECEIVE_DECK_ERRORS'

export const receiveCurrentDeck = currentDeck => {
    return {
        type: RECEIVE_DECK,
        currentDeck
    };
};

export const deleteDeck = (deckId) => {
    return {
        type: DELETE_DECK,
        deckId
    };
};

export const receiveDeckErrors = (deckErrors)  => {
    return {
        type: RECEIVE_DECK_ERRORS,
        deckErrors
    }
}

export const fetchDeck = (deckId) => {
    return dispatch => {
        return APIUtil.fetchDeck(deckId)
            .then(deck => {
                dispatch(receiveCurrentDeck(deck))
            })
    }
}

export const createDeck = (deck) => dispatch => {
    return APIUtil.createDeck(deck)
        .then(
            newDeck => dispatch(receiveCurrentUser(newDeck)),
            errors => dispatch(receiveDeckErrors(errors.responseJSON))
        );
};

export const updateDeck = (deckId) => {
    return dispatch => {
        return APIUtil.updateDeck(deckId)
            .then(updatedDeck => {
                
            })
    }
}

