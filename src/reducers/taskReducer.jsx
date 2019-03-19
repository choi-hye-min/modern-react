import { Map, List } from 'immutable';

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

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return state.set('tasks', state.get('tasks').push(Map(action))) // 불면 라이브라리 변경후
        default:
            return state;
    }
}