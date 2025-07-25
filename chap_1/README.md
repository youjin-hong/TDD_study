캡스톤 주제가 "테스트 자동화"인데, 정작 테스트에 대해 전혀 알지 못하는 I am babo.. 그래서 이번 시간에는 React가 무엇인지, 역사에 대해 간단하게 살펴본 후, 리액트 프로젝트를 만들고 테스트 실행환경을 준비해보려 합니다.

---

## ✨ 1. 리액트란?

### <span style="background-color:lavender">Javascript의 역사</span>

React는 Javascript 언어를 기반으로 동작하는 **"라이브러리"** 입니다. 그래서 React를 이해하기 위해서는 기본적으로 Javascript에 대한 이해가 필요한데요, 그러기 위해 우선 Javascript를 만들었고 이 언어에 큰 영향을 끼친 넷스케이프 커뮤니케이션즈라는 회사에 대해 알아보겠습니다.

**<span style="background-color:#eaeaea">[웹 브라우저의 시작 (1990년대 초)]</span>**

- **최초의 웹 브라우저**
  1990년에 팀 버너스리가 최초의 웹 브라우저 '월드와이드웹' 개발 (후에 '넥서스'로 개명)했고,
  1993년에는 일리노이 대학교에서 최초의 대중적 그래픽 웹 브라우저 'NCSA 모자이크' 출시했습니다.
- **넷스케이프의 탄생**
  마크 앤드리센은 모자이크 프로젝트의 핵심 개발자였지만, 알바생이라는 이유로 정당한 평가를 받지 못했습니다. 이에 실리콘밸리로 떠나 440만 달러 투자를 받아
  '모자이크 커뮤니케이션'을 설립했지만, 특허 침해 소송으로 인해 회사명을 넷스케이프 커뮤니케이션즈로 변경하고 300만 달러의 합의금을 지불해야 했는데요.
  1994년 10월, 넷스케이프 네비게이터를 출시하여 3개월 만에 200만 다운로드 달성하는 쾌거를 이뤘습니다.
  <br />

**<span style="background-color:#eaeaea">[Javascript의 탄생 (1955년)]</span>**

- **개발 배경**
  1995년 당시 약 90%의 시장 점유율을 가진 넷스케이프는 정적인 HTML을 동적으로 표현할 경량 프로그래밍 언어의 필요성을 느껴 Brendan Eich가 단 10일 만에 JavaScript의 초기 버전인 '모카(Mocha)'를 개발했습니다.

> **언어명 변천사**

- 1995년 5월: 모카 (Mocha)
- 1995년 9월: 라이브스크립트 (LiveScript)
- 1995년 12월: 자바스크립트 (Javascript)

> **Javascript의 특징과 여러 언어에서 받은 영향**
> Javascript는 많은 언어로부터 영감을 받아 만들어졌습니다.

- **Lisp**: 변수 스코프, 클로저
- **Self**: 프로토타입 상속
- **Java**: 문법 구조

<br/>

**<span style="background-color:#eaeaea">[브라우저 전쟁과 표준화 (1995-1997년)]</span>**

- **경쟁의 시작**
  넷스케이프 네비게이션 브라우저의 흥행과 함께 Javascript 언어가 크게 유행하자,
  당시 경쟁사였던 마이크로소프트는 Javascript와 호환되는 Jscript라는 언어를 개발하여 인터넷 익스플로러 3.0에 탑재했습니다. 이로써 Javascript와 JScript 간의 경쟁 구도가 형성되었는데요.
  넷스케이프 네비게이터가 당시 브라우저 시장 점유율의 약 90%를 차지하고 있었음에도 불구하고, 마이크로소프트는 자사의 OS인 윈도우에 인터넷 익스플로러를 번들로 포함하여 판매하며 점유율을 점차 잠식해 나가기 시작했습니다.

