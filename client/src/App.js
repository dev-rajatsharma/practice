import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Add from './Add.js'
import Update from './Update'

class App extends Component {


  render() {
    return (
      <main className="container-fluid">
      <h3 className='container-fluid bg-success text-center' >Header</h3>
        <Switch>
          <Route exact path='/employee/all' render={() => <Dashboard />} />
          <Route exact path='/employee/add' render={() => <Add />} />
          <Route exact path='/employee/edit' render={() => <Update />} />
          <Route exact path='/employee' render={() => <Redirect to='/employee/all' />} />
          <Route exact path='/' render={() => <Redirect to='/employee/all' />} />
        </Switch>
      </main>
    );
  }
}

export default App;
