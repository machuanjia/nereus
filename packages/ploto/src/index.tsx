/*
 * @Author: D.Y
 * @Date: 2021-03-29 16:00:08
 * @LastEditTime: 2021-03-29 20:02:10
 * @LastEditors: D.Y
 * @FilePath: /nereus/packages/ploto/src/index.tsx
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';

function render(props:any) {
  const { container } = props;
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container ? container.querySelector('#root') : document.querySelector('#root')
  );
}
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  // console.log('react app bootstraped');
}

export async function mount(props:any) {
  console.log(props);
  props.onGlobalStateChange((state:any, prev:any) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('ploto:',state, prev);
  });

  // props.setGlobalState({
  //   token:'plot'
  // });
  
  render(props);
}

export async function unmount(props:any) {
  const { container } = props;
  // @ts-ignore
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
