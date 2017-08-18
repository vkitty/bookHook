'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/git/commit', 'git.commit');
};
