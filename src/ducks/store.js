import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducer";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});

// const middlewares = applyMiddleware(applyMiddleWare, logger);
// const store = createStore(reducer, middlewares);

// export default store;

// import { createStore, applyMiddleware, combineReducers } from "redux";
// import reducer from "./userReducer";
// import postReducer from "./postReducer";
// import promiseMiddleware from "redux-promise-middleware";

// const reducers = combineReducers({ reducer, postReducer });

// export default createStore(reducers, applyMiddleware(promiseMiddleware));
