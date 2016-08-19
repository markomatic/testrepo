'use strict';

import {
    API_REQUEST
} from './../middleware/api';

export const GET_COUNTRIES_SUCCESS = Symbol('');
export const GET_COUNTRIES_ERROR = Symbol('');

export const getCountries = () => {
    return {
        [API_REQUEST]: {
            actionTypes: {
                success: GET_COUNTRIES_SUCCESS,
                error: GET_COUNTRIES_ERROR
            },
            endpoint: 'http://restcountries.eu/rest/v1/all'
        }
    };
};
