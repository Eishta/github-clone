import React, { Component } from 'react';
import Page from './page';
import Details from '../components/Details';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
            <Router>
              <Switch>
                <Route path='/' exact component={Page} />
                <Route path='/users/:userName' exact component={Details} />
              </Switch>
              <Redirect to='/' />
            </Router>
          </div>
    );
  }
}

export default App;