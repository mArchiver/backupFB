var FB = require('fb');

FB.options({
    appId:          '390240691097703',
    appSecret:      '2b48d0351d04e1a658f3181826f779d5',
    redirectUri:    'http://fb.dca.tw/login/callback'
});

exports.home = function(req, res){
    res.render('index', {
        title: 'Express',
        loginUrl : FB.getLoginUrl({ scope: 'user_about_me,user_photos' })
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
        if(err) throw(err);
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
