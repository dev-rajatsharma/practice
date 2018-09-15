import React from 'react'
import { connect } from "react-redux";
import * as actions from './actions.js'
import { bindActionCreators } from "redux";
import './add.css'

class Add extends React.Component {
    constructor(props) {
        super(props)
        let { dispatch } = this.props;
        this.state = {}
        this.actions = bindActionCreators(actions, dispatch);
    }
    createRecord = () => {
        let record = {
            id: ' ',
            name: ' ',
            dateOfBirth: ' ',
            salary: ' ',
            skills: ' '
        }
        return record
    }
    renderSkills = (skills) => {
        skills = skills ? skills : ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9', 'skill10']
        return (
            skills.map((item, index) => {
                return <td><label htmlFor={item}>{item}</label>
                    <input type='checkbox' id={item} name={`skill${index}`} value={item} onchange={(e) => this.handleCheckbox(e)} />
                </td>
            })
        )
    }
    handleChange = (e) => {
        let { data } = this.props.reducer
        let value = e.target.value
        let name = e.target.name
        data[name] = value
        this.actions.setValue(data)
    }
    handleCheckbox = (e) => {
        let { data } = this.props.reducer
        if (e.target.isChecked) {
            // data.skills
        }

    }
    handleSubmit = (e) => {
        let { data } = this.props.reducer
        e.preventDefault()
        let dummyData = {
            'id': 2,
            'name': 'frg',
            'dateOfBirth': '2017-2-3',
            'salary': 400,
            'skills': ['e', 'g', 't']
        }
        this.actions.saveData({ 'url': '/employee/add', 'record': dummyData })
    }
    renderForm = () => {
        let { data } = this.props.reducer
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <table>
                    <tbody>
                        <tr style={{ margin: '5px' }}><td>Employee Id</td><td>{data.id}</td></tr>
                        <tr style={{ margin: '5px' }}><td>Name</td><td><input name='name' value={data.name} onChange={(e) => this.handleChange(e)} /></td></tr>
                        <tr style={{ margin: '5px' }}><td>Date of Birth</td><td><input type='date' name='dateOfBirth' value={data.dateOfBirth} onChange={(e) => this.handleChange(e)} /></td></tr>
                        <tr style={{ margin: '5px' }}><td>Salary</td><td><input type='number' name='salary' value={data.salary} onChange={(e) => this.handleChange(e)} /></td></tr>
                        <tr style={{ margin: '5px' }}><td>Skills</td>{this.renderSkills(data.skills)}</tr>
                    </tbody>
                </table>
                <input type='submit' />
            </form>
        )
    }

    render() {
        return (
            <main className='container'>
                {this.renderForm()}
            </main>
        )
    }
}
function mapStateToProps(state) {
    const { reducer } = state;
    return {
        reducer
    };
}
export default connect(mapStateToProps)(Add)
