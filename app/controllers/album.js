var FB = require('../models/apiFb');



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
