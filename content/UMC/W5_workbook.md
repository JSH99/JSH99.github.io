---
emoji: ๐  
title: UMC 5์ฃผ์ฐจ ์ํฌ๋ถ  
date: '2022-04-15'  
author: JSH99  
tags: gatsby git js diary umc  
categories: UMC
---

## UMC 5์ฃผ์ฐจ ์ํฌ๋ถ
<br>

### ์ด๋ฒคํธ ํธ๋ค๋ฌ(Event Handler)
์ฝ๋ฐฑํจ์๋ฅผ **`์ด๋ฒคํธ ํธ๋ค๋ฌ`**๋ผ๊ณ  ํ๋ค. ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ ๊ฐ๋์ฑ ๋ฐ ์ ์ง๋ณด์๋ฅผ ์ํด ๋ฐ๋ก ์์ฑํ๋ ๊ฒ์ด ์ข๋ค. ํจ์ ๋ค์ ํธ์ถ ๊ธฐํธ๊ฐ ์๋ ์ด์ ๋ ์ฝ๋ฐฑํจ์์ด๊ธฐ ๋๋ฌธ์ด๋ค. ์ฝ๋ฐฑ์ ํด๋ฆญ์ด ์ด๋ฃจ์ด์ง ๋๋ง๋ค ํจ์๋ฅผ ์๋์ ์ผ๋ก ํธ์ถํด์ค๋ค.  
```javascript
target.event_name = callback_function
```  
<br>  

์ด๋ฒคํธ ํธ๋ค๋ฌ์ ๋จ์ ์ ๋์ผํ ์ด๋ฒคํธ์ ์๋ก ๋ค๋ฅธ ์ฝ๋ฐฑํจ์๋ฅผ ์ง์ ํ  ๊ฒฝ์ฐ ๋ค์ ์ด๋ฒคํธ ํธ๋ค๋ฌ๊ฐ ์์ ์ด๋ฒคํธ ํธ๋ค๋ฌ๋ฅผ ๋ฎ์ด์์ด๋ค.  
```javascript
$div.onclick = () => console.log("clicked"); // ์คํ X
$div.onclick = () => alert("clicked"); // ์คํ O
```
<br><br>  

### ์ด๋ฒคํธ ๋ฆฌ์ค๋(Event Listner)
- **`addEventListner`**  
์ด๋ฒคํธ ํธ๋ค๋ฌ์ ๋ค๋ฅด๊ฒ **๋์ผํ ์ด๋ฒคํธ์ ์๋ก ๋ค๋ฅธ ์ฝ๋ฐฑํจ์๋ฅผ ์คํํ  ์ ์๋ค.**
```javascript
$div.addEventListener('click', () => console.log("clicked"));//์คํ O
$div.addEventListener('click', () => alert("clicked"));//์คํ O
``` 
<br>

  addEventListener๋ ์๋์ ๊ฐ์ด ์ฌ์ฉํ  ์ ์์ผ๋ฉฐ, ์ธ์๋ค์ ๋ค์๊ณผ ๊ฐ๋ค.
