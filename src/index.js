import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {initialState, taskReducer} from './reducers/taskReducer';

const store = createStore(taskReducer);

store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);