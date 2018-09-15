import axios from 'axios'

export function setValue(data) {
    return {
        type: 'SET_VALUE',
        payload: data
    }
}
export function toggleState(data) {
    return {
        type: 'TOGGLE_STATE',
        payload: data
    }
}
export function getData(data) {
    return {
        type: 'GET_DATA',
        payload:
            axios.get(data.url)
                .then(res => res)
    }

}
