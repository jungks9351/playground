import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { counterReducer, rootSaga } from './redux/counter';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const reducers = combineReducers({ counter: counterReducer });

const middleWare = createSagaMiddleWare();

const store = createStore(
  reducers,
  // composeWithDevTools는 store를 확인하고 액션 디스패치를 추적하여 디버깅을 도와준다.
  // enhancer를 디버깅하기 위해서 composeWithDevTools의 인자로 미들웨어가 들어가야된다.
  composeWithDevTools(applyMiddleware(middleWare, logger))
  // 저장소 enhancer applyMiddleWare 모든 미들웨어를 합쳐주는 함수다
);

// const listener = () => {
//   const state = store.getState();
//   console.log(state);
// };
// store.subscribe(listener);

middleWare.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
