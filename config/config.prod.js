'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1503034349194_328';
  config.vkittyDir="/home/www/webserver/docs";
  config.adbaitaiDir="/home/www/webserver/adbaitai/front-docs";
  config.preadbaitaiDir="/home/admin/docs/front-docs";

  return config;
};
