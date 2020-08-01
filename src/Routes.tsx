import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from './components/common/Header';
import {Sidebar} from './components/common/Sidebar';
import {Footer} from './components/common/Footer';
import {KongInfo} from './components/kong-info/KongInfo';
import {Services} from './components/services/Services';
import {Routes} from './components/routes/Routes';

const items = [
    {name: 'kongInfo', label: 'Kong-Info'},
    {
        name: 'upsteam',
        label: 'Upstream'
    },
    {
        name: 'routes',
        label: 'Routes'
    },
    {
        name: 'services',
        label: 'Services'
    },
    {
        name: 'consumers',
        label: 'Consumers'
    },
    {
        name: 'plugins',
        label: 'Plugins'
    }
]

export const AppRoutes = () => (
    <div>
        <Switch>
            <Route
                exact={true}
                path='/'
                render={() => (
                    <React.Fragment>
                        <Header/>
                        <Sidebar items={items}/>
                        <Footer/>
                    </React.Fragment>
                )}
            />
            <Route
                path='/Kong-Info'
                render={() => (
                    <React.Fragment>
                        <Header/>
                        <div className={'page'}>
                            <Sidebar items={items}/>
                            <KongInfo/>
                        </div>
                        <Footer/>
                    </React.Fragment>
                )}
            />
            <Route
                path='/Routes'
                render={() => (
                    <React.Fragment>
                        <Header/>
                        <div className={'page'}>
                            <Sidebar items={items}/>
                            <Routes/>
                        </div>
                        <Footer/>
                    </React.Fragment>
                )}
            />
            <Route
                path='/Services'
                render={() => (
                    <React.Fragment>
                        <Header/>
                        <div className={'page'}>
                            <Sidebar items={items}/>
                            <Services/>
                        </div>
                        <Footer/>
                    </React.Fragment>
                )}
            />
        </Switch>
    </div>
);

