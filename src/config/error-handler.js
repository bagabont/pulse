'use strict';

var handleErrors = function(app) {

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var error = new Error(req.url);
        error.status = 404;
        return next(error);
    });

    // development error handler will print stack trace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.send({ message: err.message, error: err });
        });
    }

    // production error handler no stack traces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: {}
        });
    });
};

exports.config = handleErrors;
