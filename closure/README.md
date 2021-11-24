# 클로저 (closure)

- 클로저는 자바스크립트 고유의 개념이 아니라 함수를 일급 객체로 취급하는 **함수형 프로그래밍 언어에서 사용되는 중요한 특성**이다.
- **클로저는 함수와 그 함수가 선언 됐을 때의 렉시컬 환경과의 조합이다.**
- 내부함수가 외부함수의 맥락에 접근할 수 있는 것을 가르킨다
- 함수내에서 함수를 정의하고 사용한다

```js
function outerFunc() {
  let x = 10;
  let innerFunc() {console.log(x)};
  innerFunc();
}

outerFunc()l // 10
```

✔️ 스코프는 함수를 호출할 때가 아니라 함수를 어디에 선언하였는지에 따라 결정 됩니다. 이를 렉시컬 스코핑(Lexical scoping)이라 한다.

실행컨텍스트의 스코프 체인을 자바스크립트 엔진이 검색하였기에 내부함수 innerFunc가 외부함수 outerFunc의 변수 x에 접근할 수 있다.

```js
function outerFunc() {
  let x = 10;
  let innerFunc = function () {
    console.log(x);
  };
  return innerFunc;
}

/*
   함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
   그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
 */
let inner = outerFunc();
inner(); // 10
```

- 함수 outerFunc는 내부함수 innerFunc를 반환하고 종료됐다. 하지만 위 코드는 x의 값이 10을 반환한다. 실행컨텍스트 스택에서 제거된 함수 outerFunc의 지역변수 x에 접근을 한것이다.

- 자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우, 외부 함수 밖에서 내부함수가 호출되더라도 외부함수의 지역 변수에 접근할 수 있는데 이러한 함수를 클로저(Closure)라고 부릅니다.

- **클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수**를 말한다.
- **클로저는 자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수**라고 말할 수 있다.
