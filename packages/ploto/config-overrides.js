/*
 * @Author: D.Y
 * @Date: 2021-03-29 16:42:42
 * @LastEditTime: 2021-03-30 11:16:53
 * @LastEditors: D.Y
 * @FilePath: /nereus/packages/ploto/config-overrides.js
 * @Description: 
 */
const { name } = require('./package');
const { override, fixBabelImports, addLessLoader, addWebpackAlias, addWebpackModuleRule } = require('customize-cra')
const path = require('path');

module.exports = {
  webpack: override(
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
  // addWebpackModuleRule({
  //   test: /\.(png|jpe?g|gif|webp|woff2?|eot|ttf|otf)$/i,
  //   use: [
  //     {
  //       loader: 'url-loader',
  //       options: {},
  //     },
  //   ],
  // }),

  addWebpackModuleRule({
    test: /\.(png|jpe?g|gif|webp|woff2?|eot|ttf|otf|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'ploto/static/[name].[hash:8].[ext]',
          publicPath:'http://localhost:3100'
        }
      },
    ],
  }),
  // addWebpackAlias({      
      // "@": path.resolve(__dirname, "src"),        
  // })
     (config, env) => {
      const copyConfig = { ...config };
      // console.log('env', env);
      copyConfig.output.library = `${name}-[name]`;
      copyConfig.output.libraryTarget = 'umd';
      copyConfig.output.jsonpFunction = `webpackJsonp_${name}`;
      return config;
    }
  ),
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
  }};




//   const { merge } = require('webpack-merge');
// const {
//   override,
//   addWebpackPlugin,
//   fixBabelImports,
//   addBabelPlugin,
//   addLessLoader,
//   useEslintRc,
// } = require('customize-cra');
// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

// module.exports = override(
//   // Day.js 替换 momentjs 来大幅减小打包大小
//   addWebpackPlugin(new AntdDayjsWebpackPlugin()),
//   // 配置常用的按需加载
//   fixBabelImports('antd', { libraryDirectory: 'es', style: true }),
//   fixBabelImports('antd-mobile', { libraryDirectory: 'es', style: true }),
//   fixBabelImports('lodash', { libraryDirectory: '', camel2DashComponentName: false }),
//   // 编译热更新
//   addBabelPlugin('react-hot-loader/babel'),
//   // 添加 less-loader
//   addLessLoader({
//     lessOptions: {
//       javascriptEnabled: true,
//       // 全局 less 变量，会覆盖项目内同名变量，可用于主题定制
//       modifyVars: {
//         '@ra-p': '#1890ff', // 全局主色
//         '@ra-s': '#52c41a', // 成功色
//         '@ra-w': '#faad14', // 警告色
//         '@ra-e': '#f5222d', // 错误色
//         '@ra-fs': '16px', // 主字号
//         '@ra-c': 'rgba(0, 0, 0, 0.85)', // 主文本色
//         '@ra-cs': 'rgba(0, 0, 0, .45)', // 次文本色
//         '@ra-dc': 'rgba(0, 0, 0, .25)', // 失效色
//         '@ra-dcb': 'rgba(0, 0, 0, .05)', // 失效背景色
//         '@ra-bc': '#eee', // 边框色
//         '@ra-bcd': '#ccc', // 边框色-深色
//         '@ra-b': '#fff', // 背景色
//       },
//     },
//   }),
//   // 允许二次配置 eslint
//   useEslintRc(),
//   // 自定义配置
//   (config) => {
//     if (process.env.NODE_ENV === 'production') {
//       // 图片编译后文件名统一不可读，允许在开发环境中引用中文名图片
//       // config.module.rules[2].oneOf[0].options.limit = 0;
//       // config.module.rules[2].oneOf[0].options.name = 'static/media/[hash].[ext]';

//       // 全局删除 console
//       if (process.env.GENERATE_SOURCEMAP === 'false') {
//         config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
//       }
//     } else {
//       // 开发模式下的配置
//       config = merge(config, { resolve: { alias: { 'react-dom': '@hot-loader/react-dom' } } });
//     }

//     // 打印运行配置
//     // const fs = require('fs');
//     // fs.writeFileSync(`config-${process.env.NODE_ENV}.json`, JSON.stringify(config, null, 2));

//     // 返回更改后的配置
//     return config;
//   }
// );