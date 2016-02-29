#!/usr/bin/env node

require('dotenv').load();

module.exports = (function() {

    var GithubWrapper = require('../lib/GithubWrapper');
    var Commander = require('../lib/CheckFourEyesCommander');

    var githubWrapper = new GithubWrapper({
        token: process.env.GITHUB_API_TOKEN,
    });

    var commander = new Commander(githubWrapper);
    commander.start();

}());
