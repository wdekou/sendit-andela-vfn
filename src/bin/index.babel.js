const babelConfig = require('../../babel.config');

require('@babel/register')(babelConfig); // eslint-disable-line
require('./index');
