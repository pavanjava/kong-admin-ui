import React, {useEffect} from 'react';
import '../../styles/application.css'
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllServices} from '../../store/services/Actions';
import {serviceUrl} from '../../store/BaseUrls';
import {Services} from '../../store/services/Types';
import * as _ from 'lodash';
import * as moment from 'moment';

import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Delete, Edit} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
});

const DenseTable = (data: Services, next: string) => {
    const classes = useStyles();
    if (_.isArray(data.data)) {
        const rows = data.data;
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} size='small' aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Actions</TableCell>
                            <TableCell>Host</TableCell>
                            <TableCell align='right'>Protocol</TableCell>
                            <TableCell align='right'>Name</TableCell>
                            <TableCell align='right'>Path</TableCell>
                            <TableCell align='right'>Port</TableCell>
                            <TableCell align='right'>CreatedAt</TableCell>
                            <TableCell align='right'>UpdatedAt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row: any) => (
                            <TableRow key={row.id}>
                                <TableCell><Link to={`${window.location.pathname}/${row.id}`}><Edit/></Link><Link to={`${window.location.pathname}/${row.id}`}><Delete/></Link></TableCell>
                                <TableCell component='th' scope='row'>
                                    {row.host}
                                </TableCell>
                                <TableCell align='right'>{row.protocol}</TableCell>
                                <TableCell align='right'>{row.name}</TableCell>
                                <TableCell align='right'>{row.path}</TableCell>
                                <TableCell align='right'>{row.port}</TableCell>
                                <TableCell align='right'>{moment.unix(row.created_at).format('DD-MMM-YYYY')}</TableCell>
                                <TableCell align='right'>{moment.unix(row.updated_at).format('DD-MMM-YYYY')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    } else {
        return (
            <span>Please Wait while fetching services</span>
        )
    }


}

export const ApplicationServices = () => {

    const dispatch = useDispatch();
    const services = useSelector((state: any) => state.servicesReducer);

    useEffect(() => {
        dispatch(fetchAllServices());
    }, [serviceUrl]);

    return (
        <React.Fragment>
            <div className={'content'}>
                <DenseTable data={services.data} next={services.next}/>
            </div>
        </React.Fragment>

    )
}