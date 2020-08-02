import {ServicesActionTypes, ServicesState} from './Types';
import {Reducer} from 'redux';

export const initialState: ServicesState = {
    data: {
        'next': '',
        'data': [
            {
                'host': '',
                'id': '',
                'protocol': '',
                'read_timeout': 0,
                'tls_verify_depth': '',
                'port': 0,
                'updated_at': 0,
                'ca_certificates': 0,
                'created_at': 0,
                'connect_timeout': 0,
                'write_timeout': 0,
                'name': '',
                'retries': 0,
                'path': '',
                'tls_verify': '',
                'tags': '',
                'client_certificate': ''
            }
        ]
    },
    error: '',
    loading: false
}

export const ServicesReducer: Reducer<ServicesState> = (state = initialState, action) => {
    switch (action.type) {
        case ServicesActionTypes.FETCH_REQUEST:
            return {...state, loading: true};

        case ServicesActionTypes.FETCH_SUCCESS:
            return {...state, loading: false, data: action.payload};

        case ServicesActionTypes.FETCH_ERROR:
            return {...state, loading: false, errors: action.payload};

        default:
            return state;
    }
}
