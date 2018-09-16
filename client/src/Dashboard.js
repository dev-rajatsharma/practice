import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import * as actions from './actions.js'
import { bindActionCreators } from "redux";
import './dashboard.css'
import {getSearchResults} from './common'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    let { dispatch } = this.props;
    this.state = { user: '' }
    this.actions = bindActionCreators(actions, dispatch);
  }
  componentWillMount = () => {
    this.actions.getData()
  }
  renderDashboard = () => {
    let { data,searchText } = this.props.reducer
    let searchColumns = ['name','salary,skills']
    let searchData = searchText ? getSearchResults(data,searchText, searchColumns ): data
    return (
      <div className='container-fluid data-table'>
        <div className='row '>
          <div className='col-md-12 align-center'>Employee Details</div>
        </div>
        <div className='row field-names data-table'>
          <div className='col-md-2'>Name</div>
          <div className='col-md-2'>Date Of Birth</div>
          <div className='col-md-2'>Salary</div>
          <div className='col-md-2'>Skills</div>
          <div className='col-md-2'>Edit</div>
          <div className='col-md-2'>Delete</div>
        </div>
        {searchData.map((item, index) => {
          return (
            <div className='row data-rows data-table'>
              <div className='col-md-2'>{item.name}</div>
              <div className='col-md-2'>{new Date(item.dateOfBirth).toLocaleDateString()}</div>
              <div className='col-md-2'>{item.salary}</div>
              <div className='col-md-2'>{item.skills}</div>
              <div className='col-md-2'>{this.renderEditButton(item._id)}</div>
              <div className='col-md-2'>{this.renderDeleteButton(item._id)}</div>
            </div>
          )
        })}
      </div>
    )
  }
  renderDeleteButton = (id) => {
    return (
      <button type='button' className="btn btn-danger" onClick={(e) => this.handleDelete(e, id)}><i className="fa fa-trash" style={{margin:'0 5px'}}></i> Delete</button>
      )
  }
  handleDelete = (e, id) => {
    let decision = window.confirm('Are you sure you want to delete ? ')
    if (decision) {
      this.actions.deleteRecord(id)
    }
  }
  renderEditButton = (id) => {
    return (
      <button type='button' className='btn btn-success' onClick={(e) => this.props.history.push(`/employee/edit?id=${id}`)}><i className="fa fa-edit" style={{margin:'0 5px'}} ></i>Edit</button>
    )
  }
  renderSearchRow() {
    let { searchText } = this.props.reducer;
    return (
      <div style={{ display: 'flex', marginBottom:'5px' }}>
        <div style={{ flexGrow: 1 }}>
          <div style={{ width: 300 }}>
            <input type="text" value={searchText} placeholder="Search..." style={{ textAlign: "left" }}
              onChange={(e) => this.actions.setValue({ 'searchText': e.target.value })} />
          </div>
        </div>
        <button type='button' className='btn btn-warning float-right' onClick={() => this.props.history.push('/employee/edit?id=new')}> + Add record</button>

      </div>
    )
  }

  render() {
    return (
      <main className="container">
        {this.renderSearchRow()}
        {this.renderDashboard()}
      </main>
    );
  }
}
function mapStateToProps(state) {
  const { reducer } = state;
  return {
    reducer
  };
}
export default connect(mapStateToProps)(Dashboard)
