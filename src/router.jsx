'use strict';

import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

import App from './components/app';
import ListPage from './components/list-page';
import About from './components/about-page';

export default () => <Router history={hashHistory}>{Routes}</Router>;

const Routes = (
    <Route name="app"
           path="/"
           component={App}>
        <IndexRoute component={ListPage}/>
        <Route name="list-page"
               path="/list"
               component={ListPage}/>
        <Route name="about-page"
               path="/about"
               component={About}/>
    </Route>
);
