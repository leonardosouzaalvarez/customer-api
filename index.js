"use strict";
var logger = require('./lib/logger');
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var customerRouter = require('./routes/customer.router');
var User = require('./models/user.model');
var userRouter = require('./routes/user.router');
var router = express.Router();
var app = express();

function initRestServer() {
    logger.info("Initializing Rest Server");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE, PATCH');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Date");
        res.header("Access-Control-Expose-Headers", "Date");

        next();
    });
    app.use(function(req, res, next) {
        logger.info('Rest ' + req.method + ' Request on ' + req.originalUrl);
        next();
    });
    app.use(function(req, res, next) {
        logger.info('To ISO String ' + new Date().toISOString());
        res.setHeader('Date', new Date().toISOString());
        next();
    });
    app.use('/api/v1/customers', customerRouter);
    app.use('/api/v1/users', userRouter);

    app.use('/doc', express.static('doc'));

    app.get('/ping', function(req, res, next) {
        res.status(200).send({});
        if (next) next();
    });

    app.listen(process.env.REST_PORT, function() {
        logger.info('Rest Server started on port ' + process.env.REST_PORT);
    });
}

function initDB() {
    logger.info("Initializing database");
    var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    return mongoose.connect(process.env.MONGO_URL);
}

function init() {
    logger.info('Service started');
    initDB()
        .then(() => {
            initRestServer();
        });
}

init();