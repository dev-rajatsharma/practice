import {createStore, combineReducers, applyMiddleware} from 'redux'
import reducer from './reducer.js'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

export default createStore(
    combineReducers({
        reducer
    }),
    {},
    applyMiddleware(thunk, promise())
)