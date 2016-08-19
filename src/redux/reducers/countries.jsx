'use strict';

import {
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_ERROR
} from './../actions/countries';

const defaultState = {
    data: undefined,
    isGetCountriesError: false
};

export const countries = (state = defaultState, action) => {
    switch (action.type) {
        case GET_COUNTRIES_SUCCESS:
            return Object.assign({}, state, defaultState, { data: action.data });
        case GET_COUNTRIES_ERROR:
            return Object.assign({}, state, { isGetCountriesError: true });
    }

    return state;
};
