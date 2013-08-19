var FB = require('../models/apiFb');


exports.home = function(req, res){
    res.render('index', {
        title: 'Express',
        loginUrl : FB.getLoginUrl({ scope: 'user_about_me,user_photos,friends_photos' })
    });
};

exports.showMe = function(req, res){
    var access_token = req.session.access_token;
    FB.setAccessToken(access_token);

    FB.api('/me', { 'limit' : 100 }, function (result) {

        console.log(result);

        res.render('user/showMe', {
            title: '個人資訊',
            data : result
        });
    });
};

exports.loginCallback = function(req, res){
    var code = req.query.code;

    FB.napi('oauth/access_token', {
        client_id:      FB.options('appId'),
        client_secret:  FB.options('appSecret'),
        redirect_uri:   FB.options('redirectUri'),
        code:           code
    },
    function extendAccessToken(err, result) {
        if(err) {
            console.log(err);
            res.redirect('/');
            // throw(err);
        }else {
            FB.napi('oauth/access_token', {
                client_id:          FB.options('appId'),
                client_secret:      FB.options('appSecret'),
                grant_type:         'fb_exchange_token',
                fb_exchange_token:  result.access_token
            }, function (err, result) {
                if(err) return next(err);

                req.session.access_token = result.access_token;
                // req.session.expires
                res.redirect('/me');

            });
        }
    });
};

exports.showUser = function(req, res) {
    var access_token = req.session.access_token;
    FB.setAccessToken(access_token);
    var userid = req.params.id;

    FB.api('/' + userid + '/albums', { 'limit' : 100 }, function (result) {

        console.log(result);

        res.render('user/showUser', {
            title: '個人資訊',
            data : result
        });
    });
};
