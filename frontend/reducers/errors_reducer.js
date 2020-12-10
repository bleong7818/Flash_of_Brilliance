import { combineReducers } from "redux";
import deckErrorReducer from "./deck_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import CardErrorsReducer from './card_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    decks: deckErrorReducer,
    cards: CardErrorsReducer
});

export default errorsReducer;