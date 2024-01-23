import { combineReducers } from "redux";
import reducer from "./counter";

const rootreducer = combineReducers({
  crud: reducer
})

export default rootreducer