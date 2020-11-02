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
      <Route exact path="/home" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />

      {/* <Route exact path="/home/:email" component={App} /> */}

      {/* <Route path="/home" render={() => <div>Home</div>} /> */}

      {/* render = {props => <PageStart {...props} key={this.props.location.key} />} /> */}




    </div>














  </BrowserRouter>









);
ReactDOM.render(routing, document.getElementById('root'))