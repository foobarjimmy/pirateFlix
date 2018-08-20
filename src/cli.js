#!/usr/bin/env node
'use strict';

module.exports = function () {
  require('babel-core/register');
  require('babel-polyfill');
  const del = require('del');
  const meow = require('meow');
  const chalk = require('chalk');
  const jsonfile = require('jsonfile');
  const app = require('./');
  const die = require('./helpers/die').default;
  const config = require('./helpers/config');
  const cli = meow(`
      Follow the steps by the wizard and
      make sure you have VLC installed.

      ${chalk.red.bold('Options:')}
      ${chalk.bold('--search')} Optional value to start the query.
      ${chalk.bold('--history')} Starts with the history of watched torrents.
      ${chalk.bold('--clear')} Clears history of watched torrents.

      ${chalk.red.bold('Usage:')}
      ${chalk.bold('pirateflix [options]')}
      `
      );

  const flags = Object.keys(cli.flags);
  const type = flags[0] || '';

  if (flags.length > 1) {
    die('Can\'t use more than one option at once.');
    return;
  }

  switch(type) {
    case 'history':
      const data = config.get();

      if (!data.history.length) {
        die('You don\'t have any data in your history yet.');
        return;
      }

      return app.show({
        choices: data.history,
      });

    case 'clear':
      config.deleteMovies();
      return;

    case 'search':
      app.applySearch({
        search: cli.flags.search,
      });
      return;

    case '':
      return app.query();

    default:
      return console.log('\n  Stream piratebay movies directly from CLI\n\n  Follow the steps by the wizard and\n  make sure you have VLC installed.\n\n  \u001b[31m\u001b[1mOptions:\u001b[22m\u001b[39m\n  \u001b[1m--search\u001b[22m Optional value to start the query.\n  \u001b[1m--history\u001b[22m Starts with the history of watched torrents.\n  \u001b[1m--clear\u001b[22m Clears history of watched torrents.\n\n  \u001b[31m\u001b[1mUsage:\u001b[22m\u001b[39m\n  \u001b[1mpirateflix [options]\u001b[22m\n');
  }
}();
