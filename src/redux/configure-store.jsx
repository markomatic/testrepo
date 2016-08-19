'use strict';

import { createStore, applyMiddleware } from 'redux';
import api from './middleware/api';
import reducer from './reducers';

export default state => createStore(
    reducer,
    state,
    applyMiddleware(api)
);