```javascript
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
```
| -      |                    **type**                    |                 **listener**                 |           **options**            |                                          **useCapture**                                           |
|:-------|:----------------------------------------:|:--------------------------------------------:|:--------------------------------:|:----------------------------------------:|
| **์ค๋ช** |     ์์ ํ  ์ด๋ฒคํธ ์ ํ์ ๋ํ๋ด๋ ๋์๋ฌธ์ ๊ตฌ๋ถ ๋ฌธ์์ด(**์ด๋ฒคํธ๋ช**)     | ์ง์ ํ ์ด๋ฒคํธ(์ด๋ฒคํธ ์ธํฐํ์ด์ค๋ฅผ ๊ตฌํํ ๊ฐ์ฒด)๋ฅผ ์์ ํ  ๊ฐ์ฒด(**์ฝ๋ฐฑํจ์**) | ์ด๋ฒคํธ ์์ ๊ธฐ์ ํน์ง์ ์ง์ ํ  ์ ์๋ ๊ฐ์ฒด(**์ต์**) | ์ด๋ฒคํธ ๋์์ DOM ํธ๋ฆฌ ํ์์ ์์นํ ์์ EventTarget์ผ๋ก ์ด๋ฒคํธ๊ฐ ์ ๋ฌ๋๊ธฐ ์ ์, ์ด ์์ ๊ธฐ๊ฐ ๋จผ์  ๋ฐ๋๋ผ์ผ ํจ์ ๋ํ๋ด๋ ๋ถ๋ฆฌ์ธ ๊ฐ(**๊ธฐ๋ณธ๊ฐ false**) |
| **์ข๋ฅ** | `click`, `change`, `focus`, `select`, `load` ๋ฑ |                   ์ง์ ํ ์ฝ๋ฐฑํจ์                   |            `capture`, `once`, `passive`, `signal`                      |                                             ๋ฒ๋ธ๋ง, ์บก์ฒ๋ง                                              |  
<br> 

  addEventListener์์ ํจ์์ ํ๋ผ๋ฏธํฐ๋ฅผ ์ ๋ฌํ๊ณ  ์ถ๋ค๋ฉด, **์ต๋ชํจ์**๋ฅผ ์ฌ์ฉํด์ผ ํ๋ค. `handleClick(num)`๋ก ์์ฑํ  ๊ฒฝ์ฐ ์ด๋ฒคํธ๊ฐ ๋ฐ์๋์ ๋ ํจ์๊ฐ ์คํ๋์ด์ผ ํ๋๋ฐ, JS ํ์ผ์ ์ฝ์ด๋ด๋ ค๊ฐ๋ ์๊ฐ handleClick() ํจ์๊ฐ ์คํ๋์ด ๋ฒ๋ฆฐ๋ค. ๋ฐ๋ผ์ ํ์ผ์ ์ฝ์ผ๋ฉด์ ์คํ๋์ง ์๊ณ  ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ  ๋ ํจ์๊ฐ ์คํ๋๋ ค๋ฉด ์๋์ ๊ฐ์ด ์์ฑํด์ผ ํ๋ค.  
```javascript
$div.addEventListener('click', handleClick(num)); // ์ค๋ฅ
$div.addEventListener('click', () => {handleClick('num');}); // ์ด๋ฒคํธ ๊ฐ์ฒด ์ฌ์ฉํ์ง ์์ ๋
$div.addEventListener('click', function(event){handleClick(event, 'num'}); // ํจ์
$div.addEventListener('click', (event) => {handleClick(event, 'num');}); // ํ์ดํ ํจ์
```
<br>  

- **`removeEventListner`**  
**์ด๋ฒคํธ๋ฅผ ์ญ์ **ํ  ๋ ์ฌ์ฉํ๋ค. ์ ๊ฑฐํ  ํจ์ ์ด๋ฆ์ ์ ์ด์ผ ํ๊ธฐ ๋๋ฌธ์ ์ต๋ชํจ์๋ฅผ ๋ฃ์ผ๋ฉด ์ ๋๋ค.
```javascript
$div.removeEventListner('click', handleClick_); 
```
<br><br>  

### ์ฝ๋ฐฑํจ์(Callback Function)
์ด๋ฒคํธ ํธ๋ค๋ฌ๋ addEventListener์์์ ๋ฆฌ์ค๋ ํจ์๋ฅผ ํจ์๋ฅผ **`์ฝ๋ฐฑ ํจ์`**๋ผ๊ณ  ํ๋ค. ์ด๋ฒคํธ๊ฐ ์คํ๋์ ๋, ์ฌ์ฉ์์๊ฒ ๋ค์ ์๋ ค์ค๋ค๋ ์๋ฏธ์์ call back์ด๋ค. **ํ๋ผ๋ฏธํฐ๋ก ํจ์๋ฅผ ์ ๋ฌ**๋ฐ์, ํจ์์ ๋ด๋ถ์์ ์คํํ๋ ํจ์์ด๋ค. ์ด๋ฒคํธ๊ฐ ์๋๋๋ผ๋ ์ฝ๋ฐฑ์ ํ์ฉํ  ์ ์๋ค. ์ฝ๋ฐฑํจ์ ์ฌ์ฉ ์์น์ ๋ค์๊ณผ ๊ฐ๋ค.
1. *์ต๋ช ํจ์ ์ฌ์ฉํ๊ธฐ*
2. *ํจ์ ์ด๋ฆ๋ง ๋๊ธฐ๊ธฐ*
3. *์ ์ญ๋ณ์, ์ง์ญ๋ณ์ ์ฝ๋ฐฑํจ์์ ํ๋ผ๋ฏธํฐ๋ก ์ ๋ฌ ๊ฐ๋ฅ*
<br><br>

