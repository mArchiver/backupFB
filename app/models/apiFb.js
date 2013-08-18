var FB = require('fb');
var config = require('../../config/config.js');

FB.options({
    appId:          '390240691097703',
    appSecret:      '2b48d0351d04e1a658f3181826f779d5',
    redirectUri:    config.baseUri + '/login/callback',
    scope:          'user_about_me,user_photos,friends_photos'
});






module.exports = FB;
