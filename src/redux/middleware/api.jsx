'use strict';

import superagent from 'superagent';

export const API_REQUEST = Symbol('API request');

export default store => next => action => {
    const apiRequest = action[API_REQUEST];

    if (!apiRequest) {
        return next(action);
    }

    const {
        endpoint
        } = apiRequest;

    const {
        success,
        error
        } = apiRequest.actionTypes;

    return superagent.get(endpoint)
        .accept('application/json')
        .end((err, res) => {
            if(!err && res && !res.error) {
                next(createAction(action, {
                    type: success,
                    data: res.body
                }));
                return;
            }

            next(createAction(action, {
                type: error,
                data: {
                    error: res.error,
                    response: res
                }
            }));
        });
}

const createAction = (action, newAction) => {
    const finalAction = Object.assign({}, action, newAction);
    delete finalAction[API_REQUEST];
    return finalAction;
};
