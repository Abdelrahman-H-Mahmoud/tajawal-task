'use strict';

const Hapi = require('hapi');

const {port,host} = require('./src/config/app');

const server = new Hapi.Server({ port: port, host: host });

const routes = require('./src/routes/web');

server.route(routes);

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}
start();

module.exports = server;