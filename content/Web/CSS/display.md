---
emoji: 📚
title: '[Web] CSS - display'
date: '2023-07-27'
author: JSH99
tags: Web CSS
categories: Web
---

# display

태그는 컨텐츠 크기와 상관 없이 한 줄을 차지하는 태그인 `block` 요소와 컨텐츠 크기만큼 차지하는 태그인 `inline` 요소가 있다. 너비와 높이를 지정해주는 width, height 속성은 block 요소만 사용 가능하다. inline 요소는 적용해도 변화가 없다. 이런 특성을 변경해주는 속성이 **`display`**이다.  
<br><br>

## 정의

### block

컨텐츠 크기와 상관 없이 한 줄을 차지. 너비와 높이를 지정할 수 있다.

- p, div, ul, li, h1-h6

<br>

### inline

컨텐츠 크기만큼 차지. width, height 속성을 적용해도 변화가 없다.

- span, a, img, button

<br>  
⇒ 이러한 block, inline 요소 특성을 변경해주는 속성이 `display`이다.
<br><br>

> display CSS 속성은 요소를 블록과 인라인 요소 중 어느 쪽으로 처리할지와 함께, 플로우, 그리드, 플렉스처럼 자식 요소를 배치할 때 사용할 레이아웃을 설정합니다.

<br><br><br>

## 속성

### 외부 속성

- **`none`** : 요소를 사라지게 한다.
- **`inline`** : block 요소를 inline 요소처럼 사용한다.
- **`block`** : inline 요소를 block 요소처럼 사용한다.
- **`inline-block`** : inline과 block이 합쳐진 것으로, inline처럼 한 줄에 여러 요소들을 둘 수 있고 block처럼 width와 height를 지정할 수 있다.

<br><br>

### 내부 속성

- **`flow`** : 블록 및 인라인 레이아웃을 사용하여 콘텐츠를 배치한다.
- **`flow-root`** : 서식 루트가 있는 위치를 정의하는 새 블록 서식 컨텍스트를 설정하는 블록 요소 상자를 생성한다.
- **`table`** : HTML `<table>`요소처럼 작동한다.
- **`flex`** : 요소는 블록 요소처럼 동작하며 flex box 모델에 따라 콘텐츠를 배치한다.
- **`grid`** : 블록 요소처럼 동작하며 그리드 모델 에 따라 콘텐츠를 배치한다.

<br><br><br>

**references**  
👉 https://developer.mozilla.org/en-US/docs/Web/CSS/display
