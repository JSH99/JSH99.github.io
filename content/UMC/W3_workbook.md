---
emoji: π  
title: UMC 3μ£Όμ°¨ μν¬λΆ  
date: '2022-04-10'  
author: JSH99  
tags: gatsby git js diary umc  
categories: UMC
---

## UMC 3μ£Όμ°¨ μν¬λΆ
<br>

### λ³μ(Variable)  
- **`λ³μ`** : λ°μ΄ν°λ₯Ό μ μ₯νλ μμ
  - `const` : λ³νμ§ μλ λ°μ΄ν° κ° λ£μ λ μ¬μ©. ν λ² κ°μ ν λΉνλ©΄ μ¬ν λΉ ν  μ μλ€.
  - `let` : λ°μ΄ν° κ°μ΄ λ³ν  λ μ¬μ©.
  - **μ μΈ** : λ³μλ₯Ό μ μνλ κ²  
  ```javascript
  let str;
  ```
  - **μ΄κΈ°ν** : μ μν λ³μμ λ£λ μ²« λ²μ§Έ κ°
  ```javascript
  let str = 'μλ°μ€ν¬λ¦½νΈ';   
  ```
  - **μ¬ν λΉ** : μ΄λ―Έ κ°μ΄ μ‘΄μ¬νλ λ³μμ λ€μ κ°μ λ£λ κ²
  ```javascript
  let num = 3;
  num = 10;
  ```
<br><br>  

### μλ£ν(Data type)
- **`string`** : λ¬Έμμ΄
- **`number`** : μ«μ
- **`bigInt`** : ν° κ°μ μ«μ
- **`boolean`** : true, false
- **`symbol`** : μ€λ³΅λμ§ μλ κ³ μ κ°
- **`null`** : λΉμ΄μλ κ°. μλμ μΌλ‘(μλμ μΌλ‘) κ°μ΄ μμμ λνλΈλ€.
- **`undefined`** : λΉμ΄μλ κ°. μλμ μΌλ‘ κ°μ΄ μμμ λνλΈλ€.
- **`object`** : ν¨μ, λ°°μ΄, κ°μ²΄  
<br><br>

### μ°μ°μ(Operator)
- **`μ°μ  μ°μ°μ`** : +, -, /, *, %, **, ++, --
- **`ν λΉ(λμ) μ°μ°μ`** : =
- **`λ¬Έμμ΄ μ°μ°μ`** : +, +=
- **`λΉκ΅ μ°μ°μ`** : ==, ===(λ°μ΄ν° νμκΉμ§ λΉκ΅), !=, !==, >, <, >=, <=
```javascript
1 == '1' // true
1 === '1' // false
null != undefined // false
null !== undefined // true
```
- **`λΌλ¦¬ μ°μ°μ`** :
  - `&&` : μ‘°κ±΄ μ€ νλλΌλ falseμ΄λ©΄ **false**
  - `||` : λ κ°μ μ‘°κ±΄μ΄ λͺ¨λ falseμ¬μΌ **false**
  - `!` : λ°λ(λΆμ )  
<br><br>  

