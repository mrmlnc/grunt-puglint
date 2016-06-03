# grunt-puglint

> Grunt plugin for [pug-lint](https://github.com/pugjs/pug-lint) (formerly Jade).

[![Travis](https://img.shields.io/travis/mrmlnc/grunt-puglint.svg?style=flat-square)](https://travis-ci.org/mrmlnc/grunt-puglint)
[![NPM version](https://img.shields.io/npm/v/grunt-puglint.svg?style=flat-square)](https://www.npmjs.com/package/grunt-puglint)
[![devDependency Status](https://img.shields.io/david/mrmlnc/grunt-puglint.svg?style=flat-square)](https://david-dm.org/mrmlnc/grunt-puglint#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/mrmlnc/grunt-puglint.svg?style=flat-square)](https://david-dm.org/mrmlnc/grunt-puglint#info=devDependencies)

![image](https://cloud.githubusercontent.com/assets/7034281/12007446/c55156a8-ac15-11e5-9fda-4be1167c5709.png)

## Getting Started
This plugin requires Grunt `~1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-puglint --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-puglint');
```

## Usage

To configure validator, use the property `config`.

```js
puglint: {
  taskName: {
    options: {
      // Use preset: npm i -D pug-lint-config-clock
      config: {
        extends: 'clock'
      },
      // Or config
      config: {
        disallowHtmlText: true,
        validateIndentation: 4
      }
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

## Changelog

See the [Releases section of our GitHub project](https://github.com/mrmlnc/grunt-puglint/releases) for changelogs for each release version.

## License

This software is released under the terms of the MIT license.
