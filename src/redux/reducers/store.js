import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())
);

export const persistor = persistStore(store);
