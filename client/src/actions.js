import axios from 'axios'

export const setValue = (data) => {
    return {
        type: 'SET_VALUE',
        payload: data
    }
}
export const toggleState = (data) => {
    return {
        type: 'TOGGLE_STATE',
        payload: data
    }
}
export const getData = () => {
    return {
        type: 'GET_DATA',
        payload:
            axios.get('/employee/all')
                .then(res => res)
    }
}
export const getRecord = (id) => {
    return {
        type: 'GET_RECORD',
        payload:
            axios.get(`/employee?id=${id}`)
                .then(res => res)
    }
}
export const addNewRecord = (record, history) => {
    return {
        type: 'SAVE_NEW_RECORD',
        payload:
            axios.post(`/employee/add` , record)
                .then(res => history.push('/employee/all'))
    }
}
export const updateRecord = (id, record, history) => {
    return {
        type: 'UPDATE_RECORD',
        payload:
            axios.post(`/employee/update?id=${id}` , record)
                .then(res => history.push('/employee/all'))
    }
}
export const deleteRecord = (id) => {
    return dispatch =>
        dispatch({
            type: 'DELETE-RECORD',
            payload:
                axios.get(`/employee/delete?id=${id}`)
                    .then(res => dispatch(getData()))
        })
}
