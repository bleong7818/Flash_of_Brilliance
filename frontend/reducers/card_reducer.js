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
            debugger;
            newState[action.card.id] = action.card;
            return newState;
        case REMOVE_CARD:
            let cardArray = Object.values(newState);
            for(let i = 0; i < cardArray.length; i++) {
                if (cardArray[i].id === action.cardId ) {
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