---
emoji: 🍦  
title: javascript 객체  
date: '2022-02-17'  
author: JSH99  
tags: gatsby git js diary  
categories: JS
---

## javascript 객체
<br>

### 배열(Array)
**배열**은 ‘**예약어 변수명 = [];**’의 형태로 선언하고, 쉼표로 구분하여 값을 넣어줄 수 있다. 배열의 자릿수는 **index**로 나타내며 0부터 시작한다. 배열 내부의 값을 **요소**(element)라고 한다.  
```javascript
let hello = [];
const fruit = ['사과', '바나나', null, '딸기'];
fruit.length; // 배열의 마지막 인덱스 -> 3
```  
<br>

배열 메서드  
```javascript
fruit.unshift('자몽'); // 배열의 맨 앞에 값 추가
fruit.shift(); // 배열의 맨 앞 값 제거
fruit.push('오렌지'); // 배열의 맨 뒤에 값 추가
fruit.pop(); // 배열의 맨 뒤 값 제거
fruit.splice(1, 2); // index 1부터 2개의 요소 제거
fruit.splice(1, 2, '망고'); // index 1부터 2개의 요소 제거 후 그 자리에 새 값 저장 

fruit.includes('메론'); // 배열에 특정 요소가 있는지 검색 -> false
fruit.indexof('바나나'); // 검색하고 싶은 값의 인덱스 값 -> 1
fruit.indexof('코코넛'); // 검색한 값이 없을 경우 -> -1
```
<br><br> 

### 함수(Function)
**함수**는 일정한 동작을 수행하는 코드를 의미한다. 예약어 **function**을 사용하거나 ⇒(**화살표**)을 사용하여 함수를 만든다. 함수를 선언하는 방식은 크게 세 가지가 있다. 함수를 사용하려면 함수를 **호출**한다. **return**은 함수의 종료와 반환을 의미한다.  
```javascript
function a() {} // 함수 선언문
const b = function() {}; // 함수 표현식
const c = () => {}; // 화살표 함수

a(); // 함수 호출

function hello() {
	return "Hello!";
}
```
<br>

**매개변수**(Parameter) & **인수**(Argument)를 사용하여 함수 호출 시 인수를 매개변수로 사용한다. 매개변수는 여러 개를 가질 수 있고, 매개변수의 개수와 인수의 개수가 일치하지 않아도 된다.  
```javascript
function a(parameter) {
	console.log(parameter); 
} // 선언 - 매개변수

a('argument'); // 호출 - 인수
```
<br><br>

### 객체 리터럴(Object Literal)
배열이나 함수가 아닌 객체 중 다음과 같은 모양을 갖춘 객체를 **객체 리터럴**이라고 한다. **속성**과 **속성 값**으로 구분되며, '**속성: 속성 값**' 형태로 작성한다. 객체의 속성 값으로 모든 자료형을 넣을 수 있으며, 함수를 넣으면 메서드라고 한다.  
```javascript
const sseo = {
	name: '정서현', 
	year: 1999,
	gender: 'F',
	speak: function(value) {
			console.log(value);
	}, // 메서드
};

sseo.gender; // 속성 값 접근 
sseo['gender'] // 속성 값 접근
sseo.speak("hi, everyone!"); // 메서드 접근
```