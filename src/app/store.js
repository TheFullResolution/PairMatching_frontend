// src/store.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { reducer as formReducer } from 'redux-form';
import {
    syncHistoryWithStore,
    routerReducer,
    routerMiddleware
} from 'react-router-redux';

import AuthReducer from 'Auth/AuthReducer';
import PairsReducer from 'Pairs/PairsReducer';

const reducers = {
    form: formReducer,
    auth: AuthReducer,
    pairs: PairsReducer
};

const routingMiddleware = routerMiddleware(browserHistory);
const reducer = combineReducers(
    Object.assign({}, reducers, { routing: routerReducer })
);

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const enhancer = compose(
    applyMiddleware(routingMiddleware),
    applyMiddleware(ReduxThunk),
    devTools
);

const store = createStore(reducer, enhancer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

if (module.hot) {
    module.hot.accept();
}
