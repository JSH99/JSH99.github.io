---
emoji: ๐  
title: UMC 7์ฃผ์ฐจ ์ํฌ๋ถ  
date: '2022-05-16'  
author: JSH99  
tags: gatsby git js diary umc  
categories: UMC
---

## UMC 7์ฃผ์ฐจ ์ํฌ๋ถ
<br>

## ๋๊ธฐ & ๋น๋๊ธฐ
- **`๋๊ธฐ(synchronous)`** : ์์๋๋ก ์ผ์ ์ฒ๋ฆฌํ๋ ๋ฐฉ์
- **`๋น๋๊ธฐ(asynchronous)`** : ์์๋๋ก ์ผ์ ์ฒ๋ฆฌ ํ์ง ์๊ณ  ๋นจ๋ฆฌ ์ฒ๋ฆฌํ  ์ ์๋ ๊ฒ๋ค์ ๋จผ์  ์ฒ๋ฆฌํ๋ ๋ฐฉ์  

```javascript
console.log('1')
setTimeout(function() {
    console.log('2')
},10)
console.log('3')
console.log('4')
setTimeout(function() {
    console.log('5')
},5)
console.log('6')
setTimeout(function() {
    console.log('7')
},40)
console.log('8')
setTimeout(function() {
    console.log('9')
},30)
console.log('10')
```
![setTime](./img/setTime_.png)<br>    

  ์๋ฐ์คํฌ๋ฆฝํธ๋ `๋๊ธฐ์  ์ธ์ด`์ด์ง๋ง, ๋น๋๊ธฐ์ ์ผ๋ก ์ฒ๋ฆฌํ๊ธฐ ์ํด ์ฌ์ฉํ  ์ ์๋ ํจ์๊ฐ **`setTimeout`**์ด๋ค. 1, 3, 4, 6, 8, 10์ **๋๊ธฐ์ **์ผ๋ก ๋จผ์  ์ฒ๋ฆฌ๋๊ณ , 5, 2, 9, 7์ ๋๊ธฐ์ ์ผ๋ก ์ฒ๋ฆฌ๊ฐ ๋ ํ์ ์ค์ ๋ ์๊ฐ์ด ์์ ๊ฒ๋ถํฐ ์์ฐจ์ ์ผ๋ก **๋น๋๊ธฐ์ **์ผ๋ก ์ฒ๋ฆฌ๋๋ค.  
  - **`setTimeout`** : ๋ง๋ฃ๋ ํ ํจ์๋ ์ง์ ํ ์ฝ๋ ์กฐ๊ฐ์ ์คํํ๋ ํ์ด๋จธ๋ฅผ ์ค์ ํ๋ค.
      - `function` : ํ์ด๋จธ๊ฐ ๋ง๋ฃ๋ ๋ค ์คํํ  function
      - `code` : ํจ์ ๋์  ๋ฌธ์์ด์ ์ง์ ํ๋ ๋์ฒด ๊ตฌ๋ฌธ
      - `delay`(optional) : ์ฃผ์ด์ง ํจ์ ๋๋ ์ฝ๋๋ฅผ ์คํํ๊ธฐ ์ ์ ๊ธฐ๋ค๋ฆด ๋ฐ๋ฆฌ์ด ๋จ์ ์๊ฐ
      - `arg1, ..., argN`(optional) : function์ ์ ๋ฌํ  ์ถ๊ฐ ๋งค๊ฐ๋ณ์  
    
  ```javascript
  var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
  var timeoutID = setTimeout(function[, delay]);
  var timeoutID = setTimeout(code[, delay]);
  ```  
<br><br><br>  

### Callback (์ฝ๋ฐฑํจ์)
**`์ฝ๋ฐฑํจ์`** : ํจ์ ์์ ์ธ์๋ก ๋ค์ด๊ฐ๋ ํจ์ (๋น๋๊ธฐ์ ์ผ๋ก ์ฌ์ฉ๋  ์๋ ์๊ณ , ๋๊ธฐ์ ์ผ๋ก ์ฌ์ฉ๋  ์๋ ์๋ค.)  

์ฝ๋ฐฑํจ์๋ฅผ ์ฌ์ฉํ๋ ๋ํ์ ์ธ ์ด์ ๋, ๋๊ธฐ์ ๋น๋๊ธฐ๋ฅผ ํจ๊ป ์ผ์ ๋ ์์๋ฅผ ๋ณด์ฅํ  ์ ์๊ธฐ ๋๋ฌธ์ด๋ค. ์ฝ๋ฐฑ์ ์ค์ฒฉํด์ ์ํ๋ ์์๋๋ก ์คํํ๋๋ก ์ฝ๋๋ฅผ ์งค ์๋ ์๋ค.  

![callback function](./img/callback.png)<br>    

์ฝ๋ฐฑ์ด ๋ํ์ ์ผ๋ก ์ฐ์ด๋ ๊ณณ์ **๋ฐ์ดํฐ ํต์ **์ด๋ค. ๋ธ๋ก๊ทธ ํฌ์คํธ์ ์์ด๋ ๊ฐ์ ์๋ ฅํ๋ฉด, ํด๋น ๋๊ธ๋ค์ ์ถ๋ ฅํด์ฃผ๋ ๊ธฐ๋ฅ์ ๋ง๋ค์ด๋ณด์.
```javascript
// ํจ์ ํธ์ถ
getPost( 
    postNum,
    (postId) => {
      console.log('Post', postId);
      getComments(
        postId,
        (result) => {
          console.log('Comments:' , result)
        },
        (message) => {
          console.log(message);
        }
      )
    },
    (message) => {
      console.log(message);
    }
  )
```
![callback hell code](./img/callback_hell.png)
<br>  

