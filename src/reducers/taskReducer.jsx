const initialState = {
    tasks : [
        {
            type: 'ADD_TASK',
            payload:{
                task: 'reducer 공부하기'
            }
        }
    ]
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: state.tasks.concat(action)
            }
        default:
            return state;
    }
}