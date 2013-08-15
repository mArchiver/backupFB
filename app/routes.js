module.exports = function(app){

    var home = function(req, res){
      res.render('index', { title: 'Express' });
    };

    var user = require('./controllers/user');

    app.get('/', home);
    app.get('/me', user.showMe);

};
