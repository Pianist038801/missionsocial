import { applyMiddleware, compose, createStore } from 'redux';
import createReducer from '@reducers';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      sagaMiddleware,
      loggerMiddleware,
    ),
  );

  const store = createStore(
    createReducer(),
    initialState,
    enhancer,
  );
  sagaMiddleware.run(sagas);
  return store;
}

module.exports = configureStore;
