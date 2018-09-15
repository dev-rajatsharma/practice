import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Create from './Create'
import Update from './Update'
import axios from 'axios'

class App extends Component {


  render() {
    return (
      <main className="container-fluid">
        <Switch>
          <Route exact path='/employee/all' render={() => <Dashboard />} />
          <Route exact path='/employee/create' render={() => <Create />} />
          <Route exact path='/employee/edit' render={() => <Update.js />} />
          <Route exact path='/employee' render={() => <Redirect to='/employee/all' />} />
          <Route exact path='/' render={() => <Redirect to='/employee/all' />} />
        </Switch>
      </main>
    );
  }
}

export default App;
