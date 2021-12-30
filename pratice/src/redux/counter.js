import { all, takeLatest } from 'redux-saga/effects';

const initialState = {
  count: 0,
  age: 0,
};

// action type
// 실수 방지를 하기 위해서 따로 type 관리 한다.

const increaseCount = 'INCREASE_COUNT';
const decreaseCount = 'DECREASE_COUNT';

// 액션 생성자 함수
//

export const increaseCountAction = () => {
  return { type: increaseCount };
};

export const decreaseCountAction = () => {
  return { type: decreaseCount };
};

// saga

export function* rootSaga() {
  yield all([counterSaga()]);
}

export function* counterSaga() {
  yield takeLatest(increaseCount, increaseCountSaga);
}

export function* increaseCountSaga(action, payload) {
  console.log('1');
}

// reducer

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increaseCount:
      return { ...state, count: state.count + 1 };
    case decreaseCount:
      return { ...state, count: state.count - 1 };
    case 'TEST':
      return { ...state };
    default:
      return state;
  }
};
