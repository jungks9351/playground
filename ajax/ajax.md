## AJAX

"새로운" 접근법을 설명하는 용어

기술이 아니다

### Asynchronous JavaScirpt And XML

필요한 부분만을 서버에 요청하여 업데이트 할 수 있다.



#### Asynchronous JavaScirpt

동기 순차적으로 실행 되는 코드

task 가 **블록킹**이 된다.  블록



비동기 순차적으로 실행 되지 않는 코드

누가 먼저 실행될지 모른다.

다음 task 가 **블록킹**이 안된다. 논블록



### XML

eXtensible Markup Language

데이터 포맷 : 데이터를 주고 받는 유형



Json 이 더 가벼운 용량과 가독성이 좋아서 장점으로 더 많이 사용한다.





### http request 메소드



get : 필요한 데이터를 받아오는 요청

post : 데이터를 서버에 추가하는 요청

patch : 서버의 데이터의 필요한 부분(일부, 전체 다 가능) 변경하는 요청

put : 서버에 데이터의 **전체**를 변경하는 요청

delete: 서버의 데이터를 제거하는 요청



### AJAX 구현

xmlhttprequest web api 를 이용하여 구현한다.

fetch web api 를 이용하여 구현한다.



Json-server 패키지 설치