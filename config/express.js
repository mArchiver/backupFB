var express = require('express');

module.exports = function(app, config) {

    app.configure(function() {
        app.use(express.compress());
        console.log(config.root);

        app.use(express.static(config.root + '/public'));
        app.set('port', config.port);
        app.set('views', config.root + '/app/views');
        app.set('view engine', 'jade');
        // app.use(express.favicon(config.root + '/public/img/favicon.ico'));
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser('your secret here'));
        app.use(express.session({ secret: 'keyboard cat' }));

        app.use(app.router);


    });

    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

};
