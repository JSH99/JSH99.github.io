---
emoji: ๐  
title: UMC 4์ฃผ์ฐจ ์ํฌ๋ถ  
date: '2022-04-12'  
author: JSH99  
tags: gatsby git js diary umc  
categories: UMC
---

## UMC 4์ฃผ์ฐจ ์ํฌ๋ถ
<br>

### document
document = html. ๊ฐ๋ฐ์ ๋๊ตฌ๋ฅผ ์ผ์ console์ document๋ฅผ ์๋ ฅํ๋ฉด ์ ์ฒด ์ ํ๋๋ ๊ฒ์ ํ์ธํ  ์ ์๋ค. DOM์ ์ ํํ ๋ณ์๋ ๋ค๋ฅธ ๋ณ์์ ๊ตฌ๋ถํ๊ธฐ ์ํด $ ํ์๋ฅผ ํ๋๋ฐ, ์๋ตํด๋ ๋ฌด๊ดํ๋ค.  
![document](./img/document.png)  

**DOM์ ์ ์ดํ๋ ๊ฒ์ด ๊ณง HTML์ ์ ์ดํ๋ ๊ฒ์ด๋ค.** ์๋ฐ์คํฌ๋ฆฝํธ๋ HTML์ DOM ๊ฐ์ฒด๋ฅผ ๊ฐ์ ธ์ ์กฐ์ํ  ์ ์๋ค. element๋ฅผ ๊ฐ์ ธ์ค๊ณ , element์ ํ์คํธ๋ฅผ ์ฝ๊ณ , element๋ฅผ ์์ฑ, ์ญ์ , ์์ ํ  ์ ์๋ค.  
โ์ฐธ๊ณ  : https://grace-go.tistory.com/78
<br><br>  

### dom elements ๊ฐ์ ธ์ค๊ธฐ
- **`getElementsByTagName`** : ํด๋น๋๋ **ํ๊ทธ**๋ฅผ ๋ชจ๋ ์ง์ ํด์ ์ ์ฌ ๋ฐฐ์ด(HTMLCollection)์ ๋ฃ๋๋ค. document๊ฐ ์๋ dom์ ์ ํํ ๋ณ์๋ฅผ ์ ํํ์ฌ ์์ญ์ ์ ํํ  ์ ์๋ค.
- **`getElementsByTagClassName`** : ํด๋น๋๋ **ํด๋์ค**๋ฅผ ๋ชจ๋ ์ง์ ํด์ ์ ์ฌ ๋ฐฐ์ด(HTMLCollection)์ ๋ฃ๋๋ค.
- **`getElementById`** : ํด๋น๋๋ **id**๋ฅผ ๋ฐฐ์ด์ด ์๋ element๋ก ๋ฐํํ๋ค. id ๊ฐ์ ์ค๋ณต๋  ์ ์๊ธฐ ๋๋ฌธ์ ๊ฒฐ๊ณผ ๊ฐ์ด ํ๋์ด๋ฏ๋ก ๋จ์ผ ๊ฐ์ด ๋ฐํ๋๋ ๊ฒ์ด๋ค.
- **`querySelector`** : css ์ ํ์์ฒ๋ผ ์ฌ์ฉํ  ์ ์์ด, ๋ณต์กํ ์กฐํฉ์ ์ ํ์๋ค์ ์ ํํ  ์ ์๋ค. **ํด๋น ์กฐ๊ฑด์ ๋ง์กฑํ๋ ์ฒซ๋ฒ์งธ element**๋ง ์ ํํ๋ค.
- **`querySelectorAll`** : **ํด๋น ์กฐ๊ฑด์ ๋ง์กฑํ๋ ๋ชจ๋  element**๋ฅผ ์ ํํ์ฌ ์ ์ฌ ๋ฐฐ์ด(NodeList)๋ก ๋ฐํํ๋ค.
```javascript
const $body = document.getElementsByTagName("body");
const $container = document.getElementsByClassName("container");
const $title = document.getElementById("title");
const $cityList = document.getElementById("cityList");
const $cities = $cityList.getElementsByTagName("li");
const $citiesAll = $cityList.querySelectorAll('li');
const $cityDiv = document.querySelector(".city");
```
  - `innerText` : ํ๊ทธ๋ฅผ ์ ์ธํ๊ณ  ํ๊ทธ ์์ ์๋ ๋ชจ๋  ํ์คํธ๋ค์ ๋์ดํ๋ค.
    ```javascript
    console.log($container[0].innerText);
    ```
    ![innerText](./img/innerText.png)
  - `innerHTML` : ํ๊ทธ๋ฅผ ํฌํจํด์ ํ๊ทธ์  ํ๊ทธ ์์ ์๋ ๋ชจ๋  ํ์คํธ๋ค์ ๋์ดํ๋ค.
    ```javascript
    console.log($body[0].innerHTML);
    ```
    ![innerHTML](./img/innerHTML.png)  
<br><br>  

