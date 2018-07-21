import { createStore } from "redux";
import reducers from "../reducers";

const store = createStore(reducers);
window.store = store;
//DEV
export default store;
