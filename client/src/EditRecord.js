import React from 'react'
import { connect } from "react-redux";
import * as actions from './actions.js'
import { bindActionCreators } from "redux";
import { getURL } from './common'
import './editrecord.css'

class Add extends React.Component {
    constructor(props) {
        super(props)
        let { dispatch } = this.props;
        this.state = {}
        this.actions = bindActionCreators(actions, dispatch);
    }
    componentWillMount = () => {
        let id = getURL().id
        if (id !== 'new') {
            this.actions.getRecord(id)
        }
    }
    componentWillUnmount = () => {
        this.actions.setValue({
            "record": {
                "name": ' ',
                "dateOfBirth": ' ',
                "salary": ' ',
                "skills": ' '
            }
        })
    }

    renderSkills = (skills = '') => {
        let totalSkills = ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9', 'skill10']
        let skillsArray = skills.split(',')
        return (
            totalSkills.map((item, index) => {
                return <span><label htmlFor={item}>{item}</label>
                    <input type='checkbox' checked={skillsArray.includes(item)} id={item} name={`skill${index}`} value={item} onChange={(e) => this.handleCheckbox(e)} />
                </span>
            })
        )
    }
    handleChange = (e) => {
        let { record } = this.props.reducer
        let value = e.target.value
        let name = e.target.name
        if (name === 'salary') {
            if (!isNaN(value)) {
                record[name] = value
            }
        } else {
            record[name] = value
        }
        this.actions.setValue(record)
    }
    handleCheckbox = (e) => {
        // let totalSkills = ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6', 'skill7', 'skill8', 'skill9', 'skill10']
        let value = e.target.value
        let { record } = this.props.reducer
        record.skills = record.skills.split(',')
        if (record.skills.includes(value)) {
            record.skills = record.skills.filter(e => e !== value)
        } else {
            console.log(record.skills)
            record.skills.push(value)
        }
        record.skills = record.skills.join(',')

        this.actions.setValue(record)

    }
    handleSubmit = (e) => {
        let { record } = this.props.reducer
        e.preventDefault()
        record.skills = record.skills.split(',')
        let id = getURL().id
        if (id === 'new') {
            this.actions.addNewRecord(record, this.props.history)
        } else {
            this.actions.updateRecord(id, record, this.props.history)
        }
    }
    renderForm = () => {
        let { record } = this.props.reducer
        console.log(record.skills)
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <table style={{width:'100%', marginBottom:'10px'}}>
                    <tbody>
                        <tr style={{ margin: '5px' }}><td>Name</td><td><input name='name' value={record.name}
                            onChange={(e) => this.handleChange(e)} required /></td></tr>
                        <tr style={{ margin: '5px' }}><td>Date of Birth</td><td><input type='date' name='dateOfBirth'
                            value={record.dateOfBirth.substring(0, 10)}
                            min='2018-09-16'
                            onChange={(e) => this.handleChange(e)} required /></td></tr>
                        <tr style={{ margin: '5px' }}><td>Salary</td><td><input type='number' name='salary'
                            value={record.salary}
                            min={0}
                            onChange={(e) => this.handleChange(e)} required /></td></tr>
                        <tr style={{ margin: '5px' }}><td>Skills</td><td>{this.renderSkills(record.skills)}</td></tr>
                    </tbody>
                </table>
                <input type='submit' className='btn btn-primary' style={{float:'right'}} />
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
