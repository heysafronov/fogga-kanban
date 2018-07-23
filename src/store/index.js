import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import randomId from "../middlewares/randomId";

const enhancer = applyMiddleware(randomId);
const store = createStore(reducers, enhancer);
window.store = store;
//DEV
export default store;
