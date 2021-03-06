import React from 'react'
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'
import Component from '../../component'

export const render = () => (
  <Router>
    <div className="body-wrapper">
      <div className="body">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/component">Component</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/component">
            <h1>Component</h1>
            <Component labelText="A simple component" inputProps={{ id: 'txtInput-simple-component', placeholder: 'Enter some texts' }} />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
)

export default render
