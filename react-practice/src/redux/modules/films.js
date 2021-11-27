import { put, call, takeLatest } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import { getFilmInfo } from 'api/film';

const initialState = {
  filmItems: null,
  loading: true,
  err: null,
};

// action 타입 정의

const getFilmsAction = 'GET_FILMS';
const getFilmsActionSuccess = 'GET_FILMS_SUCCESS';
const getFilmsActionFailure = 'GET_FILMS_FAILURE';

// action 생성자 함수

export const getFilms = createAction(getFilmsAction);
export const getFilmsSuccess = createAction(getFilmsActionSuccess);
export const getFilmsFailure = createAction(getFilmsActionFailure);

//saga

function* getFilmsSaga(action) {
  try {
    const filmData = yield call(getFilmInfo);
    yield put({ type: `${action.type}_SUCCESS`, payload: filmData });
  } catch (e) {
    yield put({ type: `${action.type}_FAILURE`, payload: action.payload });
  }
}

// saga watcher

export function* filmsSaga() {
  yield takeLatest(getFilmsAction, getFilmsSaga);
}

// reducer

const films = handleActions(
  {
    [getFilmsAction]: (state, action) => {
      return { ...state, loading: true };
    },
    [getFilmsActionSuccess]: (state, action) => {
      return { ...state, loading: false, filmItems: action.payload };
    },
    [getFilmsActionFailure]: (state, action) => {
      return { ...state, loading: false, err: action.payload };
    },
  },
  initialState,
);

export default films;
