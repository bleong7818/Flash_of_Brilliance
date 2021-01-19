import * as APIUtil from '../util/card.api.util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const RECEIVE_UPDATED_CARD = 'RECEIVE_UPDATED_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';
export const REMOVE_CARD_ERRORS = 'REMOVE_CARD_ERRORS';

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

const receiveUpdatedCard = (updatedCard) => {
    return {
        type: RECEIVE_UPDATED_CARD,
        updatedCard
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

export const removeCardErrors = () => {
    return {
        type: REMOVE_CARD_ERRORS
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

export const createCard = (card) => dispatch => {
    return APIUtil.createCard(card)
        .then(
            newCard => dispatch(receiveCard(newCard)),
            errors => dispatch(receiveCardErrors(errors.responseJSON))
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

// export const updateDeck = (deck) => dispatch => {
//     return APIUtil.updateDeck(deck)
//         .then(
//             updatedDeck => dispatch(receiveDeck(updatedDeck)),
//             errors => dispatch(receiveDeckErrors(errors.responseJSON))
//         );
// };

export const updateCard = (card) => {
    return dispatch => {
        return APIUtil.updateCard(card)
            .then(updatedCard => {
                return dispatch(receiveUpdatedCard(updatedCard));
            });
    };
};

// export const updateCard = (card) => dispatch => {
//     return APIUtil.updateCard(card)
//         .then(
//             updatedCard => dispatch(receiveCard(updatedCard)),
//             errors => dispatch(receiveCardErrors(errors.responseJSON))
//         );
// };

export const deleteCard = (cardId) => {
    return dispatch => {
        return APIUtil.deleteCard(cardId)
            .then( () => {
                return dispatch(removeCard(cardId));
            });
    };
};