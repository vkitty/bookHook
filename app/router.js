'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/git/vkitty', 'git.vkitty');
  app.post('/git/adbaitai', 'git.adbaitai');
  app.post('/git/frontdocs_adbaitai_com', 'git.frontdocs_adbaitai_com');
};
