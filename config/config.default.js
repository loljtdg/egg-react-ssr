/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603337995479_9225';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    // 定义映射的文件后缀名
    // 此处我们定义为.njk，那么我们的模板都需要以.njk结束，
    // 这样该类型的文件才会被我们的模板插件进行处理
    mapping: {
      root: [
        path.join(appInfo.baseDir, 'app/view')
      ].join(','),
      '.nj': 'nunjucks',
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
