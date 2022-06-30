import { createStore } from 'redux'

const ADD_TODO = 'ADD_TODO'
const DEL_ACTION = 'DEL_ACTION'

export const addTodoAction = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload
    }
}
export const delTodoAction = (payload) => {
    return {
        type: DEL_ACTION,
        payload: payload
    }
}


const initialState = {
    todos: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:

            return { ...state, todos: [...state.todos, action.payload] }
        case DEL_ACTION:

            return { ...state, todos: [...state.todos.filter((item,index) =>  index !== action.payload )] }

        default:
            return state
    }
}


export const store = createStore(
    todoReducer
);