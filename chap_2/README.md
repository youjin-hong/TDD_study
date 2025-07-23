## ✨2. 리액트 개발 환경

**<span style="background-color:lavender">윈도우 개발 환경 설정</span>**

- **<span style="background-color:#eaeaea">1) 초코렛티 설치</span>**
  - [초코렛티 설치 사이트](https://chocolatey.org/install)
  - 아래 "Now run the following command"의 명령어 복사
    ![](https://velog.velcdn.com/images/so356hot/post/c64b65a5-03a1-4369-90a4-38e0ee80e5f9/image.png)
  - PowerShell(또는 cmd)을 "관리자 권한"으로 열어 복사한 명령어를 실행해 설치
  - 잘 설치했다면 `choco -version`을 실행 해 초코렛티 버전 확인 가능
    <br />
- **<span style="background-color:#eaeaea">2) 노드 설치</span>**
  React는 Javascript 라이브러리이기 때문에 Javascript Runtime인 노드가 필요합니다. 저는 이미 노드가 설치됐기 때문에 이 과정을 생략했지만 아래와 같이 설치해주었습니다.
  - `choco install -y node.js install`
  - `node --version`
  - `npm --version`

> **리액트를 시작하는 방법**

1. 스크립트 태그 추가
2. Webpack과 Babel을 설정해 개발
3. create-react-app
4. Next.js 프레임워크

이렇게 리액트를 시작하는 다양한 방법이 있지만, 저는 테스트 코드를 접하는 것이 목적이기 대문에 비교적 간단한 **3) create-react-app** 방식으로 리액트 프로젝트를 만들어보겠습니다.

**<span style="background-color:lavender">create-react-app</span>**

- `npx create-react-app --version`으로 설치됐는지 확인 후 없다면 y로 설치
- `npx create-react-app 프로젝트이름`
- `cd 프로젝트이름`
- `npm start`로 localhost:3000 열리는지 확인

Vite로 하려다가 책에서 src/reportWebVitals.js, src/setupTests.js 파일들이 리액트 성능과 테스트할 때 필요하다고 했는데 Vite는 자동 생성이 안돼서 CRA로 진행했습니다.

---
