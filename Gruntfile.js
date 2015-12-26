/*
 * grunt-puglint
 * https://github.com/mrmlnc/grunt-puglint
 */

'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    puglint: {
      // Default test with default `clock` config
      clock: {
        src: ['test/fixtures/**/*.jade']
      },

      // Custom config with the string in the options
      customConfigString: {
        options: {
          preset: 'jadelint'
        },
        src: ['test/fixtures/**/*.jade']
      },

      // Custom config with the object in the options
      customConfigObject: {
        options: {
          preset: {
            disallowIdLiterals: true
          }
        },
        src: ['test/fixtures/**/*.jade']
      },

      // RC file
      rcFile: {
        options: {
          puglintrc: 'test/fixtures/.pug-lintrc'
        },
        src: ['test/fixtures/**/*.jade']
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['puglint']);
};
