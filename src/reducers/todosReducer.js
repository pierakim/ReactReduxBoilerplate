import * as types from '../actions/actionTypes';

export default function todosReducer(state=[], action){
    switch(action.type){
        case types.CREATE_TODO:
            return [...state, Object.assign( {}, action.todo)];
        default:
            return state;
    }
}