- **크로스 브라우징 이슈**
  이렇게 두 브라우저가 경쟁을 하며 각자 독자적인 스펙을 점점 추가하면서 호환성 문제가 심화되었고, 개발자들은 양쪽 브라우저 모두에서 동작하는 웹 페이지 개발에 큰 어려움을 겪게 되었습니다.

- **ECMAScript의 탄생**
  1996년 11월, 넷스케이프 커뮤니케이션즈는 비영리 표준화 기구인 ECMA 인터내셔널에 JavaScript 표준화를 요청했습니다. 그 결과, 1997년 7월 ECMA 인터내셔널은
  ECMA-262라 불리는 표준화된 JavaScript 초판(ECMAScript 1) 명세서를 완성했습니다. 하지만 JavaScript의 상표권 문제로 인해 이 표준은 ECMAScript로 명명되었고, 이것이 오늘날 우리가 알고 있는 ECMAScript의 탄생 배경입니다.

하지만 비영리 표준화 기구의 표준화된 명세서는 큰 힘이 없었으며, 크로스 브라우징 이슈와 Javascript, Jscript를 사용한 브라우저의 DOM 조작 문제는 해결되지 않았습니다.

<br />

**<span style="background-color:#eaeaea">[jQuery의 시대 (2006년)]</span>**
이런 불편함을 해결하기 위해 2006년 jQuery가 등장했는데요. jQeury는 다음과 같은 장점으로 큰 인기를 끌게 됩니다.

- 크로스 브라우징 이슈 해결
- Javascript보다 쉽고 직관적인 API 제공
- DOM 조작의 표준으로 자리 잡음
  <br/>

**<span style="background-color:#eaeaea">[웹 애플리케이션 시대의 확장]</span>**

- **아이폰과 안드로이드의 등장으로 인한 영향**
  아이폰과 안드로이드의 등장으로 "애플리케이션"의 개념이 확장되면서, 웹에서도
  "웹 애플리케이션"이라는 개념과 이에 대응하는 서비스들이 쏟아져 나오기 시작했습니다.

- **AngularJS의 등장 (2010년)**
  구글이 이런 웹 애플리케이션 트렌드에 대응하여 AngularJS라는 웹 애플리케이션 프레임워크를 출시하게 됩니다. AngularJS는 다음과 같은 개념들을 도입했습니다.
  - Single Page Application (SPA)
  - MV (Model-View-Whatever)
  - 양방향 데이터 바인딩

하지만, 그 당시 AngularJS는 jQuery 기반으로 하고 있고, SPA를 모두 다루는 프레임워크로써 너무 많은 변화와 개념으로 많은 개발자의 큰 러닝 커브를 겪게 했습니다.
<br />

**<span style="background-color:#eaeaea">[React의 등장 (2011-2013년)]</span>**

- **개발 배경**
  2011년, 페이스북 개발자 Jordan Walke가 PHP용 컴포넌트 프레임워크 XHP에서 영감을 받아 React를 개발했습니다.

> **적용 과정**

- 2011년: 페이스북 뉴스피드에 첫 적용
- 2012년: 인스타그램닷컴에 적용
- 2013년 5월: JSConfUS에서 오픈소스로 공개하며 React의 역사 시작

- **React의 특징과 차별점**
  Angular는 "프레임워크"인 반면, React는 UI "라이브러리"로 출시되었습니다.

> **새로운 언어에 가깝다는 평일 받던 Angular와 구별되는 React의 핵심 특징**

- JSX (Javascript XML): HTML을 Javascript에 포함하는 간단한 문법
- 단방향 데이터 바인딩: Angular의 양방향 바인딩 문제점 보완
- 가상 DOM: 성능 최적화의 새로운 접근

