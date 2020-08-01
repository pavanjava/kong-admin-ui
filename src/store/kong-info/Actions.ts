import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {ApplicationState} from '../config';
import {KongInfoActionTypes} from './Types';
import axios from 'axios';

export type AppThunk = ActionCreator<ThunkAction<void, ApplicationState, null, Action<string>>>;

const getKongInfo = async(url: string) => {
    const response = await axios.get(url);
    return response.data;
}

export const fetchKongInfo: AppThunk = (url: string) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            const kongInfo = await getKongInfo(url);

            return dispatch({
                type: KongInfoActionTypes.FETCH_SUCCESS,
                payload: kongInfo
            });
        } catch (e) {
            return dispatch({
                type: KongInfoActionTypes.FETCH_ERROR
            });
        }
    }
}