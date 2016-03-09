'use strict';

var path = require('path');
var chalk = require('chalk');
var table = require('text-table');
var cwd = process.cwd();

/**
 * Formatting string for the table
 *
 * @param {Object} item
 */
var formatRow = function(item) {
  // Drop newline symbol in error string
  item.msg = (Array.isArray(item.msg) ? item.msg.join(' ') : item.msg).replace('\n', '');
  // Using zero instead of undefined
  item.column = (item.column === undefined) ? 0 : item.column;
  // Drop `PUG:LINT_` prefix in error code
  item.code = chalk.grey(item.code.replace(/(PUG:|LINT_)/g, ''));
  // Formatting output
  var position = chalk.grey(item.line + ':' + item.column);
  return ['', position, chalk.red('error'), item.msg, item.code];
};

exports.formatOutput = function(block) {
  var blockName;
  var output = [];

  // If the passed block errors is an array
  if (block.length) {
    blockName = block[0].filename;
    block.forEach(function(item) {
      output.push(formatRow(item));
    });
  } else {
    blockName = block.filename;
    output.push(formatRow(block));
  }

  blockName = '\n' + path.join(cwd, blockName);

  console.log(chalk.underline(blockName));
  console.log(table(output));
};
