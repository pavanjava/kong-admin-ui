import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {ApplicationState, createRootReducer} from './config';
import {History} from 'history';
import {composeWithDevTools} from 'redux-devtools-extension';

export function ConfigureStore(history: History, initState: ApplicationState) {

    const store = createStore(createRootReducer(history), initState, composeWithDevTools(applyMiddleware(thunk)));
    return store;
}