import {
    RECEIVE_CARD_ERRORS,
    REMOVE_CARD_ERRORS
} from '../actions/card_actions';

const CardErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CARD_ERRORS:
            newState = action.cardErrors;
            return newState;
        case REMOVE_CARD_ERRORS:
            return [];
        default:
            return newState;
    }
};

export default CardErrorsReducer;