import {combineReducers, createStore} from "redux";
import {mainPageReducer} from "./mainPageReducer";


const reducers = combineReducers({
  mainPage: mainPageReducer,
});
const reduxStore = createStore(reducers);


export default reduxStore;