import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchKongInfo} from '../../store/kong-info/Actions';

import {Button, TextField} from '@material-ui/core';

import '../../styles/application.css'

export const KongInfo = () => {
    const [adminUrl, setAdminUrl] = useState();
    const kongInfo = useSelector((state: any) => state.kongInfoReducer.data);
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <div className={'content'}>
                <TextField id='outlined-basic' label='Kong Admin API url' variant='outlined'
                           onChange={e => setAdminUrl(e.target.value)}/>
            </div>
            <Button color='primary' onClick={() => dispatch(fetchKongInfo(adminUrl))}>
                Connect
            </Button>
            {
                kongInfo.tagline && kongInfo.version ? <div>message: {kongInfo.tagline} & version: {kongInfo.version}</div> : ''
            }
        </React.Fragment>
    )
}
