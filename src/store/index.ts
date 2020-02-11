import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import sagas from "./sagas";
import initDefaultRootState from "./root-state";

const configureStore = (state: any) => {
  const _sagaMiddleware = sagaMiddleware();
  const middleware = [_sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleware);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, state, composedEnhancers);
  _sagaMiddleware.run(sagas);
  return store;
};
const initialState = initDefaultRootState();
const store = configureStore(initialState);
export default store;
