---
emoji: ๐ฆ  
title: javascript ๋ฐ๋ณต๋ฌธ  
date: '2022-02-08'  
author: JSH99  
tags: gatsby git js  
categories: JS
---

## ๋ฐ๋ณต๋ฌธ
<br>

### while๋ฌธ
**while**์ ์กฐ๊ฑด์์ด ์ฐธ์ธ ๋์ ๋ฐ๋ณตํด์ ๋์๋ฌธ์ ์คํํ๋ค. โ**while (์กฐ๊ฑด์) ๋์๋ฌธ;**'์ ํํ๋ก ์์ฑํ๋ฉฐ ๋์๋ฌธ์ด ์ฌ๋ฌ ์ค์ผ ๊ฒฝ์ฐ {}๋ก ๊ฐ์ผ๋ค. while๋ฌธ์ ์ฌ์ฉํ  ๋๋ ๋ฌดํ ๋ฐ๋ณต์ด ๋์ง ์๋๋ก ์ฃผ์ํด์ผ ํ๋ค.
```javascript
let i = 0;
while (i <= 100) {
	console.log('Hello, World!');
	i++;
}
```
<br>

### for๋ฌธ
**for**์ โ**for (์์; ์กฐ๊ฑด์; ์ข๋ฃ์) ๋์๋ฌธ;**โ์ ํํ๋ก ์์ฑํ๋ค. ์์์ ์ฒ์ ํ ๋ฒ๋ง ์คํ๋๊ณ , ์กฐ๊ฑด์, ๋์๋ฌธ, ์ข๋ฃ์ ์์๋๋ก ๋ฐ๋ณต๋์ด ์คํ๋๋ค.
```javascript
for (let i = 0; i < 100; i += 2) {
	console.log(i+1);
}
```
<br>

**์ค์ฒฉ**์ ์ฌ์ฉํ์ฌ ๋ฐ๋ณต๋ฌธ์ ์ค๊ดํธ ์์ ๋ค๋ฅธ ๋ฐ๋ณต๋ฌธ์ ์ธ ์ ์๋ค.
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

### continue & break๋ฌธ
**continue**&**break**์ ์ฌ์ฉํ๋ฉด ํน์  ์กฐ๊ฑด์์ ์คํ๋๊ฑฐ๋ ๋ฐ๋ณต๋ฌธ์ ๋ฉ์ถ ์ ์๋ค.
```javascript
let i = 0;
while (i < 10) {
	i++;
	if (i % 2 === 0) 
		continue; // i๊ฐ 2์ ๋ฐฐ์์ด๋ฉด ์คํํ์ง ์๊ณ  ๊ฑด๋๋ด๋ค.
	console.log(i);
}
```
```javascript
let i = 0;
while (i <= 100) {
	if (i === 5) 
		break; // i์ ๊ฐ์ด 5๊ฐ ๋๋ฉด ๋ฐ๋ก ๋ฐ๋ณต๋ฌธ์ ๋ฉ์ถ๋ค.
	i++;
}
```