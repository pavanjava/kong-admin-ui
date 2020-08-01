import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/application.css';
import {ConfigureStore} from './store/ConfigureStore';
import {createBrowserHistory} from 'history';

const initialState: any = {};
const history = createBrowserHistory();

const store = ConfigureStore(history, initialState);

ReactDOM.render(
    <React.StrictMode>
        <div className={'app'}>
            <App store={store} history={history}/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
