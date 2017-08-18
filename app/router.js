'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/git/commit', 'git.commit');
};
