export interface KongInfo {
    tagline: string;
    version: string;
}

export enum KongInfoActionTypes {
    FETCH_REQUEST = 'FETCH_REQUEST',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    FETCH_ERROR = 'FETCH_ERROR'
}

export interface KongInfoState {
    readonly loading: boolean;
    readonly data: any;
    readonly error: string;
}