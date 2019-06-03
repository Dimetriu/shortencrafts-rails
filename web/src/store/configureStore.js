
import {
  applyMiddleware,
  createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import loggerMiddleware from '../middlewares/logger';
import monitorReducerEnhancer from '../enhancers/monitorReducer';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, createSagaMiddleware()]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers
  )

  return store;
}

