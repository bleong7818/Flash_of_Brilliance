import * as APIUtil from '../util/card.api.util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';
export const REMOVE_CARD_ERRRORS = 'REMOVE_CARD_ERRORS';

const receiveCards = (cards) => {
    return {
        type: RECEIVE_CARDS,
        cards
    };
};

const receiveCard = (card) => {
    return {
        type: RECEIVE_CARD,
        card
    };
};

const removeCard = (cardId) => {
    return {
        type: REMOVE_CARD,
        cardId
    };
};

const receiveCardErrors = (cardErrors) => {
    return {
        type: RECEIVE_CARD_ERRORS,
        cardErrors
    };
};

const removeCardErrors = () => {
    return {
        type: REMOVE_CARD_ERRRORS
    };
};

export const requestCards = () => {
    return dispatch => {
        return APIUtil.fetchCards()
            .then((decks) => {
                return dispatch(receiveCards(decks));
            });
    };
};

export const requestCard = (cardId) => {
    return dispatch => {
        return APIUtil.fetchCard(cardId)
            .then(card => {
                return dispatch(receiveCard(card));
            });
    };
};

export const createCard = (card) => {
    return APIUtil.createCard(card)
        .then(
            newCard => dispatch(receiveCard(newCard)),
            errors => dispatch(receiveCardErrors(errors))
        );
};

export const updateCard = (cardId) => {
    return dispatch => {
        return APIUtil.updateCard(cardId)
            .then(updatedCard => {
                return dispatch(receiveCard(cardId));
            });
    };
};

export const deleteCard = (cardId) => {
    return dispatch => {
        return APIUtil.deleteCard(cardId)
            .then( () => {
                return dispatch(removeCard(cardId));
            });
    };
};