---
emoji: π  
title: UMC 9μ£Όμ°¨ μν¬λΆ  
date: '2022-05-20'  
author: JSH99  
tags: gatsby git js diary umc  
categories: UMC
---

## UMC 9μ£Όμ°¨ μν¬λΆ
<br> 

### λΌμ°ν(Routing)
`λΌμ°ν`μ΄λ URI(λλ κ²½λ‘) λ° νΉμ ν HTTP μμ²­ λ©μλ(GET, POST λ±)μΈ νΉμ  μλν¬μΈνΈμ λν ν΄λΌμ΄μΈνΈ μμ²­μ μ νλ¦¬μΌμ΄μμ΄ μλ΅νλ λ°©λ²μ κ²°μ νλ κ²μ λ§νλ€.  
π https://expressjs.com/ko/starter/basic-routing.html   
<br><br><br>

### CRUD  
`CRUD`λ λ°μ΄ν° μ²λ¦¬ κΈ°λ₯ 4κ°μ§λ₯Ό μλ―Ένλ€. HTTP μμ²­ λ©μλμ μ°κ²°νλ©΄ λ€μκ³Ό κ°λ€.
- **Create(μμ±)** β `post`
- **Read(μ‘°ν)** β `get`
- **Update(κ°±μ )** β `put`
- **Delete(μ­μ )** β `delete`  
<br><br><br>

### HTTP μν μ½λ(http status codes)
`HTTP μν μ½λ`λ ν΄λΌμ΄μΈνΈκ° λ³΄λΈ HTTP μμ²­μ λν μλ²μ μλ΅ μ½λλ‘, μν μ½λμ λ°λΌ μμ²­μ μ±κ³΅/μ€ν¨ μ¬λΆλ₯Ό νλ¨νλ€.  
- **1xx `Informational`** : μμ²­μ λ°μμΌλ©° νλ‘μΈμ€λ₯Ό κ³μνλ€.
- **2xx `Success`** : μμ²­μ μ±κ³΅μ μΌλ‘ λ°μμΌλ©° μΈμνκ³  μμ©νλ€.
- **3xx `Redirection`** : μμ²­ μλ£λ₯Ό μν΄ μΆκ° μμ μ‘°μΉκ° νμνλ€.
- **4xx `Client Error`** : μμ²­ λ¬Έλ²μ΄ μλͺ»λμκ±°λ μμ²­μ μ²λ¦¬ν  μ μλ€.
- **5xx `Server Error`** : μλ²κ° λͺλ°±ν μ ν¨ν μμ²­μ λν΄ μΆ©μ‘±μ μ€ν¨νλ€.  

π https://ko.wikipedia.org/wiki/HTTP_μν_μ½λ  
![http status code](./img/http_status_codes.png)  
```javascript
// μμ²­ success
res.status(200).json(user);
```
```javascript
// μμ²­ error
res.status(404).send('μμ²­ν userIdλ₯Ό μ°Ύμ μ μμ΅λλ€')
```
<br><br><br>