### λ°°μ΄(Array)
- **`λ°°μ΄`** : μ°κ΄μ± μλ κ°λ€μ λ¦¬μ€νΈ
  - **μ μΈ λ° μ΄κΈ°ν**
  ```javascript
  // 1. []
  const travel_spot = ['λ°©μ½', 'λ΄μ', 'νλ¦¬'];
  ```
  ```javascript
  // 2. new Array()
  const travel_spot = new Array('λ°©μ½', 'λ΄μ', 'νλ¦¬');
  ```
  ```javascript
  // 3. λΉ λ°°μ΄μ index μ΄μ©ν΄μ νλμ© μΆκ°
  const travel_spot = new Array();
  travel_spot[0] = "λ°©μ½";
  travel_spot[1] = "λ΄μ";
  travel_spot[2] = "νλ¦¬";
  ```
  - **μ κ·Ό**
  ```javascript
  const paris = travel_spot[2];
  console.log(paris); // "νλ¦¬"
  ```
  - **μΆκ° λ° μ­μ **
      - `push` : λ€μ μμ μΆκ°
    ```javascript
    travel_spot.push("ν λ‘ ν ", "νλ°±");
    console.log(travel_spot); // ["λ°©μ½", "λ΄μ", "νλ¦¬", "ν λ‘ ν ", "νλ°±"]
    ```
      - `unshift` : μμ μμ μΆκ°
    ```javascript
    travel_spot.unshift("λ°λ₯΄μλ‘λ");
    console.log(travel_spot); // ["λ°λ₯΄μλ‘λ", "λ°©μ½", "λ΄μ", "νλ¦¬", "ν λ‘ ν ", "νλ°±"]
    ```
      - `splice` : μνλ μ§μ μ μΆκ° λ° μ­μ  (μμ index, μ­μ νκ³  μΆμ μμμ κ°μ, μΆκ°νκ³  μΆμ μμλ€)
    ```javascript
    travel_spot.splice(4, 0, "λ©λ²λ₯Έ", "μνλ€");
    console.log(travel_spot); // ["λ°λ₯΄μλ‘λ", "λ°©μ½", "λ΄μ", "νλ¦¬", "λ©λ²λ₯Έ", "μνλ€", "ν λ‘ ν ", "νλ°±"]
    const result = travel_spot.splice(3, 3);
    console.log(travel_spot, result); // ['λ°λ₯΄μλ‘λ', 'λ°©μ½', 'λ΄μ', 'ν λ‘ ν ', 'νλ°±'], ['νλ¦¬', 'λ©λ²λ₯Έ', 'μνλ€']
    travel_spot.splice(1, 1, "μ΄μ€νλΆ", "νλΈμ΄");
    console.log(travel_spot); //  ['λ°λ₯΄μλ‘λ', 'μ΄μ€νλΆ', 'νλΈμ΄', 'λ΄μ', 'ν λ‘ ν ', 'νλ°±']
    ```
      - `pop` : λ€μμ μμ μ­μ 
    ```javascript
    const result1 = travel_spot.pop();
    console.log(travel_spot, result1); // ['λ°λ₯΄μλ‘λ', 'μ΄μ€νλΆ', 'νλΈμ΄', 'λ΄μ', 'ν λ‘ ν '], "νλ°±"
    ```
      - `shift` : μμμ μμ μ­μ   
    ```javascript
    const result2 = travel_spot.shift();
    console.log(travel_spot, result2); // ['μ΄μ€νλΆ', 'νλΈμ΄', 'λ΄μ', 'ν λ‘ ν '], "λ°λ₯΄μλ‘λ"
    ```  
<br><br>  

