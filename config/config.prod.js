'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1503034349194_328';
  config.vkittyDir="/home/www/webserver/docs";
  config.adbaitaiDir="/home/www/webserver/adbaitai/front-docs";
  config.frontdocs_adbaitai_com="/home/admin/docs/front-docs";
  config.frontdocs_adbaitai_com_docs="/home/admin/docs/baitai-docs";

  return config;
};
