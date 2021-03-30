import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './index';

const middleWares = [logger];

export default createStore(rootReducer, applyMiddleware(...middleWares));