### HTTP μμ²­ λ©μλ
- **GET**  
β κΈ°μ‘΄μ λ°μ΄ν°μ μ κ·Όν΄μ μ¬μ©νλ λ©μλ
  - `req` : μ¬μ©μκ° λ³΄λΈ μμ²­(request)
  - `res` : λ³΄λ΄μ€ μλ΅ κ°(response)  

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!'); 
}) 
// μ¬μ©μκ° μμ²­ν μ£Όμκ° '/'μΌ λ μ°λ¦¬λ μλ΅μΌλ‘ 'Hello Wolrd!'λ₯Ό μ€κ²!
```
![api get methode](./img/api_get.png)<br>  

**λμ μΌλ‘ μ¬μ©λλ μ£Όμ**λ μμ `μ½λ‘ `μ λΆμ¬μ€λ€.  
```javascript
// user μ λ³΄ μΆλ ₯
app.get("/users/:userId", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.userId));
  if (!user) {
    res.status(404).send('μμ²­ν userIdλ₯Ό μ°Ύμ μ μμ΅λλ€')
  }
  res.status(200).json(user);
});
// userId κ°μ λ°λΌ μ£Όμκ° λμ μΌλ‘ λ°λλ€.
```
![api get success](./img/api_get_success.png)  
![api get error](./img/api_get_error.png)
<br><br>  

- **POST**  
β κΈ°μ‘΄ λ°μ΄ν°μ μλ‘μ΄ λ°μ΄ν°λ₯Ό μΆκ°νλ λ©μλ
  - `req.body` : μμ²­ λ³Έλ¬Έμ μ μΆλ key-value ννμ λ°μ΄ν° ν¬ν¨. JSONκ³Ό κ°μ λ°μ΄ν°λ₯Ό λ°μ λ μ¬μ©νλ€.  

```javascript
// μλ‘μ΄ user μ λ³΄ λ°°μ΄μ μΆκ° 
app.post("/users", (req,res) => {
  const newUser = req.body;
  if (Object.keys(newUser).length === 0) {
    res.status(400).send('userμ κ΄ν μ λ³΄λ₯Ό μλ ₯ν΄μ£ΌμΈμ');
  } else if (Object.keys(newUser).length < 4) {
    res.status(400).send('userλ₯Ό μΆκ°νκΈ° μν΄ νμν μ λ³΄λ₯Ό λͺ¨λ μλ ₯ν΄μ£ΌμΈμ')
  } else {
    users.push({
      id: users[users.length - 1].id + 1, 
      ...newUser,
    });
  }
  res.json(users);
})
```
![api post](./img/api_post.png)  
<br><br>

- **PUT**  
β κΈ°μ‘΄μ λ°μ΄ν°λ₯Ό μμ νλ λ©μλ  

```javascript
// user λ°μ΄ν° μμ 
app.put("/users/:userId", (req, res) => {
  const id = users.findIndex(user => user.id === parseInt(req.params.userId));
  if (id === -1) {
    return res.status(404).send('μμ²­ν idλ₯Ό μ°Ύμ μ μμ΅λλ€.');
  }
  users[id] = {
    ...users[id],
    ...req.body
  }
  res.status(200).json(users);
})
```
![api put](./img/api_put.png)  
<br><br>

- **DELETE**  
β κΈ°μ‘΄μ λ°μ΄ν°λ₯Ό μ­μ νλ λ©μλ  

```javascript
// user λ°μ΄ν° μ­μ 
app.delete("/users/:userId", (req, res) => {
  const id = users.findIndex(
    (user) => user.id === parseInt(req.params.userId)
  );
  if (id === -1) {
    return res.status(404).send("μμ²­ν idλ₯Ό μ°Ύμ μ μμ΅λλ€.");
  }
  users.splice(id, 1);
  res.status(200).json(users);
})
```
![api delete](./img/api_delete.png)  
<br><br>  

- **PATCH**  
β λ°μ΄ν°μ μΌλΆλ§ μμ νλ λ©μλ  
<br>  

βοΈ **PUT** vs **PATCH**  

`PUT`: λ¦¬μμ€μ **λͺ¨λ  κ²**μ μλ°μ΄νΈ νλ€.  
`PATCH`: λ¦¬μμ€μ **μΌλΆ**λ₯Ό μλ°μ΄νΈ νλ€.<br><br>  

|member|1|
|---|---|
|name|νκΈΈλ|
|age|100|
|gender|M|
<λ¦¬μμ€><br><br>  

**PUT** : λ³΄λ΄μ§μ§ μμ κ°μ `null` κ°μ΄ λλ€.
```javascript
PUT /members/1
{
    name : "ν¬λ"
}
```
|member| 1 |
|---|---|
|name| ν¬λ |
|age|   |
|gender|   |
<br>  

**PATCH** : μμ²­μ ν¬ν¨λμ΄ μλ λΆλΆλ§ λ³κ²½λλ€. (κΈ°μ‘΄ λ°μ΄ν° μ μ§)  
```javascript
PATCH /members/1
{
    name : "ν¬λ"
}
```
|member| 1  |
|---|----|
|name| ν¬λ |
|age| 100 |
|gender| M  |  

π https://programmer93.tistory.com/39
<br><br><br>  

### π KEYWORD  
**`Routing`** : λ€νΈμν¬ μμμ λ°μ΄ν°λ₯Ό μ΅μ μ κ²½λ‘λ₯Ό μ ννλ κ³Όμ μ λΌμ°νμ΄λΌκ³  νλ€. μΉ μ νλ¦¬μΌμ΄μμμ λΌμ°νμ **μ¬μ©μκ° μμ²­ν URLμ λ°λΌ μλ§λ νμ΄μ§λ₯Ό λ³΄μ¬μ£Όλ κ²**μ μλ―Ένλ€.  

**`API`** : Application Programming Interfaces μ½μλ‘, μμ©νλ‘κ·Έλλ° μΈν°νμ΄μ€λ₯Ό μλ―Ένλ€. **λ³΅μ‘ν κΈ°λ₯μ μ½κ² κ°λ°ν  μ μλλ‘ νλ‘κ·Έλλ° μΈμ΄λ‘ μ½λλ₯Ό μ κ³΅νλ κ²**μΌλ‘, μ νλ¦¬μΌμ΄μκ³Ό κΈ°κΈ°κ° μννκ² ν΅μ ν  μ μλλ‘ ν΄μ€λ€.  

**`Node.js`** : Chromeμ V8μμ§μ μ΄μ©νμ¬ javascriptλ‘ μλ²λ₯Ό κ΅¬μΆνκ³ , **μλ²μμ JavaScriptκ° μλλλλ‘ ν΄μ£Όλ λ°νμ νκ²½**μ΄λ€.  

**`Web Server`** :  **HTTP λλ HTTPSλ₯Ό ν΅ν΄ μΉ λΈλΌμ°μ μμ μμ²­νλ HTML λ¬Έμλ μ€λΈμ νΈ(μ΄λ―Έμ§ νμΌ λ±)μ μ μ‘ν΄μ£Όλ μλΉμ€ νλ‘κ·Έλ¨**μ΄λ€. λΈλΌμ°μ κ° μΉ μλ²μμ λΆλ €μ§ νμΌμ νμλ‘ ν λ, λΈλΌμ°μ λ HTTPλ₯Ό ν΅ν΄ νμΌμ μμ²­νλ€. μμ²­μ΄ μ¬λ°λ₯Έ μΉ μλ²(νλμ¨μ΄)μ λλ¬νμμ λ, HTTP μλ²λ μμ²­λ λ¬Έμλ₯Ό HTTPλ₯Ό μ΄μ©ν΄ λ³΄λ΄μ€λ€.  
![web server](./img/web_server.png)  
π https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_web_server
