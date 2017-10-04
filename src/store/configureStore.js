import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

//configure store will be called as an entry point in our application
//one parameter: we initialise the store with some state
export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(reduxImmutableStateInvariant()),
            // enable/disable ReactDevTool extension here
            // todo:
            // separate dev and prod
            //window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}