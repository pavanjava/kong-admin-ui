import React from 'react';
import {AppBar, Typography} from '@material-ui/core';

export const Footer = () => {
    return(
        <AppBar position={'static'} className={'footer'}>
            <Typography variant={'h6'} className={'typography'}>
                &copy; kong admin ui 2020
            </Typography>
        </AppBar>
    )
}