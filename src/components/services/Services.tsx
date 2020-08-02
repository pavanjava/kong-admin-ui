import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllServices} from '../../store/services/Actions';
import {serviceUrl} from '../../store/BaseUrls';
import * as _ from 'lodash';
import * as moment from 'moment';

import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Delete, Edit} from '@material-ui/icons';
import {Link} from 'react-router-dom';

import '../../styles/application.css'

interface DataTable {
    path: string;
    data: any;
}

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
});

const DenseTable:React.FC<DataTable> = ({path, data}) => {
    const classes = useStyles();
    if (_.isArray(data)) {
        const rows = data;
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
                                <TableCell><Link to={`${path}/${row.id}`}><Edit/></Link><Link to={`${path}/${row.id}`}><Delete/></Link></TableCell>
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

export const ApplicationServices = (props: any) => {

    const dispatch = useDispatch();
    const services = useSelector((state: any) => state.servicesReducer);
    useEffect(() => {
        dispatch(fetchAllServices());
    }, [serviceUrl]);
    return (
        <React.Fragment>
            <div className={'content'}>
                <DenseTable path={props.match.url} data={services.data} />
            </div>
        </React.Fragment>

    )
}