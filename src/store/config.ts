import {combineReducers} from 'redux';
import {History} from 'history';
import {KongInfoState} from './kong-info/Types';
import {KongInfoReducer} from './kong-info/Reducer';
import {ServicesState} from './services/Types';
import {ServicesReducer} from './services/Reducer';

export interface ApplicationState {
    kongInfoState: KongInfoState;
    serviceState: ServicesState;
}

export const createRootReducer = (history: History): any => {
    return combineReducers(
        {
            kongInfoReducer: KongInfoReducer,
            servicesReducer: ServicesReducer
        }
    );
}