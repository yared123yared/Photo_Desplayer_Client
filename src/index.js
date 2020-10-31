import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Redirect, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Login from './Components/SignIn';
import SignUp from './Components/SignUp';

const routing = (
  <Router>
    <div>
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/home" component={App} />
      <Redirect to='/login' />
    </div>










  </Router>









);
ReactDOM.render(routing, document.getElementById('root'))