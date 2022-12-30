var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const ownerRouter = require("./app/owner/route");
const bahanBakuRouter = require("./app/bahanBaku/route");
const produkRouter = require("./app/produk/route");

const customErrorHandler = require("./middleware/customErrorHandler");
const handler404NotFound = require("./middleware/handler404NotFound");
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/owner', ownerRouter);
app.use('/bahanbaku', bahanBakuRouter);
app.use('/produk', produkRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler

app.use(customErrorHandler);
app.use(handler404NotFound);

module.exports = app;
