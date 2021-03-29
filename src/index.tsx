/*
 * @Author: D.Y
 * @Date: 2021-03-29 15:48:55
 * @LastEditTime: 2021-03-29 17:09:49
 * @LastEditors: D.Y
 * @FilePath: /nereus/src/index.tsx
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './register'
import './store'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
