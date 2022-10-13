import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middleware = applyMiddleware(thunk);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = devTools || compose;

const store = createStore(reducer, composeEnhancers(middleware));

export default store;
