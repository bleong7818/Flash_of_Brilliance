// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from '../reducers/root_reducer';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

// const configureStore = (preloadedState = {}) => {
//     return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
// };

// export default configureStore;

import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
// thunk middleware (can just import without having to do your own like this)
const thunk = function ({ dispatch, getState }) {
    return function (nextMiddleWare) {
        return function (action) {
            if (typeof action === "function") {
                return action(dispatch, getState);
            }
            return nextMiddleWare(action);
        };
    };
};
const middlewares = [thunk];
// ! Ignores logger in production rather than hardcode out
if (process.env.NODE_ENV !== "production") {
    // must use 'require' (import only allowed at top of file)
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}
const configureStore = function (preloadedState = {}) {
    return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));
};
export default configureStore;