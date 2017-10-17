#!/usr/bin/env node

/**
 * This package was developed based on the [Create React App](https://github.com/facebookincubator/create-react-app).
 */

'use strict';

var chalk = require('chalk');

var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = semver[0];

if (major < 4) {
  console.error(
    chalk.red(
      'You are running Node ' +
        currentNodeVersion +
        '.\n' +
        'Polestar Boilerplate requires Node 4 or higher. \n' +
        'Please update your version of Node.'
    )
  );
  process.exit(1);
}

require('./createReactPolestarApp');
