import { useState } from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    // 함수 코드 스플리팅
    // import 를 함수로 사용하면, Promise 를 반환합니다.
    import('./notify').then(({ default: notify }) => {
      notify();
    });
  };

  // 컴포넌트 스플리팅
  const [SplitMe, setSplitMe] = useState(null);

  const handleClick2 = async () => {
    // import('./SplitMe').then(({ default: SplitMe }) => {
    //   setSplitMe(SplitMe);
    // });
    const loadedModule = await import('./SplitMe');
    setSplitMe(loadedModule.default);
  };

  return (
    <div className='App'>
      <h2>함수를 코드 스플리팅 해보기</h2>
      <button onClick={handleClick}>함수를 코드 스플리팅</button>
      <h2>컴포넌트를 코드 스플리팅 해보기</h2>
      <button onClick={handleClick2}>컴포넌트를 코드 스플리팅</button>
      {SplitMe && SplitMe}
    </div>
  );
}

export default App;
/* import() 함수는 아직 표준은 아니지만 stage-3 단계에 있는 dynamic import 라는 문법입니다.
    현재는, webpack 에서 지원해주고 있는 함수이기에 여러분의 프로젝트에서 별도의 설정 없이 바로 사용 할 수 있습니다.
    이 함수는 모듈을 비동기적으로 CommonJS 형태로 불러오니, 따로 default 를 명시해주어야 합니다.
    위에서 사용한 코드에서는 "default 를 notify 를 부르겠다" 라고 설정을 해주었습니다.*/
