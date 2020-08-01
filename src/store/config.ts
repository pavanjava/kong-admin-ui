import {combineReducers} from 'redux';
import {connectRouter, RouterState} from 'connected-react-router';
import {History} from 'history';
import {KongInfoState} from './kong-info/Types';
import {KongInfoReducer} from './kong-info/Reducer';

export interface ApplicationState {
    router: RouterState,
    kongInfoState: KongInfoState
}

export const createRootReducer = (history: History): any => {
    return combineReducers({router: connectRouter(history), kongInfoReducer: KongInfoReducer});
}