๋ค์๊ณผ ๊ฐ์ด ์ฝ๋๋ฅผ ์์ฑํ๋ฉด ์ํ๋๋๋ก ํฌ์คํธ ์์ด๋์ ๋๊ธ๋ค์ด ์ถ๋ ฅ๋์ง๋ง, ์ฝ๋ฐฑ์ด ์ค์ฒฉ๋์ด ๊ฐ๋์ฑ์ด ๋จ์ด์ง๋ค. ์ด๋ฅผ **`์ฝ๋ฐฑ์ง์ฅ`**์ด๋ผ๊ณ  ํ๋ค. **์ฝ๋ฐฑ์ง์ฅ**์ด ์์ผ๋ฉด ๊ฐ๋์ฑ์ด ์ข์ง ์๊ณ  ์ ์ง๋ณด์ ๋ฐ ์์ ์ด ์ด๋ ค์์ง๊ธฐ ๋๋ฌธ์, ์ด๋ฅผ ํด๊ฒฐํ๊ธฐ ์ํ ๋ฐฉ๋ฒ์ผ๋ก `promise`์ `async&await`์ด ์๋ค.  

![callback hell img](./img/callback_hell_img.png)
<center>์ฝ๋ฐฑ์ง์ฅ ์์ ์ด๋ฏธ์ง</center><br><br><br>  

### Promise
- `pending` : ๋น๋๊ธฐ ์์ ์งํ ์ค
- `fulfilled` : ๋น๋๊ธฐ ์์์ด ์ฑ๊ณต์ ์ผ๋ก ๋๋ ์ํ
- `rejected` : ๋น๋๊ธฐ ์์์ด ์คํจ๋ก ๋๋ ์ํ  

```javascript
new Promise(resolve, reject) 
// resolve : ์ฑ๊ณตํ์ ๋ ์คํํ  ํจ์
// reject : ์คํจํ์ ๋ ์คํํ  ํจ์
```  
<br>  

์ฝ๋ฐฑ์ง์ฅ์ ํด๊ฒฐํ๊ธฐ ์ํด **`promise`**๋ฅผ ์ฌ์ฉํ์ฌ ํจ์๋ฅผ ํธ์ถํ๋ฉด ์ฝ๋๊ฐ ํจ์ฌ ๊ฐ๊ฒฐํด์ง๋ค.
```javascript
// ํจ์ ํธ์ถ
getPost(postNum)
  .then(postId => {
    console.log('Post:', postId)
    return getComments(postId)
  })
  .then(result => console.log('Comments:', result))
  .catch(message => console.log(message));
```
![promise](./img/promise.png)  
<br><br><br>  

### Async & Await
promise์ ๊ฐ์๋ฐ ์กฐ๊ธ ๋ ์ง๊ด์ ์ธ ๋ฐฉ๋ฒ์ผ๋ก async์ await์ด ์๋ค. **`async & await`**์ **๋น๋๊ธฐ์ ์ธ ๊ฒ๋ค์ ๋๊ธฐ์ ์ผ๋ก ๋๋ผ๊ฒ ํด์ค๋ค**.  
```javascript
// ํจ์ ํธ์ถ
async function getResult() {
    const postId_result = await getPost(postNum);
    const comments_result = await getComments(postId_result);
    console.log("Post:", postId_result, "Comments:", comments_result);
  }
  
  getResult();
```
![async & await](./img/async_await.png)<br>    

โ๏ธ **Promise** VS **async & await**  
โ **`์๋ฌ ํจ๋ค๋ง`** : ์ค๋ฅ๊ฐ ๋ฐ์ํ๋๋ผ๋, ์ฌ์ดํธ๊ฐ ๋ฉ์ถ๋ ๊ฒ ์๋๋ผ ์ค๋ฅ๋ฅผ ๋ค๋ฃจ๋ ์ฝ๋๋ก ๋์ด๊ฐ ํ ๋ค์ ์ฝ๋๋ฅผ ์คํํ๋ ๊ฒ  

**Promise**๋ฅผ ํ์ฉํ  ์์๋ `.catch()`๋ฌธ์ ํตํด **์๋ฌ ํธ๋ค๋ง**์ ํ๊ณ , **async/await**์ `try-catch()`๋ฌธ์ ํ์ฉํ์ฌ ์๋ฌ ํธ๋ค๋ง์ ํ๋ค.  **async/await**์ promise์ ๋ค๋ฅด๊ฒ then, catch๋ฅผ ์ถ๊ฐ์ ์ผ๋ก ์ฌ์ฉํ์ง ์์๋ ํ๋์ catch๋ก๋ ์๋ฌ ํธ๋ค๋ง์ ํ  ์ ์์ด ์ ๋ฆฌํ๋ค.  

**Promise**๋ `.then() ์ง์ฅ`์ ๊ฐ๋ฅ์ฑ์ด ์๊ธฐ ๋๋ฌธ์ ์ฝ๋๊ฐ ๊ธธ์ด์ง์๋ก **async/await**๋ฅผ ํ์ฉํ๋ ๊ฒ์ด ๊ฐ๋์ฑ์ด ์ข๋ค. **async/await**์ ๋น๋๊ธฐ ์ฝ๋๋ฅผ ๋๊ธฐ ์ฝ๋์ฒ๋ผ ์ฝํ๊ฒ ํด์ฃผ์ด ์ฝ๋ ํ๋ฆ์ ์ดํด ํ๊ธฐ ์ฌ์ฐ๋ฉฐ, ์๋ฌ ๋ฐ์ ์์น๋ฅผ ์ฝ๊ฒ ์ ์ ์๋ค.  

๐ ์ฐธ๊ณ  : https://velog.io/@pilyeooong/Promise์-asyncawait-์ฐจ์ด์ 