const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://eiawebss.amocrm.ru',
            changeOrigin: true,
        })
    );
};