'use strict';

var assert = require('assert');
var exec = require('child_process').exec;

it('Should work without preferences', function(done) {
  exec('grunt puglint:default', function(err, stdout) {
    assert.equal(/Done\./.test(stdout), true);
    done();
  });
});

it('Should work with extends from preset', function(done) {
  exec('grunt puglint:extendsClock', function(err, stdout) {
    var isOneError = /DISALLOWIDLITERALS/.test(stdout);
    var isTwoError = /REQUIRECLASSLITERALSBEFOREIDLI/.test(stdout);
    var isThreeError = /Missing line feed at file end/.test(stdout);

    assert.equal(isOneError && isTwoError && isThreeError, true);
    done();
  });
});

it('Should work with extends from path', function(done) {
  exec('grunt puglint:extendsPath', function(err, stdout) {
    assert.equal(/REQUIRECLASSLITERALSBEFOREIDLITERALS/.test(stdout), true);
    done();
  });
});

it('Should work with the object in the option', function(done) {
  exec('grunt puglint:customConfigObject', function(err, stdout) {
    assert.equal(/DISALLOWIDLITERALS/.test(stdout), true);
    done();
  });
});

it('Should work with array messages', function(done) {
  exec('grunt puglint:arrayMessages', function(err, stdout) {
    var isOneError = /Illegal space after opening bracket/.test(stdout);
    var isTwoError = /Illegal space before closing bracket/.test(stdout);

    assert.equal(isOneError && isTwoError, true);
    done();
  });
});
