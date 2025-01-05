import { createStore } from "redux";
import rootReducer from "../reducer/index.jsx"
const store = createStore(rootReducer)
console.log(store.getState());

export default store