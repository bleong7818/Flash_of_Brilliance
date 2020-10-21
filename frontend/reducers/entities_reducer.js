import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import DecksReducer from './deck_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    decks: DecksReducer
});

export default entitiesReducer;