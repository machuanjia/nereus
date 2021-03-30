import React, {lazy} from 'react';
import logo from './logo.svg';
import './App.less';
import { Switch,Route,Redirect } from 'react-router-dom';
import Login from './Login'
import About from './About'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <br/>
      <Switch>
			<Route exact path='/' component={Login}/>
			<Route path='/about' component={About}/>
			<Redirect to='/' />
		</Switch>   
    </div>
  );
}

export default App;
