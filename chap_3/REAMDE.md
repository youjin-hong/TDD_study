## ✨ 3. 리액트의 테스트 - Jest

### **<span style="background-color:lavender">Jest의 장점</span>**

Jest는 Javascript 테스트 프레임워크로 React에서 가장 많이 쓰이며 이외에 Typescript, Node, Angular, Vue 등에서도 사용할 수 있습니다.
Jest의 장점은 아래와 같습니다.

**<span style="background-color:#eaeaea">1) 제로 설정</span>**
많은 테스트 프레임워크들이 테스트를 하기 위해 초기에 많은 설정을 해야 한다. Jest는 테스트를 쉽게 시작하고, 테스트에 집중하게 하기 위해 제로 설정을 지향하고 있습니다.

**<span style="background-color:#eaeaea">2) 스냅샷</span>**
테스트하다 보면 일일이 확인하기 힘든 객체가 존재할 때가 있습니다. Jest는 이러한 객체를 캡쳐하듯이 그대로 저장한 후, 추후에 값이 변경되면 에러를 표시하는 스냅샷 기능을 제공합니다. React에서는 이 스냅샷 기능을 통해 렌더링된 컴포넌트의 변경 사항이 있는지 체크합니다.

**<span style="background-color:#eaeaea">3) 모의 객체</span>**
테스트 범위를 벗어나는 객체들을 간단하게 Mocking 함으로써 실제로 테스트해야 할 부분을 집중해서 테스트할 수 있게 합니다.

**<span style="background-color:#eaeaea">4) 테스트 코드의 분리</span>**
Jest의 테스트 코드는 완전히 분리돼 있으며, 분리된 테스트는 동시에 실행할 수 있습니다. 따라서 Jest는 분리된 테스트 코드를 동시에 실행해 빠른 성능을 제공합니다.

**<span style="background-color:#eaeaea">5) 간단한 API</span>**
Jest는 쉽고 간단하게 테스트할 수 있는 API를 제공하며, --coverage 옵션으로 코드 커버리지를 간단하게 확인할 수 있습니다.

<br />

### **<span style="background-color:lavender">프로젝트 준비</span>**

Jest는 Javascript 테스트 프레임워크이므로 우선 자바스크립트 프로젝트를 생성해 테스트 해보려고 합니다.

- 레포지토리 위에 "jest-test" 폴더를 생성
- `cd jest-test`
- `npm init`
- 모두 Enter 눌러 진행 후 package.json 생성된 것을 확인
- package.json 파일과 같은 위치에 index.js 생성
  -> 테스트 대상이 될 Javascript 코드를 작성할 예정

<br />

### **<span style="background-color:lavender">Jest 설치</span>**

- `npm install --save-dev jest`
- package.json 파일에서 scripts: {"test": "jest --watch"}로 수정
- `npm run test`로 jest 실행
- a 키로 변경된 파일과 관계없이 모든 테스트를 실행할 수 있도록 선택

<br />

### **<span style="background-color:lavender">사용 방법</span>**

- jest-test 폴더 아래에 index.test.js 파일 생성
  -> Jest는 파일 확장자가 .test.js로 끝나는 파일들을 텍스트 파일로 인식해 실행하기 때문에 이 테스트 파일에 index.js 파일에 관한 테스트를 작성
- index.js 파일에 다음과 같이 작성

```javascript
const sum = (a, b) => {
  return a + b;
};

module.exports = {
  sum,
};
```

- index.test.js 파일에 다음과 같이 작성

```javascript
const { sum } = require("./index");

// describe 함수: Jest가 제공하는 함수로, 여러 테스트를 한 그룹으로 묶고 설명을 붙이기 위해 사용
// 첫 번째 매개변수: 명령 프롬프트에 표시할 설명
// 두 번째 매개변수: 여러 테스트를 그룹으로 묶을 콜백 함수
describe("test index.js file", () => {
  // it 함수: 실제 테스트가 실행되는 테스트 명세를 작성할 때 사용
  // 첫 번째 매개변수: 테스트 명세의 설명
  // 두 번째 매개변수: 실제로 테스트를 실행하는 테스트 코드 작성
  it("sum 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

-> 위에서 npm run test로 Jest가 파일을 감시하고 있다가, 변경되면 테스트를 다시 실행하도록 jest --watch 명령어를 실행해뒀기 때문에 파일을 작성하고 저장하면 자동으로 테스트 코드를 실행합니다. 따라서 터미널에 다음과 같은 화면을 확인할 수 있습니다.
![](https://velog.velcdn.com/images/so356hot/post/88348604-0a5d-4bb3-80ce-0748d804545e/image.png)

- index.js에 return a + b를 return a \* b로 바꾸면 테스트가 실패하는 것을 확인
  ![](https://velog.velcdn.com/images/so356hot/post/31d34f39-b11c-48f7-ab31-c59abebd9319/image.png)

<br />

### **<span style="background-color:lavender">Matcher</span>**

위에서 toBe()라는 Matcher를 사용해 테스트 코드를 작성해보았습니다. Matcher는 Jest가 제공하는 함수로, 결과값을 비교해 테스트 성공 여부를 판단합니다.
toBe 외에 Jest에서 자주 사용되는 Matcher도 함께 살펴봅시다.

- **1) toEqual**
- **2) toBeTruthy, toBeFalsy**
- **3) toContain**
- 기타

<br />

### **<span style="background-color:lavender">코드 커버리지</span>**

테스트 코드 커버리지란, 테스트 대상이 되는 소스 코드 중에서 테스트 코드를 통해 검증된 코드의 비율을 말합니다.
코드 커버리지를 통해 테스트 코드가 얼마나 많은 소스 코드를 테스트하고 있는지 나타내는 중요한 지표입니다. 이 지표를 통해 테스트 코드가 작성되지 않은 코드를 확인할 수 있습니다.

- `npx jest --coverage`로 코드 커버리지 확인

---

### 🙋‍♂️ 궁금한 점 / 다음에 다루고 싶은 내용

자바스크립트로 Jest를 사용하는 법에 대해 알아보았으니 다음에는 React에서 Jest를 적용해보고 싶습니다.
