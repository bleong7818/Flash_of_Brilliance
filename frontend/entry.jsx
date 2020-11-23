import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { createDeck, deleteDeck, requestDecks } from './actions/deck_actions';
import { requestUser, requestUsers } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //test
    window.store = store;
    window.getState = store.getState;
    window.createDeck = createDeck;
    window.deleteDeck = deleteDeck;
    window.getUsers = requestUsers;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});