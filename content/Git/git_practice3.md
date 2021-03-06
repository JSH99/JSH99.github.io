---
emoji: ๐ธ๏ธ     
title: Git & GitHub ์ค์ต - ๋ธ๋์น์ ํ์       
date: '2022-07-03'   
author: JSH99  
tags: gatsby git js diary umc  
categories: Git
---

## Git & GitHub ์ค์ต - ๋ธ๋์น & ํ์
<br><br>

### branch
๊ฐ์ ๋ธ๋์น์์ ๋ฐ๋ก ๊ฐ๋ฐํ ํ merge(๋ณํฉ)ํ๋ ๊ฒ์ด ๋ ํธ๋ฆฌํ๋ค. ์ด๋ mergeํด๋ฌ๋ผ๋ ์์ฒญ์ด pull request์ด๋ค. PR์ ์๋ฝํ๋ฉด ๋ธ๋์น๊ฐ ํฉ์ณ์ง๋ฉด์ merge๊ฐ ๋๋ค.  

![git branch](./img/git_branch.png)  
<br>

- **branch ๋ชฉ๋ก**  
  ํ์ฌ ์์ฑ๋์ด ์๋ ๋ธ๋์น์ ๋ชฉ๋ก์ ๋ณธ๋ค.  
 ```bash
 git branch
 ```
![git branch](./img/git_branch_.png)  
<br>

- **branch ์์ฑ**   
  new_branch๋ผ๋ ์๋ก์ด ๋ธ๋์น๋ฅผ ๋ง๋ ๋ค.  
 ```bash
 git branch new_branch
 ```
![git branch new](./img/git_branch_new.png)  
<br>

- **branch ์ด๋**  
  branch_name์ด๋ผ๋ ๋ธ๋์น๋ก ์ด๋ํ๋ค.  
 ```bash
 git checkout branch_name
 ```  
![git checkout](./img/git_checkout.png)  
<br>

- **branch push**  
  ํน์  ๋ธ๋์น๋ฅผ ๊นํ๋ธ์ ํธ์ํ๋ค. (๋ก์ปฌ โก๏ธ ๊นํ๋ธ)   
 ```bash
 git push origin branch_name
 ```
<br><br>

- **branch pull**  
  ๋ธ๋์น๋ฅผ ๊นํ๋ธ์์ ๊ฐ์ ธ์์ ์ต์ ํํ๋ค.  (๊นํ๋ธ โก๏ธ ๋ก์ปฌ)  
 ```bash
 git pull origin branch_name
 ```
<br><br>

- **branch ๋ณํฉ**   
  ํฉ์ณ์ฃผ๊ณ  ์ถ์ ๋ธ๋์น๋ฅผ ์ ํํ์ฌ pull request๋ฅผ ํตํด ์์ฒญ์ ํ๊ณ  ์ถฉ๋์ด ์๋ค๋ฉด ์ปจํํ์ฌ mergeํ  ์ ์๋ค.  

  ![git branch merge](./img/git_merge1.png)  

  ![git branch merge](./img/git_merge2.png)  

  ![git branch merge](./img/git_merge3.png)  

  ![git branch merge](./img/git_merge4.png)  
  <br><br><br>

### ํ์
- **`branch`**   

  ์๋ณธ ๋ฆฌํฌ์งํ ๋ฆฌ ํด๋ก  โ ๋ธ๋์น ์์ฑ โ ๊ฐ์ ๋ธ๋์น์์ ๊ฐ๋ฐ โ PR(์์ฒญ) โ Approve(๋์) / Confirm(์๋ฝ) โ ๋ธ๋์น merge  
  <br>

- **`fork`**  

  = ๋จ์ ๋ฆฌํฌ์งํ ๋ฆฌ๋ฅผ ๋ด ๋ฆฌํฌ์งํ ๋ฆฌ์ ๊ทธ๋๋ก ๋ณต์ ํ๋ ๊ฒ  
  ์๋ณธ ๋ฆฌํฌ์งํ ๋ฆฌ ํฌํฌ โ ํฌํฌํด์จ ๋ด ๋ฆฌํฌ์งํ ๋ฆฌ ํด๋ก  โ ๊ฐ๋ฐ โ  PR(์์ฒญ) โ ์๋ณธ ๋ฆฌํ ์งํ ๋ฆฌ ์ ์ ์ Confirm(์๋ฝ) โ merge  
  <br><br><br>

### Slack
- **์๋ฌด ํ์ ๋ฉ์ ์ **, ๊ฐ๋ฐ ๋๊ตฌ์ ์ฐ๋ ๊ฐ๋ฅ  
- ๊นํ๋ธ์ commit, PR ๋ฑ ๋ณ๊ฒฝ์ฌํญ โ slack ์๋ฆผ  
<br>

**์ฐธ๊ณ  ๊ฐ์**  
https://www.inflearn.com/course/%EC%8B%A4%EC%A0%84-%EA%B9%83-%EA%B9%83%EB%A6%B0%EC%9D%B4%EC%BD%94%EC%8A%A4#