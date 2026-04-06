import { createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import bankReducer from "./bankReducer.js"

const mainStore = createStore(bankReducer, applyMiddleware(thunk))

export default mainStore