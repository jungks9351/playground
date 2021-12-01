// 단일 스토어 생성

import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import films from 'redux/modules/films';
import { filmsSaga } from 'saga/filmSaga';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const reducer = combineReducers({ films });

export const sagaMiddleWare = createSagaMiddleware();

const middleware = [sagaMiddleWare, logger];

export function* rootSaga() {
  yield all([filmsSaga()]);
}

export const store = configureStore({
  reducer,
  middleware,
  devTools: true,
});
