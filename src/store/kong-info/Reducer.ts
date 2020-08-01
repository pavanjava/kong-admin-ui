import {KongInfoActionTypes, KongInfoState} from './Types';
import {Reducer} from 'redux';

export const initialState: KongInfoState = {
    data: {},
    error: '',
    loading: false
};

export const KongInfoReducer: Reducer<KongInfoState> = (state = initialState, action) => {
    switch (action.type){
        case KongInfoActionTypes.FETCH_REQUEST:
            return {...state, loading: true}

        case KongInfoActionTypes.FETCH_SUCCESS:
            return {...state, loading: false, data: action.payload}

        case KongInfoActionTypes.FETCH_ERROR:
            return { ...state, loading: false, errors: action.payload };

        default:
            return state;

    }
}
