/*
 * @Author: D.Y
 * @Date: 2021-03-29 15:48:55
 * @LastEditTime: 2021-03-29 17:19:49
 * @LastEditors: D.Y
 * @FilePath: /nereus/src/App.tsx
 * @Description: 
 */
import React from 'react';
import './App.css';
import { actions } from './store'

function App() {
  const goto = (title:string, href:string)=>{
    window.history.pushState({}, title, href);
  }

  const login = ()=>{
    actions.setGlobalState({
      token:'123456'
    })
  }

  return (
    <div className="App">
      <button onClick={() => goto('ploto', '/ploto')}>ploto</button>
      <button onClick={() => login()}>login</button>
    </div>
  );
}

export default App;
