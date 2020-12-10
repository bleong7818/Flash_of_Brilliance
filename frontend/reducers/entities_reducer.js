import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import DecksReducer from './deck_reducer';
import CardsReducer from './card_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    decks: DecksReducer,
    cards: CardsReducer
});

export default entitiesReducer;