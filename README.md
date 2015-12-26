# grunt-puglint

> Grunt plugin for [pug-lint](https://github.com/pugjs/pug-lint) (formerly Jade).

[![Travis](https://img.shields.io/travis/mrmlnc/grunt-puglint.svg?style=flat-square)](https://travis-ci.org/mrmlnc/grunt-puglint)
[![NPM version](https://img.shields.io/npm/v/grunt-puglint.svg?style=flat-square)](https://www.npmjs.com/package/grunt-puglint)
[![devDependency Status](https://img.shields.io/david/mrmlnc/grunt-puglint.svg?style=flat-square)](https://david-dm.org/mrmlnc/grunt-puglint#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/mrmlnc/grunt-puglint.svg?style=flat-square)](https://david-dm.org/mrmlnc/grunt-puglint#info=devDependencies)

![image](https://cloud.githubusercontent.com/assets/7034281/12007446/c55156a8-ac15-11e5-9fda-4be1167c5709.png)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-puglint --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-puglint');
```

## Usage

If you need a clean config settings, then use the object(`preset: {}`) or config file (`puglintrc: '..'`).

```js
puglint: {
  taskName: {
    options: {
      // The name of the preset: `clock` (default) or `jadelint`
      preset: 'clock',
      // If preset is an object, the standard preset is not loaded
      preset: {
        disallowHtmlText: true,
        validateIndentation: 4
      }
      // The path to the configuration file
      puglintrc: 'test/fixtures/.pug-lintrc',
      // Override preset settings (default: `clock`)
      disallowHtmlText: true,
      validateIndentation: 4
    },
    src: ['test/fixtures/**/*.jade']
  }

  // Or short version
  options: {
    // ..
  },
  taskName: ['...']
}
```

## Configuration

Plugin can read [.pug-lintrc file](https://github.com/pugjs/pug-lint#configuration-file).

## Rules

[List of available rules](https://github.com/pugjs/pug-lint/blob/master/docs/rules.md).

## History

  * **v0.1.1** [2015-12-26] - Add `xo` to test section.
  * **v0.1.0** [2015-12-26] - Initial release.
