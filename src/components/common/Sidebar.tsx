import React from 'react';
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemText} from '@material-ui/core';

import '../../styles/application.css';

const navigateTo = (page: string) => {
    window.location.href = `http://${window.location.host}/${page}`;
}

export const Sidebar = (items: any) => {
    return (
        <div className={'sidebar'}>
            <List disablePadding={true} dense={true}>
                {items.items.map(({label, name, subItems}: any) => (
                    <ListItem style={{paddingLeft: 18}} key={name} button={true}>
                        <ListItemText><Link to={label}>{label}</Link></ListItemText>
                        {Array.isArray(subItems) ? (
                            <List disablePadding={true}>
                                {subItems.map((subItem) => (
                                    <ListItem key={subItem.name} button={true}>
                                        <ListItemText className='sidebar-item-text'>
                                            {subItem.label}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        ) : null}
                    </ListItem>
                ))}
            </List>
        </div>
    );
}