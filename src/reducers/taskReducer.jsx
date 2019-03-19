import { Map, List } from 'immutable';

/*const initialState = {
    tasks : [
        {
            type: 'ADD_TASK',
            payload:{
                task: 'reducer 공부하기 [sample]'
            }
        }
    ]
}*/

// immutable 활용하여 변경
const initialState = Map(
    {
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
            //return { tasks: state.tasks.concat(action) } // 변경전
            return state.set('tasks', state.get('tasks').push(Map(action))) // 불면 라이브라리 변경후
        default:
            return state;
    }
}