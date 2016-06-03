/*
 * grunt-puglint
 * https://github.com/mrmlnc/grunt-puglint
 */

'use strict';

var PugLint = require('pug-lint');
var linter = new PugLint();
var formatter = require('../lib/formatter');

module.exports = function(grunt) {
  grunt.registerMultiTask('puglint', 'Grunt plugin for pug-lint', function() {
    var done = this.async();
    var options = this.options({});

    if (typeof options.config === 'object') {
      options = options.config;
    }

    linter.configure(options);

    if (this.filesSrc.length === 0) {
      done();
      return;
    }

    var errors = [];
    var failed = false;
    this.filesSrc.forEach(function(filepath) {
      errors = linter.checkFile(filepath);

      if (errors.length) {
        failed = true;
        formatter.formatOutput(errors);
      }
    });

    done(!failed);
  });
};
