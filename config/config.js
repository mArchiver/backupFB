var development = {
    root: require('path').normalize(__dirname + '/..'),
    port: 3000,
    baseUri: 'http://localhost:3000',

    app: {
        name: 'Application-name'
    },
};

var production = {

    baseUri: 'http://fb.dca.tw',

};


console.log('process.env.NODE_ENV', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
    var config = merge( development, production);
}


function merge(obj1,obj2){
    for (var attrname in obj2) { obj1[attrname] = obj2[attrname]; }
    return obj1;
}

module.exports = config;