> **장단점**
> 💚 Javascript 라이브러리 -> Angular보다 러닝 커브 낮음
> 💚 가상 DOM 개념 도입으로 웹 애플리케이션의 성능 극대화 (브라우저 렌더링 과정 이해 필요)
> ❤️ 프레임워크 x, 라이브러리 o -> 부족한 부분을 채우기 위해 다른 라이브러리들과 함께 사용해야 함 (eg. 페이지 전환을 위해 react-router 라이브러리 사용 필수)

<br />

### <span style="background-color:lavender">React 특징</span>

**<span style="background-color:#eaeaea">[브라우저 렌더링 과정]</span>**

![](https://velog.velcdn.com/images/so356hot/post/5666fa78-e55d-4751-9c36-a2562e797f41/image.png)

브라우저는 HTML을 파싱해 DOM 트리를 생성하고, CSS를 파싱해 스타일 정보를 가진
렌더 트리를 만듭니다. 이후 Attachment 과정을 통해 스타일 정보를 계산하고,
Layout 과정에서 각 노드의 좌표를 결정하며, 마지막으로 Painting 과정을 통해 화면에 색상을 입힙니다.

![](https://velog.velcdn.com/images/so356hot/post/4a9f23ca-cf84-41bf-b39c-60beb8e78827/image.png)

JavaScript를 통해 DOM을 조작하면 Layout(Reflow)과 Painting(Repaint) 과정이 다시 수행되는데, 이는 많은 연산을 필요로 하므로 성능 이슈가 발생할 수 있습니다. 특히 SPA처럼 DOM 변경이 빈번한 웹 사이트에서는 이런 문제가 더욱 심화된다고 합니다.

<br />

**<span style="background-color:#eaeaea">[React의 해결책: 가상 DOM]</span>**
React는 화면에 표시되는 DOM과 동일한 DOM을 메모리상에 만들어 놓고, DOM 조작이 발생하면 먼저 가상 DOM에서 모든 연산을 수행한 후, 실제 DOM을 한 번에 갱신하여 Reflow와 Repaint 연산을 최소화합니다.

<br />

### <span style="background-color:lavender">단방향 데이터 바인딩</span>

SPA의 대표적인 프레임워크인 Angular와 Vue는 양방향 데이터바인딩을 사용합니다.

![](https://velog.velcdn.com/images/so356hot/post/91267ca2-1aa8-4b80-8119-ce8f67ba33ad/image.png)

Angular과 Vue 같은 프레임워크는 양방향 데이터 바인딩을 사용합니다. 이는 UI 데이터 변경을 감시하는 Watcher와 JavaScript 데이터 변경을 감시하는 Watcher를 통해 UI와 프로그램 데이터를 자동으로 동기화합니다.
하지만 양방향 데이터 바인딩은 다음과 같은 문제점이 있습니다:

- 데이터 하나에 두 개의 Watcher가 필요해 오버 스펙 가능성 존재
- 수많은 Watcher로 인한 성능 저하 가능성 존재

![](https://velog.velcdn.com/images/so356hot/post/9c7d9ef4-3aab-4c24-8649-338e9029128c/image.png)

React는 단 하나의 Watcher가 JavaScript의 데이터 갱신을 감지해 UI 데이터를 갱신합니다. 사용자가 UI를 통해 데이터를 갱신할 때는 Watcher가 아닌 Event를 통해 데이터를 갱신합니다.
이런 방식의 장점:

- 양방향 데이터 바인딩의 문제점 해결
- 더 확실한 데이터 추적 가능
- Flux 개념과 함께 데이터 흐름이 한쪽으로만 진행되도록 보장

<br />

### <span style="background-color:lavender">JSX (JavaScript XML)</span>

JSX는 JavaScript와 HTML을 동시에 사용할 수 있는 템플릿 언어입니다.
HTML에 JavaScript 변수들을 바로 사용할 수 있어 직관적인 UI 개발이 가능합니다.

```javascript
const App = () => {
  const hello = "하이 헬로 JSX~!";
  return <div>{hello}</div>;
};
```

JSX는 다른 언어의 템플릿 언어와 유사합니다. 예를 들어 Java의 JSP에서 `<div><%= hello %></div>`와 같이 HTML 태그 안에서 변수를 사용하는 것과 비슷한 개념입니다.
이미 우리는 많은 언어에서 템플릿 언어를 사용하고 있습니다. 이처럼 JSX도 Javascript 일종의 템플릿 문법이라고 기억하면 쉽게 이해할 수 있을 것 같습니다.

### <span style="background-color:lavender">선언형 프로그래밍</span>

- 명령형 프로그래밍: "어떻게(How)"에 집중, 과정을 중심으로 하는 프로그래밍
- 선언형 프로그래밍: "무엇(What)"에 집중, 결과를 중심으로 하는 프로그래밍

```javascript
// 명령형 프로그래밍
const double = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};

// 선언형 프로그래밍
const double = (arr) => {
  return arr.map((element) => element * 2);
};
```

```javascript
// javascript로 코드 작성
<script>
var arr = [1, 2, 3, 4, 5];
var elem = document.querySelector("#list");

for (var i = 0; i < arr.length; i++) {
  var child = document.createElement("li");
  child.innerHTML = arr[i];
  elem.appendChild(child);
}
</script>
```

위 코드를 React의 JSX로 선언형 프로그래밍으로 변환하면 아래와 같이 나타낼 수 있습니다.

```jsx
const arr = [1, 2, 3, 4, 5];

return (
  <ul>
    {arr.map((elem) => (
      <li>{elem}</li>
    ))}
  </ul>
);
```

> **선언형 프로그래밍의 장점:**

- 코드 예측 가능성 향상
- 디버깅 용이성
- 전체적인 코드 품질 상승
- 코드 이해도 향상

<br />

### <span style="background-color:lavender">컴포넌트 기반 개발</span>

React는 "컴포넌트"라고 불리는 작고 독립적인 코드 조각들을 이용해 UI를 구현합니다.

```jsx
const Title = () => {
  return <h1>하이 헬로우</h1>;
};

const Button = () => {
  return <button>이건 버튼이야</button>;
};

const App = () => {
  return (
    <div>
      <Title />
      <Button />
    </div>
  );
};
```

> **컴포넌트 기반 개발의 장점:**

- 재사용 가능한 코드 작성
- 모듈화된 개발 방식
- 유지보수성 향상
- 개발 효율성 증대

---

### 💡 새롭게 알게 된 점

**❗라이브러리와 프레임워크의 차이**
리액트가 라이브러리라는 것은 알고 있었지만, 프레임워크와 라이브러리의 정확한 차이는 최근에야 알게 되었습니다.
**프레임워크**는 애플리케이션의 제어 흐름을 주도하며, 개발자는 그 틀 안에서 코드를 작성합니다.
**라이브러리**는 개발자가 애플리케이션의 제어 흐름을 주도하며, 필요할 때만 기능을 불러와 사용하는 것입니다.

즉, 둘의 차이는 **'제어 흐름의 주도권'**에 있는 것입니다. 이 개념이 처음에는 이해가 잘 안됐는데, 이번 챕터를 공부하며 찾아보니 먹는 것에 비유한 글을 보고 쉽게 이해할 수 있었습니다.

> **라이브러리를 이용하는 것**
> 중식당에서 내가 원하는 시점에 원하는 음식을 선택하고 종업원에게 주문
> ➡️ 해당 음식을 제어하는 건 바로 "나"

> **프레임워크를 사용하는 것**
> 중식당에서 식당이 미리 정해둔 세트 메뉴를 주문하는 것.
> 이미 정해진 요리와 순서를 그대로 따름
> ➡️ 식당이 내 점심 식사의 흐름을 제어

<br />

**❗왜 SPA는 동시다발적으로 빈번히 DOM 변경이 발생하는지?**
SPA에서 빈번하게 DOM 변경이 발생해서 최적화하기 위해 React에서 가상 DOM의 개념을 도입했다고 하는데, SPA에서 DOM 변경이 자주 일어난다는 말과, 그래서 왜 가상 DOM이 필요했던 건지 궁금해서 MPA와 SPA의 차이점을 찾아보았습니다.
근본적인 차이는 **페이지 vs 컴포넌트**라고 이해하면 될 것 같습니다.

> **MPA의 동작 방식**

- 사용자가 링크를 클릭하면 서버에 새로운 페이지를 요청
- 브라우저는 기존 페이지를 완전히 버리고 새로운 HTML을 받아서 처음부터 렌더링
- 결과적으로 DOM 변경은 "페이지 단위"로, "가끔씩" 발생

> **SPA의 동작 방식**

- 한 번 로드된 후에는 페이지 이동 없이 JavaScript가 모든 것을 제어
- 사용자의 모든 인터랙션(클릭, 입력, 스크롤 등)이 즉시 DOM 조작으로 연결
- 결과적으로 DOM 변경은 "컴포넌트 단위"로, "실시간"으로 발생

이렇게 책에서 "빈번한 DOM의 변경 (in SPA)"라고 해서 이게 단점이라고 느낄 수도 있지만, 이걸 가상 DOM으로 보완했으며 오히려 장점입니다. 왜냐하면 사용자와 애플리케이션 간의 상호작용을 깜빡임 없이 실시간으로 반영해 부드러운 UX를 제공하기 때문입니다. 그렇지만 그만큼 성능 최적화 (메모이제이션, lazy loading 등)와 같은 상태 관리가 더욱 중요해질 것 같습니다.

<br />

**❗양방향 데이터 바인딩과 단방향 데이터 바인딩의 차이**
책에서 설명하고 있지만 "데이터 바인딩"이 뭔지 잘 모르겠..어서 좀 더 찾아보았습니다.
데이터 바인딩이란, **애플리케이션의 UI 요소와 데이터 간의 연결을 설정하고 유지하는 기술**입니다.

쉽게 말하면 데이터와 화면을 자동으로 "동기화"시켜주는 것입니다.

> **단방향 데이터 바인딩**

- 데이터 → UI 한 방향으로만 흐름
- 데이터가 변경되면 UI가 자동으로 업데이트
- 예측 가능하고 디버깅이 쉬움
- 예: React의 기본 방식

> **양방향 데이터 바인딩**

- 데이터 ↔ UI 양방향으로 흐름
- 데이터가 변경되면 UI 업데이트 + UI에서 변경하면 데이터도 자동 업데이트
- 코드가 간결하지만 복잡한 앱에서는 데이터 흐름 추적이 어려울 수 있음
- 예: Vue.js의 v-model, Angular의 기본 방식

```javascript
// 단방향 (React)
const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />

// 양방향 (Vue)
<input v-model="name" />
```

### ❓ 어려웠던 점

이번 1, 2, 3 챕터는 도입 부분으로 간단한 내용을 다루고 있어서 크게 어려운 점은 없었던 것 같습니다.
그러나 SPA의 특징, 단방향 데이터와 양방향 데이터의 차이, 그리고 가상 DOM이 왜 나오게 되었는지에 대해 고민해본 적도 없고 이해하기 마냥 어렵다고만 생각했었는데 이 책을 읽으며 Javascript의 역사부터 React 탄생 배경, 브라우저 렌더링 과정, 가상 DOM 개념의 도입까지 정리된 것을 보며 흐름을 파악하기가 수월했고, 특히 프로젝트할 때 자주 사용하는 React를 이제는 단순히 "사용법"만 아는 것이 아니라, 왜 이런 방식으로 동작하는지, 특징, 장점에 대해 조금 더 알게 된 것 같고 앞으로 쓸 때 조금 더 리액트를 잘 활용할 수 있게 고민하며 쓸 수 있게 된 것 같습니다.
