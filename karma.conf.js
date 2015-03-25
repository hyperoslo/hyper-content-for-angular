module.exports = function(config) {
    config.set({
        frameworks: ['browserify', 'jasmine'],

        files: [
            'node_modules/angular/angular.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/**/*.js',
            'spec/**/*.spec.js',
        ],

        preprocessors: {
          'src/**/*.js': ['browserify'],
          'spec/**/*.spec.js': ['browserify']
        },

        browsers: ['Chrome', 'PhantomJS']
    });
};
