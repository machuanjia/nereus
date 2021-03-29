/*
 * @Author: D.Y
 * @Date: 2021-03-29 17:09:22
 * @LastEditTime: 2021-03-29 17:15:18
 * @LastEditors: D.Y
 * @FilePath: /nereus/src/store.ts
 * @Description: 
 */
import { initGlobalState, MicroAppStateActions } from 'qiankun';

const appState = {
  version:'1.0.0',
  token:''
};
// 初始化 state
export const actions: MicroAppStateActions = initGlobalState(appState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('main:',state, prev);
});
// actions.setGlobalState(appState);
// actions.offGlobalStateChange();
