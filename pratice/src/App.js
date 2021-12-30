import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  counterReducer,
  increaseCountAction,
  decreaseCountAction,
} from './redux/counter';

function App() {
  // const count = useSelector((state) => {
  //   return state.count;
  // });
  // const age = useSelector((state) => {
  //   return state.age;
  // });

  // shallowEqual 을 쓰면 객체를 복사해서 비교를 해서 참조값이 변하지 않는다.

  const { count, age } = useSelector(({ counter }) => {
    return { count: counter.count, age: counter.age };
  }, shallowEqual);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increaseCountAction());
  };

  const decrease = () => {
    dispatch(decreaseCountAction());
  };

  const test = () => {
    dispatch({ type: 'TEST' });
  };

  return (
    <div className='App'>
      <button onClick={increase}>+</button>
      <div>count : {count}</div>
      <button onClick={decrease}>-</button>
      <button onClick={test}>test</button>
    </div>
  );
}

export default App;
