export interface Services {
    'next': any;
    'data': [
        {
            'host': string;
            'id': string;
            'protocol': string;
            'read_timeout': number;
            'tls_verify_depth': any;
            'port': number;
            'updated_at': number;
            'ca_certificates': any;
            'created_at': number;
            'connect_timeout': number;
            'write_timeout': number;
            'name': string;
            'retries': number;
            'path': string;
            'tls_verify': any;
            'tags': any;
            'client_certificate': any
        }
    ]
}


export enum ServicesActionTypes {
    FETCH_REQUEST = 'SERVICE_FETCH_REQUEST',
    FETCH_SUCCESS = 'SERVICE_FETCH_SUCCESS',
    FETCH_ERROR = 'SERVICE_FETCH_ERROR'
}

export interface ServicesState {
    readonly loading: boolean;
    readonly data: Services;
    readonly error: string;
}