'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import configureStore from './redux/configure-store';


const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
