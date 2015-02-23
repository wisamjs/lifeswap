'use strict';
var mock = module.exports;
var q = require('q');

mock.login = function(req) {
    return q.when({
        status: 200,
        data: {
            user: 'Wisam'
        }
    });
};

mock.saveDestination = function(req) {
    return q.when({
        status: 200,
        data: {
            response: 'Destination added'
        }
    });
};