const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        proxy({ 
            target: 'https://d50mxyhpwb8oh.cloudfront.net', 
            changeOrigin: true ,
            pathRewrite: {
              '^/api':'' 
            }
        })
    );
};