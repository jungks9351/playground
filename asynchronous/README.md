# 비동기 작업

## 동기 와 비동기

## Promise

- promise는 작업의 최종 완료 또는 실패를 나타내는 객체이다.
- promise는 promise 객체를 반환한다.
- 인수는 callback 함수다.
- callback 을 첨부하는 방식의 객체이다.

- callback

  - pending
    - fullfilled
      - then
        - resolve 결과값
    - reject
      - catch
        - error 값

- Promise.all([])
  - promise 객체를 병렬 처리할 수 있다.

## async await

- 기존의 비동기 처리방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성하게 도와줌

- 마이크로태스크 큐
