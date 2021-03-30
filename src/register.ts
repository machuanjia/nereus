/*
 * @Author: D.Y
 * @Date: 2021-03-29 16:11:49
 * @LastEditTime: 2021-03-30 11:53:11
 * @LastEditors: D.Y
 * @FilePath: /nereus/src/register.ts
 * @Description: 
 */
import { registerMicroApps, start,setDefaultMountApp } from 'qiankun';

registerMicroApps([
  {
    name: 'ploto', // app name registered
    entry: '//localhost:3100',
    container: '#ploto',
    activeRule: '/ploto',
  }
]);

start({
  sandbox:{experimentalStyleIsolation:true}
});
setDefaultMountApp('/ploto')