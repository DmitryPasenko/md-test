import { createStore, applyMiddleware, compose } from 'redux'
import createReducer from './reducers';
import { fromJS } from 'immutable';


const initialState = {};
const enhancers = [];
const middleware = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default createStore(
  createReducer(),
  fromJS(initialState),
  composedEnhancers
)
