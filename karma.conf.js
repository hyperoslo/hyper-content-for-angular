module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            'node_modules/angular/angular.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'spec/*Spec.js',
            'hyper-content-for.js'
        ]
    });
};
