import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from "redux";
import {initialState, taskReducer} from './reducers/taskReducer';
import {Provider} from 'react-redux';
import {createLogger} from "redux-logger";
import ReduxThunk from 'redux-thunk';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(createLogger(), ReduxThunk),
    // other store enhancers if any
);

const store = createStore(taskReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);