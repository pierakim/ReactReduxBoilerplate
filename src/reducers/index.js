import {combineReducers} from 'redux';

import todos from './todosReducer';

const rootReducer = combineReducers({
    //shorthand property name here
    todos
    //reducer02
});

export default rootReducer;