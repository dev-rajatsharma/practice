import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import * as actions from './actions.js'
import { bindActionCreators } from "redux";
import './dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    let { dispatch } = this.props;
    this.state = { user: '' }
    this.actions = bindActionCreators(actions, dispatch);
  }
  componentWillMount = () => {
    this.actions.getData({ 'url': '/employee/all' })
  }

  render() {
    let { data } = this.props.reducer
    // data = data.map((item,index)=>{
    //   item['edit'] = 'yes'
    //   item['delete'] = 'yes'
    // })
    return (
      <main className="container">
      <button type='btn btn-warning float-right' onClick={()=>window.location.href='/employee/add'}>Add record</button>
        <ReactTable data={data}
          columns={[
            {
              Header: "Employee Table",
              columns: [
                {
                  Header: "Id",
                  accessor: 'id'
                },
                {
                  Header: "Name",
                  accessor: 'name'
                },
                {
                  Header: "Date of Birth",
                  accessor: 'dateOfBirth',
                  // accessor: d => d.lastName
                },
                {
                  Header: "Salary",
                  accessor: 'salary'
                },
                {
                  Header: "Skills",
                  accessor: 'skills'
                },
                {
                  Header: "Edit",
                  accessor: "edit"
                },
                {
                  Header: "Delete",
                  accessor: "delete"
                },
              ]
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
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
