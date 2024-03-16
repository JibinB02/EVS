

const routes = require('next-routes');

module.exports = routes()
  .add('/', '/index')
  .add('startelec', '/startelec')
  .add('about', '/about')

