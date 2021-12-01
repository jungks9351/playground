import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { getFilmInfo } from 'api/film';
import { getFilms } from 'redux/modules/films';

//saga

function* getFilmsSaga(action) {
  try {
    const filmData = yield call(() => getFilmInfo(action.payload));
    yield delay(2000);
    yield put({ type: `${action.type}Success`, payload: filmData });
  } catch (e) {
    yield put({ type: `${action.type}Failure`, payload: action.payload });
  }
}

// saga watcher

export function* filmsSaga() {
  yield takeLatest(getFilms, getFilmsSaga);
}
