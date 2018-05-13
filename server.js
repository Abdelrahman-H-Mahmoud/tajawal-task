'use strict';

const Hapi = require('hapi');

const {port,host} = require('./src/config/app');

const server = new Hapi.Server({ port: port, host: host });

const routes = require('./src/routes/web');

server.route(routes);

server.start();

console.log('Server running in port '+ port);