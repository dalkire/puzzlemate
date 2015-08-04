module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname,
    filename: './js/bundle.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules', 'node_modules/tungstenjs/precompile']
  },
  module: {
    loaders: [
      { test: /\.mustache$/, loader: 'tungsten_template' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    alias: {
      'jquery': 'backbone.native'
    }
  }
};
