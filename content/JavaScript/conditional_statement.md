---
emoji: 🍦  
title: javascript 조건문
date: '2022-02-03'  
author: JSH99  
tags: gatsby git js  
categories: JS
---

## 조건문
<br>

### if문
**if**는 조건식의 값이 참이면 동작문을 실행하고, 거짓이면 실행하지 않는다. '**if (조건식) 동작문;**'의 형태로 작성하며, 동작문이 하나 이상이면 동작문들을 {}로 감싼다.
```javascript
if (true) {
  console.log('hello');
  console.log('world');
}
```
<br>

**else if**를 if문 뒤에 사용하여 또 다른 조건식과 동작문을 추가하면 여러 분기로 나눌 수 있다.
```javascript
if (score >= 80) {
  grade = 'A';
} else if (score >= 60) {
  grade = 'B';
} else if (score >= 40) {
  grade = 'C';
} else if (score >= 20) {
  grade = 'D';
} else {
  grade = 'F';
}
```
<br>

**중첩**을 사용하여 조건문의 중괄호 안에 다른 조건문을 쓸 수 있다.
```javascript
if (first) {
  console.log('1번');
  if (second) {
    console.log('2번');
  }
} 
```
<br>

### switch문
**switch**는 조건식을 두 개 사용하여 **case**별로 동작문을 실행하는 조건문이다. ‘**switch (조건식) { case 비교조건식: 동작문;}**'의 형태로 작성하며, 보통 조건식에는 변수를 넣고 비교 조건식에는 변수와 비교할 값을 넣는다. 앞의 비교 조건식에 해당되면 해당 case의 동작문만 실행되는 것이 아니라, 아래의 case의 동작문도 모두 실행된다. 따라서 이 특성을 기억하여 실행하고 싶은 case에 break를 사용하여 활용할 수 있어야 한다. 어느 case에도 해당되지 않을 때는 **default**를 사용한다.
```javascript
switch (value) {
  case 'A':
    console.log('A입니다.');
  case 'B':
    console.log('B입니다.');
    break;
  case 'C':
    console.log('C입니다.');
    break;
  default:
    console.log('일치하는 것 없음.');
}
```
<br>

### 조건부 연산자
**조건부 연산자**(**삼항 연산자**)는 ‘**조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식**’의 형태로 간단하게 분기 처리를 할 수 있다.
```javascript
5 > 6 ? '참!' : '거짓!'; // > 거짓!
age >= 19 ? '성인입니다.' : '미성년자입니다.'; 
```