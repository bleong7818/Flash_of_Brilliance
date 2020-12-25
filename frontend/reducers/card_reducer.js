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
            debugger
            let cardArray = Object.values(newState);
            // delete newState[action.cardId];
            for(let i = 0; i < cardArray.length; i++) {
                if (cardArray[i].id === action.cardId ) {
                    debugger;
                    delete cardArray[i];
                }
            }
            let alteredNew = Object.assign(cardArray);
            return alteredNew;        
        default:
            return newState;
    }
};

export default CardsReducer;