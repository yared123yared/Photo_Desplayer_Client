import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './Components/SignIn';
import SignUp from './Components/SignUp';

const routing = (
  <BrowserRouter>

    <div>

      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/home" component={App} />

    </div>














  </BrowserRouter>









);
ReactDOM.render(routing, document.getElementById('root'))