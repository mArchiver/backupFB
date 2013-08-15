module.exports = function(app){

    var home = function(req, res){
      res.render('index', { title: 'Express' });
    };

    app.get('/', home);
};
