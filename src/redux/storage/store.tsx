import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Reducers from '../reducers/index';

const store = createStore(
  Reducers as any,
  composeWithDevTools(applyMiddleware())
);

export default store;
