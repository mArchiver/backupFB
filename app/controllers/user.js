

exports.showMe = function(req, res){
    res.render('user/showMe', {
        title: '個人資訊',
    });
};
