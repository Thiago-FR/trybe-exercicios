import { createStore, combineReducers } from "redux";
import { loginReducer, cadastroReducer } from '../reducers';

const rootReducer = combineReducers({ loginReducer, cadastroReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;