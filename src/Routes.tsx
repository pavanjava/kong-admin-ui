import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from './components/common/Header';
import {Sidebar} from './components/common/Sidebar';
import {Footer} from './components/common/Footer';
import {KongInfo} from './components/kong-info/KongInfo';
import {ApplicationServices} from './components/services/Services';
import {Routes} from './components/routes/Routes';
import {CreateOrEditService} from './components/services/CreateOrEditService';

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
                exact={true}
                path='/Services'
                render={() => (
                    <React.Fragment>
                        <Header/>
                        <div className={'page'}>
                            <Sidebar items={items}/>
                            <ApplicationServices/>
                        </div>
                        <Footer/>
                    </React.Fragment>
                )}
            />
            <Route
                path='/Services/:id'
                render={({match}) => (
                    <React.Fragment>
                        <Header/>
                        <div className={'page'}>
                            <Sidebar items={items}/>
                            <CreateOrEditService match={match}/>
                        </div>
                        <Footer/>
                    </React.Fragment>
                )}
            />
        </Switch>
    </div>
);

