import { Map, List } from 'immutable';
import {handleActions} from 'redux-actions';

// immutable 활용하여 변경
const initialState = Map(
    {
        counter: 0,
        tasks: List([
            Map({
                type: 'ADD_TASK',
                payload: Map({
                    task: 'reducer 공부하기 [sample]'
                })
            })
        ])
    }
);

const ADD_TASK = 'ADD_TASK';
const ADD_COUNTER = 'ADD_COUNTER';

export const taskReducer = handleActions({
    [ADD_TASK]: (state, action) => {
        return state.set('tasks', state.get('tasks').push(Map(action)))
    },
    [ADD_COUNTER]: (state, action) => state.set('counter', state.get('counter')+1)
}, initialState)

/*
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return state.set('tasks', state.get('tasks').push(Map(action))) // 불면 라이브라리 변경후

        case 'ADD_COUNTER':
            return state.set('counter', state.get('counter')+1)

        default:
            return state;
    }
}*/
