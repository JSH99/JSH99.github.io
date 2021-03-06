---
emoji: π  
title: UMC 8μ£Όμ°¨ μν¬λΆ  
date: '2022-05-17'  
author: JSH99  
tags: gatsby git js diary umc  
categories: UMC
---

## UMC 8μ£Όμ°¨ μν¬λΆ
<br> 

### HTTP
**`HTTP`** = **HyperText Transfer Protocol**  
β  νλ‘ νΈμ μλ² κ°μ λ°μ΄ν° ν΅μ  λ°©λ² μ€ νλ  

**`HTTPS`** = **HyperText Transfer Protocol Secure**  
β HTTP + **λ³΄μ**  

![HTTP request & response](./img/request_response.jpeg)
- **`request(μμ²­)`**
    - **URL address**
    - **HTTP Request Method**
        - `GET` : κΈ°μ‘΄μ λ°μ΄ν°λ₯Ό μ κ·Όν΄μ μ¬μ©νλ λ©μλ(read κΈ°λ₯)
        - `POST` : κΈ°μ‘΄ λ°μ΄ν°μ μλ‘μ΄ λ°μ΄ν°λ₯Ό μΆκ°νλ λ©μλ
        - `PUT` : κΈ°μ‘΄μ λ°μ΄ν°λ₯Ό μμ νλ λ©μλ
        - `DELETE` : λ°μ΄ν°λ₯Ό μ­μ νλ λ©μλ  
<br>  
- **`response(μλ΅)`**
  - **XML**
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
      <message>
          <warning>
              Hello World
          </warning>
      </message>
  ```
  π https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction   
  - **JSON**
  ```json
  {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": 
          {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
              "Radiation resistance",
              "Turning tiny",
              "Radiation blast"
            ]
          }
  }
  ```
  π https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON  
<br><br><br>  

### λ°μ΄ν° ν΅μ 
### fetch  
**`fetch`**λ λΈλΌμ°μ μμ μ κ³΅ν΄μ£Όλ λ©μλμ΄λ―λ‘ λ³λμ μ€μΉκ° νμ μλ€. 
```javascript
fetch(url, options)
```
<br>  

- **Promise**
```javascript
const result = [];
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => data.map(item => result.push(item)))
.catch(error => console.log(error))
console.log(result);
```    
![fetch Promise response](./img/fetch_promise.png)<br>  

- **async & await**  
```javascript
const dataFetch_ = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data
}
const dataResult_ = dataFetch_();
console.log(dataResult_);
```
<br><br>  

###axios
**`axios`**λ μλμΌλ‘ JSONμΌλ‘ λ³νν΄μ£Όμ΄ fetchλ³΄λ€ λ μ½κ² μ¬μ© κ°λ₯νλ, λ³λμ μ€μΉκ° νμνλ€.<br>  

- **Promise**
```javascript
axios.get("https://jsonplaceholder.typicode.com/users")
.then(response => console.log(response.data))
```  
![axios Promise response](./img/axios_promise.png)<br>    

- **async & await**
```javascript
const dataFetch = async() => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users").data;
        return response;
}
const dataResult = dataFetch();
console.log(dataResult);
```
<br><br><br>  

### βοΈ XML λμ  JSONμ λ°μ΄ν° ν΅μ μμ λ§μ΄ μ°λ μ΄μ 

β XMLκ³Ό JSONμ λͺ¨λ λ°μ΄ν°λ₯Ό μ λ¬νκΈ° μν΄ μ¬μ©λλ©°, **κ³μΈ΅μ μΈ κ΅¬μ‘°**λ‘ νλ‘κ·Έλλ° μΈμ΄μ μν΄ **νμ±λλ€**λ κ³΅ν΅μ μ΄ μλ€. νμ§λ§ `XML`μ μ’λ£ νκ·Έλ₯Ό μ¬μ©ν΄μΌνλ©° λ°°μ΄μ μ¬μ©ν  μ μκ³  μ½κ³  μ°λ μλκ° λλ¦¬λ€. λ°λ©΄, `JSON`μ XMLμ λΉν΄ λΉκ΅μ  λ μκ²©νκ³  μ§κ΄μ μ΄λ©°, μ½κ³  μ°λ μλκ° λΉ λ₯΄κ³  λ°°μ΄μ μ¬μ©ν  μ μλ€λ μ₯μ μ΄ μμ΄ λ°μ΄ν° ν΅μ μμ JSONμ λ λ§μ΄ μ¬μ©νλ€.  

π https://sujl95.tistory.com/59  
<br><br><br>  

### βΌοΈ JavaScript API νΈμΆ λ°©μ

- **XML HTTP Request**  
λͺ¨λ  λΈλΌμ°μ μμ XMLHttpRequest λμμ΄ μλ²μμμ λ°μ΄ν° μμ²­μ μ§μνμ¬ ν¬κ΄μ μΌλ‘ μ¬μ©ν  μ μμ§λ§, ES6μμλ μ¬μ©λμ§ μλλ€.
```javascript
var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/anuradha9712');
request.send();
request.onload = ()=>{
      console.log(JSON.parse(request.response));
}
```
<br>  

- **Fetch**  
Fetch APIλ λ€νΈμν¬λ₯Ό ν΅ν΄ μμμ λΉλκΈ°μ μΌλ‘ κ°μ Έμ€λ μΈν°νμ΄μ€λ₯Ό μ κ³΅νλ©°, Promise κ°μ²΄λ₯Ό λ°ννλ€. λ΄μ₯ λΌμ΄λΈλ¬λ¦¬λ‘μ μ¬μ©μ΄ λΉκ΅μ  μ½μ§λ§ JSONμΌλ‘ λ³νν΄μ£Όμ΄μΌ νλ€.
```javascript
fetch('https://api.github.com/users/anuradha9712')
.then(response =>{
      return response.json();
}).then(data =>{
      console.log(data);
})
```
<br>  

- **Axois**  
HTTP μμ²­μ λ³΄λ΄λ μμ€ λΌμ΄λΈλ¬λ¦¬λ‘μ, λΈλΌμ°μ μ node.jsμμ μ€νν  μ μμΌλ©° μ§μνλ κΈ°λ₯μ΄ λ€μνκ³  Promise κ°μ²΄λ₯Ό λ°νν  μ μμ΄ μ¬μ©μ΄ μ½μ§λ§ λ³λμ μ€μΉκ° νμνλ€.
```javascript
axios.get('https://api.github.com/users/anuradha9712')
.then(response =>{
      console.log(response.data)
})
```
<br>  

- **AJAX**  
λΉλκΈ°μ HTTP μμ²­μ μννμ¬ μΉμμ λ°μ΄ν°λ₯Ό μ‘°νν  λ νμ΄μ§ μ μ²΄λ₯Ό μλ‘κ³ μΉ¨νμ§ μμ ν¨μ¨μ μ΄μ§λ§, Promise κΈ°λ°μ΄ μλμ΄μ then & catchλ₯Ό μ¬μ©ν  μ μλ€.
```javascript
$(document).ready(function(){
        $.ajax({
            url: "https://api.github.com/users/anuradha9712",
            type: "GET",
            success: function(result){
                console.log(result);
            }
        })
})
```  

π [https://intrepidgeeks.com/tutorial/four-methods-of-calling-api-from-javascript](https://intrepidgeeks.com/tutorial/four-methods-of-calling-api-from-javascript)
π [https://yeoossi.tistory.com/55](https://yeoossi.tistory.com/55)