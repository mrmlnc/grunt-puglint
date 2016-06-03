'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    puglint: {
      default: {
        src: ['test/fixtures/**/*.jade']
      },

      extendsClock: {
        options: {
          extends: 'clock'
        },
        src: ['test/fixtures/**/*.jade']
      },

      extendsPath: {
        options: {
          extends: './test/fixtures/.pug-lintrc'
        },
        src: ['test/fixtures/**/*.jade']
      },

      customConfigObject: {
        options: {
          config: {
            disallowIdLiterals: true
          }
        },
        src: ['test/fixtures/**/*.jade']
      },

      arrayMessages: {
        options: {
          config: {
            disallowSpacesInsideAttributeBrackets: true
          }
        },
        src: ['test/fixtures/**/*.jade']
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['puglint']);
};
