'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        coffee: {
            options: {
                bare: true,
                join: true
            },
            compile: {
                files: {
                    'lib/Moon.js': 'src/Moon.coffee',
                    'demo/lib/app.js': ['src/Moon.coffee', 'demo/src/app.coffee']
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'lib/Moon.min.js': ['lib/Moon.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};