### ์ ์ฌ ๋ฐฐ์ด
**์ ์ฌ ๋ฐฐ์ด**์ด๋, ๋ฐฐ์ด์ ์๋์ง๋ง ๋ฐฐ์ด์ฒ๋ผ ์ธ๋ฑ์ค๋ฅผ ์ด์ฉํด ๊ฐ์ ์ ๊ทผํ  ์ ์๋ ๋ฐ์ดํฐ ๊ตฌ์กฐ๋ฅผ ๋งํ๋ค. `HTMLCollection`๊ณผ `NodeList`๊ฐ ์๋๋ฐ, NodeList์์๋ง **forEach**๋ฅผ ์ง์ํ๋ค. ์ ์ฌ ๋ฐฐ์ด์ ๋ฐฐ์ด๋ก ๋ณํํ๋ ๋ฐฉ๋ฒ์ ๋ ๊ฐ์ง๊ฐ ์๋ค.  
- **`spread operator`**
```javascript
const newCities = [...$cities];
```
- **`Array.from `**
```javascript
const newCities_ = Array.from($cities);
```  
<br><br>  

### style ๋ณ๊ฒฝ
css๋ฟ๋ง ์๋๋ผ, **์๋ฐ์คํฌ๋ฆฝํธ์์๋ ์คํ์ผ์ ๋ณ๊ฒฝํ  ์ ์๋ค.** ํ์ผ ๋ณ๋ก ๋ชํํ๊ฒ ์ฝ๋๊ฐ ๋ถ๋ฆฌ๋๋ ๊ฒ์ด ์ข์ผ๋ฏ๋ก ์๋ฐ์คํฌ๋ฆฝํธ์์ ์คํ์ผ์ ๋ณ๊ฒฝํ๋ ๊ฒ์ ๊ถ์ฅํ์ง๋ ์๋๋ค.  
```javascript
$body[0].style.backgroundColor = "teal"; // ํ์ดํ X
$cityDiv.style.color = "grey";
```  
<br><br>  

### element ์ถ๊ฐ
- **`createElement`** : ์ง์ ํ ํ๊ทธ์ HTML ์์๋ฅผ ๋ง๋ค์ด ๋ฐํํ๋ค.  
    ```javascript
    const worstCity = document.createElement("ul");
    ```  
<br>

- **`appendChild`** : ํ ๋ธ๋๋ฅผ ํน์  ๋ถ๋ชจ ๋ธ๋์ ์์ ๋ธ๋ ๋ฆฌ์คํธ ์ค ๋ง์ง๋ง ์์์ผ๋ก ๋ถ์ธ๋ค.  
    ```javascript
    $container[0].appendChild(worstCityDiv); 
  // container ์์์ ๋ง์ง๋ง ์์์ผ๋ก worstCityDiv ๋ฃ๊ธฐ
    ```
    ![appendChild ์ ](./img/appendChild.png)
    <center>appendChild ์ </center>  

    ![appendChild ํ](./img/appendChildAfter.png)
    <center>appendChild ํ</center>  
<br>

- **`insertAdjacentHTML`** : ํน์  position์ ๋ธ๋๋ฅผ ์ถ๊ฐํ  ์ ์๋ค.
    - `beforebegin` : element ์์
    - `afterbegin` : element ์์ ๊ฐ์ฅ ์ฒซ๋ฒ์งธ child
    - `beforeend` : element ์์ ๊ฐ์ฅ ๋ง์ง๋ง child
    - `afterend` : element ๋ค์  

  ```javascript
    const worstCityList = `
    <ul>
      <li>Cairo</li>
      <li>London</li>
      <li>Risbon</li>
       <li>Sydney</li>
    <ul>
    `
    $cityDiv.insertAdjacentHTML('beforeend', worstCityList);  
  // element ์์ ๊ฐ์ฅ ๋ง์ง๋ง child์ worstCityList ๋ฃ๊ธฐ
  ```
  ![insertAdjacentHTML ์ ](./img/insertAdjacentHTML.png)
  <center>insertAdjacentHTML ์ </center>  

  ![insertAdjacentHTML ํ](./img/insertAdjacentHTMLafter.png)
  <center>insertAdjacentHTML ํ</center>  
<br>  

| -         |     **appendChild**     |            **insertAdjecentHTML**            |
|:----------|:-----------------------:|:--------------------------------------------:|
| **๋ฉ์๋**   | Node.appendChild(child) |   Node.insertAdjacentHTML(position, text)    |
| **์ค๋ช**    |    ์์์ ๋ง์ง๋ง ์์ ์์ ์์ฑ     |              HTML ๋ฌธ์์ด ์ง์  ์์น์ ์ฝ์              |
| **์ถ๊ฐ ์์น** |   ์์ ๋ธ๋ ๋ฆฌ์คํธ ์ค ๋ง์ง๋ง ์์    | beforebegin, afterbegin, beforeend, afterend |

<br><br>  

### element ํด๋์ค ๋ฐ ์์ฑ ์ถ๊ฐ
- **`classList`** : ํด๋น element๋ค์ class๋ค์ ๋ฐฐ์ด ํํ๋ก ๋ํ๋ธ๋ค.
  - `add` : class ์ถ๊ฐ
  ```javascript
  worstCityDiv.classList.add("city"); 
  ```
  - `remove` : class ์ญ์ 
  ```javascript
  worstCityDiv.classList.remove("city"); 
  ```
<br>  

- **`setAttribute`** : element์ attribute๋ฅผ ์ถ๊ฐํ๋ค. **element.setAttribute("name", "value")**
```javascript
worstCity.setAttribute("name", "worstCity");
// worstCity element์ name ์์ฑ ๊ฐ์ worstCity๋ก ์ค์ 
```