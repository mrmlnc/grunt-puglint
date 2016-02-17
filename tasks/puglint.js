/*
 * grunt-puglint
 * https://github.com/mrmlnc/grunt-puglint
 */

'use strict';

var PugLint = require('pug-lint');
var linter = new PugLint();
var formatter = require('../lib/formatter');

module.exports = function(grunt) {
  grunt.registerMultiTask('puglint', 'Grunt plugin for pug-lint', function () {
    var done = this.async();
    var options = this.options({
      preset: 'clock'
    });

    if (typeof options.preset === 'object') {
      options = options.preset;
    }

    var pugLintRc = options.puglintrc;
    if (pugLintRc) {
      if (grunt.file.exists(pugLintRc)) {
        options = grunt.file.readJSON(pugLintRc);
      } else {
        grunt.log.error('Configuration file not found. Used a standard config: `clock`.');
      }
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
