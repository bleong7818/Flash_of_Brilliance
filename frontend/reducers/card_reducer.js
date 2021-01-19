import {
    RECEIVE_CARDS,
    RECEIVE_CARD,
    REMOVE_CARD,
    RECEIVE_UPDATED_CARD
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
        case RECEIVE_UPDATED_CARD:
            let updatedCardArray = Object.values(newState);
            for (let i = 0; i < updatedCardArray.length; i++) {
                if (updatedCardArray[i].id === action.updatedCard.id) {
                    updatedCardArray[i] = action.updatedCard;
                }
            }
            let updatedNew = Object.assign(updatedCardArray);
            return updatedNew;  
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