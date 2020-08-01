import React from 'react';
import {AppBar, Typography} from '@material-ui/core';
import '../../styles/application.css';

export const Header = () => {
    return (
        <AppBar position={'static'} className={'header'}>
            <Typography variant={'h6'}>
                Kong Admin UI
            </Typography>
        </AppBar>
    )
}