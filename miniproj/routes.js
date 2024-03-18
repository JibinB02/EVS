

const routes = require('next-routes');

module.exports = routes()
  .add('/', '/index')
  .add('startelec', '/startelec')
  .add('vote', '/vote')
  .add('votecount','/votecount')

