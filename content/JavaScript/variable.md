---
emoji: 🍦  
title: javascript 변수
date: '2022-01-24'  
author: JSH99  
tags: gatsby git js  
categories: JS
---

## 변수
<br>

### let
잠깐 동안 특정 값을 저장해야 할 때 사용하는 것이 **변수**이다. '**let 변수명**'의 형태로 변수를 선언하고, 변수를 선언함과 동시에 값을 대입하는 것을 **초기화**라고 한다.
```javascript
let word; // 변수 선언
let num = 1; // 변수 초기화
num = 6; // 변수 값 수정
```
<br>

### var
var 또한 **변수**를 선언하는 예약어이며, '**var 변수명**'의 형태로 선언한다. let을 사용하여 같은 변수명을 다시 선언하면 오류가 나지만, var는 같은 변수명을 다시 선언하는 것이 가능하며 에약어를 변수명으로 사용할 수도 있다. 이렇듯 var의 난해한 특성 때문에 요즘은 거의 사용하지 않는다고 한다.
```javascript
var hello = 'world';
var undefined; // 가능
let undefined; // 오류
```
<br>

### const
const는 **상수**를 선언하는 예약어이다. 값을 상수로 저장하면 다른 값을 대입하더라도 수정되지 않음이 보장되어 더 안전하다. 상수는 값을 변경할 수 없기 때문에 **항상 초기화**를 해주어야 한다. const로 선언한 객체에 새로운 값을 대입할 수는 없지만, 객체 내부의 값은 바꿀 수 있다. (ex. 배열)
```javascript
const name; // 오류
const name = 'sseo'; 
```  
