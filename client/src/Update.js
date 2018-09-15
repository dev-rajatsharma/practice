import React from 'react'
import { connect } from "react-redux";
import * as actions from './actions.js'
import { bindActionCreators } from "redux";

class Update extends React.Component{
    constructor(props) {
        super(props)
        let { dispatch } = this.props;
        this.state = {}
        this.actions = bindActionCreators(actions, dispatch);
    }

    render(){
        return(
            <main className='container'>
            Update
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
export default connect(mapStateToProps)(Update)
