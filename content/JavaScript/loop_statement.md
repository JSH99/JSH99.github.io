---
emoji: 🍦  
title: javascript 반복문  
date: '2022-02-08'  
author: JSH99  
tags: gatsby git js  
categories: JS
---

## 반복문
<br>

### while문
**while**은 조건식이 참인 동안 반복해서 동작문을 실행한다. ‘**while (조건식) 동작문;**'의 형태로 작성하며 동작문이 여러 줄일 경우 {}로 감싼다. while문을 사용할 때는 무한 반복이 되지 않도록 주의해야 한다.
```javascript
let i = 0;
while (i <= 100) {
	console.log('Hello, World!');
	i++;
}
```
<br>

### for문
**for**은 ‘**for (시작; 조건식; 종료식) 동작문;**’의 형태로 작성한다. 시작은 처음 한 번만 실행되고, 조건식, 동작문, 종료식 순서대로 반복되어 실행된다.
```javascript
for (let i = 0; i < 100; i += 2) {
	console.log(i+1);
}
```
<br>

**중첩**을 사용하여 반복문의 중괄호 안에 다른 반복문을 쓸 수 있다.
```javascript
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		for (let k = 0; k < 10; k++) [
			console.log(i, j, k);
		}
	}
}
```
<br>

### continue & break문
**continue**&**break**을 사용하면 특정 조건에서 실행되거나 반복문을 멈출 수 있다.
```javascript
let i = 0;
while (i < 10) {
	i++;
	if (i % 2 === 0) 
		continue; // i가 2의 배수이면 실행하지 않고 건너뛴다.
	console.log(i);
}
```
```javascript
let i = 0;
while (i <= 100) {
	if (i === 5) 
		break; // i의 값이 5가 되면 바로 반복문을 멈춘다.
	i++;
}
```