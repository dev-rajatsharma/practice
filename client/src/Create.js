import React from 'react'
import { connect } from "react-redux";
import * as actions from './actions.js'
import { bindActionCreators } from "redux";

class Create extends React.Component {
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

    render() {
        return (
            <main className='container'>
                {this.createRecord()}
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
export default connect(mapStateToProps)(Create)
