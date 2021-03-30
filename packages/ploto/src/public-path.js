/*
 * @Author: D.Y
 * @Date: 2021-03-29 16:44:09
 * @LastEditTime: 2021-03-30 10:59:25
 * @LastEditors: D.Y
 * @FilePath: /nereus/packages/ploto/src/public-path.js
 * @Description: 
 */
/* global webpack_public_path:writable */
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  // eslint-disable-next-line no-undef
  console.log(__webpack_public_path__)
}