import { createStore } from "redux"
import bankReducer from "./bankReducer.js"

const mainStore = createStore(bankReducer)

export default mainStore