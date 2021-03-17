const path = require('path'),
      NODE_ENV = process.env.NODE_ENV,
      devEnv = NODE_ENV === 'development';

const settings = {
	publicPath: '/Starter/'
}
module.exports = settings
