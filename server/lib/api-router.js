'use strict';
var router = require('express').Router;
var mock = require('./mock');
var api = module.exports = router(); //express router to expose to consumers of this module
var params = require('express-params');
var _ = require('lodash');


//mock to be supported by the api
var routes = [{
    method: 'POST',
    endpoint: 'destination',
    handler: mock.saveDestination}, {
    method: 'POST',
    endpoint: 'login',
    handler: mock.login
}];

//wrap the interface promise based function in an express endpoint
var responseHandler = function(fn) {
    return function(req, res, next) {
        fn(req)
            .then(function(response) {
                var status = response.status || 200;
                res.status(status).send(response.data);
            }, function(error) {
                var status = error.status >= 0 ? error.status : 500;
                var message = error.data || error.toString();
                res.status(status).send(message);
            });
    };
};


//map the api route to the handler and mount it on  apiRouter
_.forEach(routes, function(route) {
    if (route.method === 'GET') {
        api.get('/' + route.endpoint, responseHandler(route.handler));
    } else if (route.method === 'POST') {
        api.post('/' + route.endpoint, responseHandler(route.handler));
    } else if (route.method === 'PUT') {
        api.put('/' + route.endpoint, responseHandler(route.handler));
    } else if (route.method === 'DELETE') {
        api.delete('/' + route.endpoint, responseHandler(route.handler));
    } else {
        throw new Error('Unexpected Http method: ' + route.method);
    }
});