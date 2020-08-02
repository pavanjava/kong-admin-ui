import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {ApplicationState} from '../config';
import {ServicesActionTypes} from './Types';
import axios from 'axios';
import {serviceUrl} from '../BaseUrls';

export type AppThunk = ActionCreator<ThunkAction<void, ApplicationState, null, Action<string>>>;

const getServiceDetails = async(url: string) => {
    const response = await axios.get(url);
    return response.data;
}

export const fetchAllServices: AppThunk = () => {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            const services = await getServiceDetails(serviceUrl);

            return dispatch({
                type: ServicesActionTypes.FETCH_SUCCESS,
                payload: services.data
            });
        }catch (e){
            return dispatch({
                type: ServicesActionTypes.FETCH_ERROR
            });
        }
    }
}

export const fetchServiceByName: AppThunk = (serviceName: string) => {
    return async (dispatch: Dispatch): Promise<Action> => {
        try {
            const url = serviceUrl.concat(`/${serviceName}`);
            const serviceInfo = await getServiceDetails(url);

            return dispatch({
                type: ServicesActionTypes.FETCH_SUCCESS,
                payload: serviceInfo
            });
        } catch (e) {
            return dispatch({
                type: ServicesActionTypes.FETCH_ERROR
            });
        }
    }
}

