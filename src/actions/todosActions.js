/**
 * Created by Chicken on 02/10/2017.
 */
import * as types from './actionTypes';

//we are just creating action here
export function createTodo(todo){
    return{ type:types.CREATE_TODO, todo};
}