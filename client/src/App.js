import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Dashboard from './Dashboard'
import EditRecord from './EditRecord'
const DashboardWithRouter = withRouter(Dashboard)
const EditRecordWithRouter = withRouter(EditRecord)
class App extends Component {


  render() {
    return (
      <main className="container-fluid">
        <h3 className='container-fluid bg-success text-center' >Zetwerk </h3>
        <Switch>
          <Route exact path='/employee/all' render={() => <DashboardWithRouter />} />
          <Route exact path='/employee/edit' render={() => <EditRecordWithRouter />} />
          <Route exact path='/employee' render={() => <Redirect to='/employee/all' />} />
          <Route exact path='/' render={() => <Redirect to='/employee/all' />} />
        </Switch>
      </main>
    );
  }
}

export default App;
