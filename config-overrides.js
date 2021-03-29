/*
 * @Author: D.Y
 * @Date: 2021-03-29 17:41:10
 * @LastEditTime: 2021-03-29 19:12:53
 * @LastEditors: D.Y
 * @FilePath: /nereus/config-overrides.js
 * @Description: 
 */
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }),
    addLessLoader({
        lessOptions: {
           javascriptEnabled: true,
           localIdentName: '[local]--[hash:base64:5]'
        }
    }),
    // addWebpackAlias({      
        // "@": path.resolve(__dirname, "src"),        
    // })
);