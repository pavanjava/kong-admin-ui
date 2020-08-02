import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FormControl, FormHelperText, Input, InputLabel} from '@material-ui/core';

import {fetchServiceById} from '../../store/services/Actions';
import {serviceUrl} from '../../store/BaseUrls';

import '../../styles/application.css';

export const CreateOrEditService = (props: any) => {

    console.log(props.match.params.id);
    const dispatch = useDispatch();
    const services = useSelector((state: any) => state.servicesReducer.data);
    console.log(services);

    useEffect(() => {
        dispatch(fetchServiceById(props.match.params.id));
    }, [serviceUrl]);

    return(
        <React.Fragment>
            <div className={'content'}>
                <FormControl>
                    <InputLabel htmlFor='my-input'>Email address</InputLabel>
                    <Input id='my-input' aria-describedby='my-helper-text' />
                    <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='my-input'>Email address</InputLabel>
                    <Input id='my-input' aria-describedby='my-helper-text' />
                    <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText>
                </FormControl>
            </div>
            <span>Service Id: {props.match.params.id}</span>

        </React.Fragment>
    )
}