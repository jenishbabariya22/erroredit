import { createStore } from "redux";
import rootreducer from "./reduxer";

const store = createStore(rootreducer)

export default store