### ์ด๋ฒคํธ ์ธ์
- **`event`**  
์ด๋ฒคํธ ํจ์๋ค์ ์ด๋ฒคํธ์ ๋ํ ์ ๋ณด๋ค์ ์ธ์๋ค๋ก ๋ฐ์ ์ ์๋ค. ์ด๋ฒคํธ ํจ์๋ ์ฒซ ๋ฒ์งธ ์ธ์๋ก ํ์ฌ ์ผ์ด๋ ์ด๋ฒคํธ์ ๋ํ ์ ๋ณด๋ฅผ ํ์ธํ  ์ ์๋ค. ๋งค๊ฐ๋ณ์์ ์ด๋ฆ์ ๋ฌด์์ด๋  ์๊ด์ด ์์ง๋ง, ๋ณดํต `e`๋ `event`๋ฅผ ๋ง์ด ์ฌ์ฉํ๋ค.
```javascript
function handleClick0 (event) {
    console.log(event);
}
```
![event information](./img/event_info.png)  
<br>  

  ์ฌ๋ฌ ์ ๋ณด๋ค ์ค ๊ฐ์ฅ ๋ง์ด ์ฌ์ฉํ๊ฒ ๋  ์ ๋ณด๋ `target`์ด๋ค. target์ **์ด๋ฒคํธ๊ฐ ์ผ์ด๋ ๋์**์ด๋ค. dir๋ฅผ ์ฌ์ฉํ๋ฉด ๊ฐ์ฒด์ ๋ํ ์ ๋ณด๋ฅผ ๊ฐ์ ธ์ฌ ์ ์๋ค.  
```html
<div class="container">click me</div>
```
```javascript
function handleClick0 (event) {
    console.log(event.target);
}
```
![event target](./img/event_target.png)  
<center>event target</center><br>  

  ```javascript
  function handleClick0 (event) {
      console.log(event.target.innerText);
  }
  ```
![event target innerText](./img/event_target_innerText.png)  
<center>event target innerText</center><br>

- **`change`**  
change๋ ๋ค๋ฅธ ๊ณณ์ ํ ๋ฒ ํด๋ฆญํด์ผ ์คํ์ด ๋๋ค. ์๋ ฅ๋ฐ์ ๋ด์ฉ์ ๋ฐ์์ค๊ณ  ์ถ๋ค๋ฉด value๋ฅผ ๋ฐ์์ค๋ฉด ๋๋ค.  
```javascript
function handleChange(event) {
    console.log(event.target.value);
}
```
![evnet target value](./img/event_target_value.png) 
<center>event target value</center><br>

- **`form`**  
form์ ๋ฒํผ์ ๋๋ฅด๋ฉด ์๋์ ์ผ๋ก form์ด ์ ์ถ์ด ๋๋ฉด์ ์๋ก๊ณ ์นจ๋๋ ๊ฒ์ด ๊ธฐ๋ณธ ์ฑ๊ฒฉ์ด๋ค. ์ด ๊ณผ์ ์์ ์๋ ฅํ input ๊ฐ์ด ๋ชจ๋ ์ฌ๋ผ์ง๊ธฐ ๋๋ฌธ์ ์๋ก๊ณ ์นจ์ด ๋๋ ๊ฒ์ ๋ง๊ธฐ ์ํด์๋ `preventDefault` ๋ฉ์๋๋ฅผ ์ฌ์ฉํด์ผ ํ๋ค.  
![preventDefault before](./img/preventDefault_before.png)  
<center>preventDefault ์ </center><br>

  `preventDefault`๋ **์ด๋ฒคํธ๊ฐ ๊ฐ์ง๊ณ  ์๋ ๊ธฐ๋ณธ ๋์๋ค์ ๋ง์์ค๋ค**. form์ preventDefault๋ฅผ ์ฌ์ฉํ๋ฉด ์๋ก๊ณ ์นจ์ด ๋์ง ์๊ณ  input์ด ์ ์ง๋๋ ๊ฒ์ ํ์ธํ  ์ ์๋ค.
```javascript
function handleSubmit(event) {
    event.preventDefault();
}
```
![preventDefault after](./img/preventDefault_after.png)  
<center>preventDefault ํ</center><br><br>

### ์ด๋ฒคํธ ์ข๋ฅ
- **๋ง์ฐ์ค ์ด๋ฒคํธ**

