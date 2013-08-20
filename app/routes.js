module.exports = function(app){



    var user = require('./controllers/user');
    var album =require('./controllers/album');

    app.get('/', user.home);

    app.get('/me', user.showMe);
    app.get('/login/callback', user.loginCallback);

    app.get('/user/:id', user.showUser);

    app.get('/album/:id', album.showAlbum);
    app.get('/album/:id/after/:after', album.showAlbum);
    app.get('/album/:id/before/:before', album.showAlbum);


};
