'use strict';

const test = require('ava');
const exec = require('child_process').exec;

test.cb('Default test with default `clock` config', function(t) {
  exec('grunt puglint:clock', function(err, stdout) {
    var isOneError = /ID literals must/.test(stdout.toString());
    var isTwoError = /REQUIRECLASSLITERALSBEFOREIDLITERALS/.test(stdout.toString());

    t.same(isOneError && isTwoError, true);
    t.end();
  });
});

test.cb('Custom config with the string in the options', function(t) {
  exec('grunt puglint:customConfigString', function(err, stdout) {
    var isOneError = /DISALLOWSPECIFICATTRIBUTES/.test(stdout.toString());

    t.same(isOneError, true);
    t.end();
  });
});

test.cb('Custom config with the object in the options', function(t) {
  exec('grunt puglint:customConfigObject', function(err, stdout) {
    var isOneError = /DISALLOWIDLITERALS/.test(stdout.toString());

    t.same(isOneError, true);
    t.end();
  });
});

test.cb('Array messages', function(t) {
  exec('grunt puglint:arrayMessages', function(err, stdout) {
    var isOneError = /Illegal space after opening bracket\s+DISALLOWSPACESINSIDEATTRIBUTEBRACKETS/.test(stdout.toString());
    var isTwoError = /Illegal space before closing bracket\s+DISALLOWSPACESINSIDEATTRIBUTEBRACKETS/.test(stdout.toString());

    t.same(isOneError && isTwoError, true);
    t.end();
  });
});

test.cb('RC file', function(t) {
  exec('grunt puglint:rcFile', function(err, stdout) {
    var isOneError = /REQUIRECLASSLITERALSBEFOREIDLITERALS/.test(stdout.toString());

    t.same(isOneError, true);
    t.end();
  });
});
