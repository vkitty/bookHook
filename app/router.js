'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.verb('/git/commit', 'git.commit');
};