| ์ด๋ฒคํธ                                     | ์ค๋ช                                                     |
|:----------------------------------------|:-------------------------------------------------------|
| `click`                                 | ์์์ ๋ง์ฐ์ค๋ฅผ ํด๋ฆญํ์ ๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์                                |
| `dbclick`                               | ์์์ ๋ง์ฐ์ค๋ฅผ ๋๋ธํด๋ฆญํ์ ๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์                              |
| `mouseover`                             | ์์์ ๋ง์ฐ์ค๋ฅผ ์ค๋ฒํ์ ๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์                                |
| `mouseout`                              | ์์์ ๋ง์ฐ์ค๋ฅผ ์์ํ์ ๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์                                |
| `mousedown`                             | ์์์ ๋ง์ฐ์ค๋ฅผ ๋๋ ์ ๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์                                 |
| `mouseup`                               | ์์์ ๋ง์ฐ์ค๋ฅผ ๋ผ์์ ๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์                                 |
| `mousemove`                             | ์์์ ๋ง์ฐ์ค๋ฅผ ์์ง์์ ๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์                                |
|  `contextmenu`                          | context menu(๋ง์ฐ์ค ์ค๋ฅธ์ชฝ ๋ฒํผ์ ๋๋ ์ ๋ ๋์ค๋ ๋ฉ๋ด)๊ฐ ๋์ค๊ธฐ ์ ์ ์ด๋ฒคํธ ๋ฐ์  |
<br>

- **ํค๋ณด๋ ์ด๋ฒคํธ**

| ์ด๋ฒคํธ             | ์ค๋ช                 |
|:----------------|:-------------------|
| `keydown`       | ํค๋ฅผ ๋๋ ์ ๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์   |
| `keyup`         | ํค๋ฅผ ๋ผ์์ ๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์   |
| `keypress`      | ํค๋ฅผ ๋๋ฅธ ์ํ์์ ์ด๋ฒคํธ๊ฐ ๋ฐ์ |
<br>

- **ํผ ์ด๋ฒคํธ**

| ์ด๋ฒคํธ        | ์ค๋ช                                                     |
|:-----------|:-------------------------------------------------------|
| `focus`    | ์์์ ํฌ์ปค์ค๊ฐ ์ด๋๋์์ ๋ ์ด๋ฒคํธ ๋ฐ์                                |
| `blur`     | ์์์ ํฌ์ปค์ค๊ฐ ๋ฒ์ด๋ฌ์ ๋ ์ด๋ฒคํธ ๋ฐ์                                 |
| `change`   | ์์์ ๊ฐ์ด ๋ณ๊ฒฝ ๋์์ ๋ ์ด๋ฒคํธ ๋ฐ์                                 |
| `submit`   | submit ๋ฒํผ์ ๋๋ ์ ๋ ์ด๋ฒคํธ ๋ฐ์                                |
| `reset`    | reset ๋ฒํผ์ ๋๋ ์ ๋ ์ด๋ฒคํธ ๋ฐ์                                 |
| `select`   | input์ด๋ textarea ์์ ์์ ํ์คํธ๋ฅผ ๋๋๊ทธํ์ฌ ์ ํํ์ ๋ ์ด๋ฒคํธ ๋ฐ์        |
<br>

- **๋ก๋ ์ด๋ฒคํธ**

| ์ด๋ฒคํธ           | ์ค๋ช                        |
|:--------------|:--------------------------|
| `load`        | ํ์ด์ง์ ๋ก๋ฉ์ด ์๋ฃ๋์์ ๋ ์ด๋ฒคํธ ๋ฐ์   |
| `abort`       | ์ด๋ฏธ์ง์ ๋ก๋ฉ์ด ์ค๋จ๋์์ ๋ ์ด๋ฒคํธ ๋ฐ์   |
| `unload`      | ํ์ด์ง๊ฐ ๋ค๋ฅธ ๊ณณ์ผ๋ก ์ด๋๋  ๋ ์ด๋ฒคํธ ๋ฐ์  |
<br>

- **๊ธฐํ ์ด๋ฒคํธ**

| ์ด๋ฒคํธ      | ์ค๋ช                      |
|:---------|:------------------------|
| `resize` | ์์์ ์ฌ์ด์ฆ๊ฐ ๋ณ๊ฒฝ๋์์ ๋ ์ด๋ฒคํธ ๋ฐ์ |
| `scroll` | ์คํฌ๋กค๋ฐ๋ฅผ ์์ง์์ ๋ ์ด๋ฒคํธ ๋ฐ์     |

๐ ์ฐธ๊ณ  : [https://jenny-daru.tistory.com/17](https://jenny-daru.tistory.com/17)  
โ ๋ ๋ง์ ์ด๋ฒคํธ : [https://developer.mozilla.org/ko/docs/Web/Events](https://developer.mozilla.org/ko/docs/Web/Events)