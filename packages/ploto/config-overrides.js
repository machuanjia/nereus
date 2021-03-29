/*
 * @Author: D.Y
 * @Date: 2021-03-29 16:42:42
 * @LastEditTime: 2021-03-29 16:59:47
 * @LastEditors: D.Y
 * @FilePath: /nereus/packages/ploto/config-overrides.js
 * @Description: 
 */
const { name } = require('./package');

module.exports = {
  webpack: function override(config, env) {
    const copyConfig = { ...config };
    // console.log('env', env);
    copyConfig.output.library = `${name}-[name]`;
    copyConfig.output.libraryTarget = 'umd';
    copyConfig.output.jsonpFunction = `webpackJsonp_${name}`;
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};
