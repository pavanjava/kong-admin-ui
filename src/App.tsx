import React from 'react';
import {Provider} from 'react-redux';
import {ApplicationState} from './store/config';
import {Store} from 'redux';
import {History} from 'history';
import {AppRoutes} from './Routes';
import {BrowserRouter} from 'react-router-dom';

interface MainProps {
    store: Store<ApplicationState>;
    history: History;
}

const App: React.FC<MainProps> = ({store, history}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
