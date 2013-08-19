var FB = require('fb');
var config = require('../../config/config.js');

FB.options({
    appId:          '更換成自己申請的FB APP資訊',
    appSecret:      '更換成自己申請的FB APP資訊',
    redirectUri:    config.baseUri + '/login/callback',
    scope:          'user_about_me,user_photos,friends_photos'
});






module.exports = FB;
