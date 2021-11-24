// 내부함수

// 내부함수가 외부함수의 지역변수에 접근이 가능하다.
const outerFunc = () => {
  const test = 'hello';
  const innerFunc = () => {
    return console.log(test);
  };
  innerFunc();
};

outerFunc();

// 클로저

// outerfunc2는 innerFunc2를 반환하는 함수이다.
const outerFunc2 = () => {
  const test = 'hello'; //자유변수
  console.log('1', test);
  return {
    innerFunc2: () => {
      return test;
    },
    innerFunc3: () => {
      return test + 'world';
    },
  };
};

// outerFunc2가 실행하면 내부의 자유 변수를 참조하는 innerFun2를 반환한다.
const closure = outerFunc2();
console.log(closure);

const newTest1 = closure.innerFunc2();
const newTest2 = closure.innerFunc3();

console.log(newTest1);
console.log(newTest2);
