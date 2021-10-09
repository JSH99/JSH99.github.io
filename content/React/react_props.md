---
emoji: 👩‍👦
title: [React] component props
date: '2021-10-09'
author: JSH99
tags: gatsby react
categories: React
---

## component props
<br>
리액트 공부를 제대로 하지 않고 개발을 시작하니 어려움이 많았다.
component의 개념도 낯설고 사용하는 방법도 잘 모르겠더라...  
컴포넌트가 리액트를 쓰는 이유인데 모르는 게 말이 안 되지!라는 생각에 공부를 차근차근 해보고자 한다!  

리액트의 컴포넌트는 **props**와 **state**로 나뉜다.
props는 부모 컴포넌트의 값을 자식 컴포넌트로 넘겨주는 값으로서, 자식 컴포넌트에서 값을 수정할 수는 없다.
(나중에 state 내용도 정리해서 올려야겠다.)  
<br>


**부모 컴포넌트**
```javascript
    import ChlidComponent from './ChildComponent'

    function ParentComponent() {
	  return (
	    <ChildComponent name="sseo" />
      );
    }
```
자식에게 넘겨주고 싶은 값을 부모 컴포넌트로 만들어준다.  
<br>


**자식 컴포넌트**
```javascript
    function ChildComponent(props) {
      return (
        <h1>Hello, {props.name}</h1>
      );
    }
```

부모에서 받아온 props는 객체 형태로 전달되므로 값을 조회하고 싶으면 **props.속성명**과 같은 형태로 조회한다.

```javascript
    function ChildComponent({name}) {
      return (
        <h1>Hello, {name}</h1>
      );
    }
```

자식 컴포넌트에서 부모 컴포넌트 값을 받아오는 방식은 여러 가지가 있는데, 이 방법은 함수형으로 작성하는 방법으로써 더욱 간결하게 작성할 수 있다.

![](img/props_result.png)

props를 사용하여 값을 잘 받아온 것을 확인할 수 있다.  
앞으로 상위 컴포넌트에서 값을 받아올 때 유용하게 잘 사용해야겠다!!! (｡•̀ᴗ-)✧