import {
    RECEIVE_CARDS,
    RECEIVE_CARD,
    REMOVE_CARD
} from '../actions/card_actions';

const CardsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CARDS:
            newState = action.cards;
            return newState;
        case RECEIVE_CARD:
            newState[action.card.id] = action.card;
            return newState;
        case REMOVE_CARD:
            delete newState[action.cardId];
            return newState;        
        default:
            return newState;
    }
};

export default CardsReducer;