// karma.conf.js
module.exports = function karma(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      '*.js',
      '*.ts',
      'test/*.js'
    ]
  });
};
