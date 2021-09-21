import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

function dummyReducer (state = {}, action) {
  return state;
}

const reducer = combineReducers({ dummyReducer })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store
