import { createReducer } from 'redux-create-reducer'

const initialState = {
    data:[],
    record:{
        "name": ' ',
        "dateOfBirth": ' ',
        "salary": ' ',
        "skills": ''
    },
    searchText:''
}

export default createReducer(initialState, {
    
    ['SET_VALUE'](state, action) {
        return {
            ...state,
            ...action.payload
        }

    },
    ["TOGGLE_STATE"](state, action) {
        return {
            ...state,
            [action.payload]: !state[action.payload]
        };
    },
    ['GET_DATA' + '_FULFILLED'](state, action) {
        let data = action.payload.data
        return {
            ...state,
            data
        }
    },
    ['GET_RECORD' + '_FULFILLED'](state, action) {
        let record = action.payload.data
        return {
            ...state,
            record
        }
    },

    
})