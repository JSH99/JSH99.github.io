---
emoji: ๐ธ๏ธ     
title: Git & GitHub ์ค์ต - ๋ก์ปฌ๊ณผ ์๊ฒฉ       
date: '2022-07-02'   
author: JSH99  
tags: gatsby git js diary umc  
categories: Git
---

## Git & GitHub ์ค์ต - ๋ก์ปฌ & ์๊ฒฉ
<br><br>

### Local & Remote
- **`Local`** : ๋ด ์ปดํจํฐ
- **`Remote`** : ๋ค๋ฅธ ์ฌ๋ ์ปดํจํฐ  

  ![Local & Remote](./img/local_remote.jpeg)
  <br><br><br>

### local โก๏ธ remote
1. **github repository ์์ฑ**  
   github์์ ์ ๋ฆฌํฌ์งํ ๋ฆฌ๋ฅผ ์์ฑํ๋ค.
   ![create repositoty](./img/create_repo.png)
   <br>

2. **git remote add origin ๋ฆฌํฌ์งํ ๋ฆฌ**  
   ๋ฆฌํฌ์งํ ๋ฆฌ์ ๋ด ๋ก์ปฌ ํด๋๋ฅผ ์ฐ๊ฒฐํ๋ค.
 ```bash
 git remote add origin repository_address
 ```
![remote add origin](./img/add_remote.png)
<br>

3. **git push origin main**  
   github ๋ฆฌํฌ์งํ ๋ฆฌ mian ๋ธ๋์น์ ํ์ฌ ์ปค๋ฐ๋ค์ ๋ฃ๋๋ค. **(๋ก์ปฌ โ ์๋ฒ)**
 ```bash
 git push origin main
 ```
![git push](./img/git_push.png)  
![git pushed](./img/git_push2.png)
<br><br><br>

### local โฌ๏ธ remote

1. **git clone**  
   github ๋ฆฌํฌ์งํ ๋ฆฌ์์ ๋ชจ๋  ์ปค๋ฐ๋ค์ ๋ด ๋ก์ปฌ๋ก ๊ฐ์ ธ์จ๋ค.
```bash
git clone repository_address
```
![git clone](./img/git_clone.png)
<br>

2. **git pull origin main**  
   ์๋ฒ์์ ๋ณ๊ฒฝ์ฌํญ์ด ์ผ์ด๋ ๊ฒ์ ๋ก์ปฌ๋ก ๋๊ธฐํํ๋ค. **(์๋ฒ โ ๋ก์ปฌ)**
 ```bash
 git pull origin main
 ```
![git pull](./img/git_pull.png)  
![git pulled](./img/git_pull2.png)
<br><br><br>

### .gitignore
์ฌ๋ฆฌ๊ณ  ์ถ์ง ์์ ํ์ผ์ ํฌํจํ ํ์ผ
.gitignore.io ํํ์ด์ง ํ์ฉ  

![gitignore](./img/gitignore.png)
<br><br><br>

### pro์ค์ โจ
โ ๋ค์ํ ํํ ์ ๊ณต, ๋ํ์์๊ฒ๋ ๋ฌด๋ฃ!
![git pro](./img/git_pro.png)  
<br><br>  

**์ฐธ๊ณ  ๊ฐ์**  
https://www.inflearn.com/course/%EC%8B%A4%EC%A0%84-%EA%B9%83-%EA%B9%83%EB%A6%B0%EC%9D%B4%EC%BD%94%EC%8A%A4#