import React from 'react';
import {useSelector} from 'react-redux';
import '../../styles/application.css'

export const Routes = () => {
    const kongInfo = useSelector((state: any) => state.kongInfoReducer.data)
    return (
        <React.Fragment>
            <div className={'content'}>this is a place holder to display existing Routes and configure new Routes</div>
            <div>{kongInfo.tagline ? kongInfo.tagline : 'Empty'}</div>
        </React.Fragment>
    )
}