### κ°μ²΄(Object)
- **`κ°μ²΄`** : key - value ννλ‘ μ μ₯νλ κ°
  - `property` : κ°μ²΄ λ΄μ λ°μ΄ν°
  - `method` : κ°μ²΄ λ΄μ ν¨μ  
  βοΈkey κ°μ νΉμ λ¬Έμλ κ³΅λ°±μ΄ μμ κ²½μ°μλ λ¬Έμμ΄μ νν(ββ)λ‘ μμ±ν΄μΌ νλ€.
  - **μμ±**
  ```javascript
  // 1. κ°μ²΄ μμ±
  const pooh = {
          name: "pooh",
          species: "bear",
          job: "disney character",
          gender: "boy",
          "say-Hi": function () {
             console.log("I'm winnie the pooh, What's your name?");
          },
  };
  ```
  ```javascript
  // 2. λΉ κ°μ²΄ μμ± ν κ° μΆκ°
  const obj = new Object(); // μμ±μ ν¨μ
  console.log(obj); // {}
  obj.name = 'dwell';
  obj.greeting = function() {
          console.log('hi');
  }
  ```
  ```javascript
  // 3. κ°μ²΄ μμ±(μμ±μ ν¨μ μ¬μ©)
  const obj = new Object({
          name: "dwell",
          greeting: function () {
            console.log("hi");
          },
  });
  ```
  - **μ κ·Ό**
  ```javascript
  // 1. .
  console.log(pooh.species); // "bear"
  console.log(pooh.say-Hi); // μ€λ₯ -> κ³΅λ°±μ΄λ νΉμλ¬Έμκ° λ€μ΄κ°μ λλ []λ‘ μ κ·Όν΄μΌ νλ€.
  ```
  ```javascript
  // 2. []
  console.log(pooh['species']);
  console.log(pooh['say-Hi']()); // ν¨μ μ€ν
  ```
  - **μΆκ° λ° μ­μ **
  ```javascript
  // property μΆκ°
  pooh.favorites = ["honey", "friends", "cake"];
  ```
  ```javascript
  // method μΆκ°
  pooh["say-Bye"] = function () {
          console.log("I'm winnie the pooh, See you later");
  };
  ```
  ```javascript
  // μ­μ 
  delete pooh.favorites;
  ```
  - **`μμ±μ ν¨μ`** : `ν` μ­ν , κ°μ²΄λ₯Ό μμ±ν΄μ£Όλ ν¨μ.  
  μμ±μ ν¨μλ₯Ό ν΅ν΄ λ§λ€μ΄μ§ κ°μ²΄λ₯Ό `μΈμ€ν΄μ€` λΌκ³  νλλ°, κ°κ°μ μΈμ€ν΄μ€λ₯Ό κ°λ¦¬ν¬ λ `this` λ₯Ό μ¬μ©νλ€.
  ```javascript
  function Character(name, species, job, gender) {
          this.name = name;
          this.species = species;
          this.job = job;
          this.gender = gender;
          this["say-Hi"] = function () {
            console.log(`I'm ${this.name}, What's your name?`);
          };
          this["say-Bye"] = function () {
            console.log(`I'm ${this.name}, See you later`);
          };
  }
  ```
  - **μΈμ€ν΄μ€ μμ±**
  ```javascript
  const winnie_the_pooh = new Character("winnie the pooh", "bear", "disney character", "boy");
  const snoopy = new Character("snoopy", "dog", "comic book character", "boy");
  const pikachu = new Character("pikachu", "squirrel", "pokemon character", "boy");
  ```  
  - **λ©μλ νΈμΆ**
  ```javascript
  console.log(winnie_the_pooh["say-Hi"]()); // "I'm winnie the pooh, What's your name?"
  console.log(snoopy["say-Bye"]()); // "I'm snoopy, See you later"
  console.log(pikachu["say-Bye"]()); // "I'm pikachu , See you later"
  ```
<br><br>  

### ν¨μ(Function)
<img src="./img/function.jpg" width="400" height="330"/>  

- **`ν¨μ`** : input κ°(μΈμ)μ΄ μ΄λ€ function(κΈ°λ₯)μ κ±°μ³ output(λ°νκ°)μΌλ‘ μΆλ ₯λλ€.
    - `μ»¨λ²€μ` : μ΄λ¦λ§ λ³΄κ³  ν¨μμμ μνλλ κΈ°λ₯μ μ μ μλλ‘ μ΄λ¦μ μ§μ νλ κ·μΉ
    - **μ μΈ**
    ```javascript
    function multiply10 (num) {
          const result = num * 10;
          return result;
    }
    ```
    - **νΈμΆ**
    ```javascript
    const data = multiply10(10);
    console.log(data); // 100
    ```
<br>  

- **`νμ΄ν ν¨μ`** : λΆνμν κ²μ μλ΅νμ¬ κ°λ¨νκ² μμ±ν  μ μλ€.
```javascript
const multiply10 = (num) => num * 10;
const multiply10 = num => num * 10; // μΈμκ° νλμΌ λλ κ΄νΈ μλ΅ κ°λ₯
const data = multiply10(100);
console.log(data); // 1000
```
<br><br>  

### μ‘°κ±΄λ¬Έ
- **`ifλ¬Έ`** : μ‘°κ±΄μ΄ μ°ΈμΌ λ ifλ¬Έ λ΄μ μ½λκ° μ€νλλ μ‘°κ±΄λ¬Έ
  - **falseλ‘ νλ³λλ κ°** : 0, -0, null, false, NaN, undefined, ββ  
  β μ΄μΈμ κ°μ λͺ¨λ trueμ΄λ€.
  ```javascript
  if ( age > 19 ) {
          console.log('μ μ λ§μ€ μ μλ€');
  }
  ```
  - `else if` : μ‘°κ±΄μ΄ μ¬λ¬ κ°μΌ λ else ifλ₯Ό μ€μ²©ν΄μ μ¬μ©ν  μ μλ€. μ‘°κ±΄ μ€μ νλλΌλ λ§μ‘±νλ©΄ μ½λλ₯Ό μ€ννκ³  μ‘°κ±΄λ¬Έμ μ’λ£νλ€.
  ```javascript
  if(age >= 70) {
          console.log('λΈμΈ');
  } else if (age >= 60) {
          console.log('60λ');
  } else if (age >= 50) {
          console.log('50λ');
  } else if (age >= 40) {
          console.log('40λ');
  } else if (age >= 30) {
          console.log('30λ');
  } else if (age >= 20) {
          console.log('20λ');
  } else if (age >= 10) {
          console.log('10λ');
  } else {
          console.log('μ κΈ°');
  }
  ```
<br>  

- **`μΌν­ μ°μ°μ`** : μ‘°κ±΄ ? μ°ΈμΌλ μ€νλ  μ½λ : κ±°μ§μΌλ μ€νλ  μ½λ
  ```javascript
  const result = age > 19 ? 'μ μ λ§μ€ μ μλ€':  'λ―Έμ±λμ';
  ```
<br>  

- **`switchλ¬Έ`** : λμμ΄ λλ λ³μ κ°μ caseλ‘ μμ±νμ¬ ν΄λΉλλ μ½λλ₯Ό μ€ννλ€. case κ°μ μ‘°κ±΄λ¬Έμ΄ μλ λ¨μΌ βκ°'μ΄μ΄μΌ νλ€. μ‘°κ±΄ μ€μ λ§μ‘±νλ caseλΆν° λκΉμ§ μ½λλ₯Ό μ€ννλ©°, μ΄κ²μ λ°©μ§νκΈ° μν΄ break λ₯Ό μ¬μ©νλ€.  
  ```javascript
  switch (age) {
    case 70:
      console.log("70λ");
      break;
    case 60:
      console.log("60λ");
      break;
    case 50:
      console.log("50λ");
      break;
    case 40:
      console.log("40λ");
      break;
    case 30:
      console.log("30λ");
      break;
    case 20:
      console.log("20λ");
      break;
    case 10:
      console.log("10λ");
      break;
    default:
      console.log("μ κΈ°");
  }
  ```
<br><br>  

### λ°λ³΅λ¬Έ
- **`forλ¬Έ`** : **for ( μ΄κΈ°κ° ; μ’λ£μ‘°κ±΄ ; μ¦κ°) { μ€νν  μ½λ }**
```javascript
const numArr = [45, 32, 11, 98, 22];
for(let i = 0; i < numArr.length ; i++) {
      numArr[i] += 10;
}
console.log(numArr); // [55, 42, 21, 108, 32]
```
<br> 

- **`whileλ¬Έ`** : **while (μ‘°κ±΄) { μ½λ; μ¦κ°; }**  
```javascript
const numArr = [45, 32, 11, 98, 22];
let i = 0;
while(i < numArr.length) {
      numArr[i] += 10;
      i++;
}
console.log(numArr); // [55, 42, 21, 108, 32]
```
  - `break` & `continue`
    ```javascript
    let i = 1;
    while(true) {
          if(i > 10) {
            break; // iκ° 10μ μ΄κ³Όνλ©΄ λ°λ³΅λ¬Έμ λ©μΆλ€.
          }
          i++;
          if(i%2 !== 0) {
            continue; // iκ° νμμ΄λ©΄ λ€μλ μ½λλ₯Ό μ€ννμ§ μκ³  λ€μ λ°λ³΅λ¬ΈμΌλ‘ λμ΄κ°λ€.
          }
          console.log(i) // 2 4 6 8 10
    }
     ```
<br>  
  
- **`do whileλ¬Έ`** : **do { μ€νν  μ½λ } while (μ‘°κ±΄)**  
  μ‘°κ±΄κ³Ό μκ΄ μμ΄ μ½λκ° ν λ² μ€νλκ³  λμ, μ‘°κ±΄μ νμΈν ν trueμΌ κ²½μ° λ°λ³΅νλ€. ν λ²μ΄λΌλ μ½λλ₯Ό μ€νν΄μΌ ν  λ μ¬μ©νλ€.
  ```javascript
  let i = 12;
  do {
      console.log(i); // 12
      i++;
  } while (i < 11);
  ```