'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/git/vkitty', 'git.vkitty');
  app.post('/git/adbaitai', 'git.adbaitai');
};
