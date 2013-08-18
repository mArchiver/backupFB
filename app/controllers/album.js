var FB = require('fb');

FB.options({
    appId:          '390240691097703',
    appSecret:      '2b48d0351d04e1a658f3181826f779d5',
    redirectUri:    'http://fb.dca.tw/login/callback'
});

exports.showAlbum = function(req, res) {
    var access_token = req.session.access_token;
    FB.setAccessToken(access_token);
    var albumId = req.params.id;

    FB.api('/' + albumId + '/photos', { 'limit' : 1000 }, function (result) {

        console.log(result);

        res.render('album/showAlbum', {
            data : result
        });
    });
};
