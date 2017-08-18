'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1503034349194_328';
  config.gitDir="/Users/fudongguang/git/aaa/crm-demo";
  config.security = {
    csrf: {
      enable: false
    }
  };

  return config;
};

