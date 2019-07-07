const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    target: 'serverless',
    webpack (config, options) {
        config.resolve.alias['react'] = 'preact/compat'
        config.resolve.alias['react-dom'] = 'preact/compat'

        return config
    }
});