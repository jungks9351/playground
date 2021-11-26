// 단일 스토어 생성

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import films from 'redux/modules/films';
import { filmsSaga } from 'redux/modules/films';

const rootReducer = combineReducers({ films });

export const sagaMiddleWare = createSagaMiddleware();

export function* rootSaga() {
  yield all([filmsSaga()]);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);
