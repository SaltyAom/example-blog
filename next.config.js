const withCSS = require('@zeit/next-css')

module.exports = withCSS({
        exportPathMap: () => {
            return {
            '/': { page: '/' }
            }
        },
        target: 'serverless',
});