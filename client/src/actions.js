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
export const getData = (data) => {
    return {
        type: 'GET_DATA',
        payload:
            axios.get(data.url)
                .then(res => res)
    }
}
export const saveData = (data) => {
    return {
        type: 'SAVE_DATA',
        payload:
            axios.post(data.url, data.record)
                .then(res => console.log(res.data))
    }
}
