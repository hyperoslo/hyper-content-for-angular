module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'spec/*Spec.js',
            'hyper-content-for.js'
        ]
    });
};
