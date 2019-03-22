import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducer";
import promiseMiddleware from "redux-promise-middleware";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});

// const middlewares = applyMiddleware(promiseMiddleware, logger);

const store = createStore(reducer, logger);

// export default store;

export default createStore(reducer, applyMiddleware(promiseMiddleware));
