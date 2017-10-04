import * as types from '../actions/actionTypes';

export default function todosReducer(state=[], action){
    switch(action.type){
        case types.CREATE_TODO:
            console.log('...in reducer CREATE_COURSE...');
            //ES6 way (spread operator):
            return [...state, //return a new instance of the state array
                Object.assign( {}, action.todo) //deep copy of the course that is passed in
            ]; //so we return a brand new state that return the course that user added

        default:
            return state;
    }
}
