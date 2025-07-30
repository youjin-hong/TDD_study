## ✨ 5. React + Typescript 개발 환경 구축하기

### <span style="background-color:lavender">Typescript를 선택하는 이유</span>

> **Javascript vs Typescript**

- **Javascript**: 런타임에 변수 타입 결정 → 실행 전까지 타입 오류 발견 불가
- **Typescript**: 컴파일 시점에 타입 검사 → 개발 단계에서 오류 조기 발견

**Typescript의 장점**
✅ 자바스크립트 저반에 걸쳐 사용 가능 (Flow보다 범용적)
✅ 풍부한 타입 정의 파일 (DefinitelyTyped)
✅ 뛰어난 에디터 지원 (특히 VSCode)
✅ 개발 생산성 향상

### <span style="background-color:lavender">Typescript 프로젝트 설정</span>

**<span style="background-color:yellow">기본 프로젝트 생성</span>**

```bash
# CRA로 기본 프로젝트 생성
npx create-react-app library

# TypeScript 의존성 설치
npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest
```

> **설치한 라이브러리의 타입 정의 파일**

- `typescript`: 타입스크립트 라이브러리
- `@types/node`: 노드의 타입이 정의된 타입 정의 파이
- `@types/react`: 리액트의 타입이 정의된 타입 정의 파일
- `@types/react-dom`: react-dom의 타입이 정의된 타입 정의 파일
- `@types/jest`: Jest의 타입이 정의된 타입 정의 파일

<br />

**<span style="background-color:yellow">tsconfig.json 설정</span>**

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "src" // 절대 경로 설정
  },
  "include": ["src", "custom.d.ts"]
}
```

<br />

**<span style="background-color:yellow">파일 확장자 변경</span>**

> **자바스크립트 파일 ➡️ 타입스크립트 파일**

- `./src/App.js` → `./src/App.tsx`
- `./src/App.test.js` → `./src/App.test.tsx`
- `./src/index.js` → `./src/index.tsx`
- `./src/reportWebVitals.js` → `./src/reportWebVitals.ts`
- `./src/setupTests.js` → `./src/setupTests.ts`

<br />

**<span style="background-color:yellow">SVG 타입 정의 (custom.d.ts)</span>**

```typescript
declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
```

그 다음 App.test.tsx에 4장의 테스트 코드를 복사해 붙여넣어줍니다. 단, 우리가 지금 사용하고 있는 react-testing-library의 버전에 맞춰서 container 메소드 대신 semantic queries를 사용해줍니다.

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders all main components", () => {
    render(<App />);

    // Logo 확인
    const logo = screen.getByRole("img", { name: /logo/i });
    expect(logo).toHaveAttribute("src", "logo.svg");
    expect(logo).toHaveClass("App-logo");

    // Edit 텍스트 확인 (분할된 텍스트 처리)
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText("src/App.tsx")).toBeInTheDocument();
    expect(screen.getByText(/and save to reload/i)).toBeInTheDocument();

    // Learn React 링크 확인
    const learnLink = screen.getByRole("link", { name: /learn react/i });
    expect(learnLink).toHaveAttribute("href", "https://reactjs.org");
  });
});
```

<br />

### <span style="background-color:lavender">styled-components로 스타일링</span>

**<span style="background-color:yellow">설치 및 설정</span>**

```bash
npm install --save styled-components
npm install --save-dev @types/styled-components jest-styled-components
```

> **styled-components의 장점**
> ✅ 클래스명 충돌 방지
> ✅ 컴포넌트 기반 스타일 관리
> ✅ 직관적인 동적 스타일링
> ✅ 자동 CSS 최적화

<br />

### <span style="background-color:lavender">절대 경로 설정</span>

**<span style="background-color:yellow">tsconfig.json에 baseUrl 추가</span>**

```json
{
  "compilerOptions": {
    "baseUrl": "src" // 이 한 줄로 절대 경로 사용 가능!
  }
}
```

**<span style="background-color:yellow">사용 예시</span>**

```javascript
// ❌ 복잡한 상대 경로
import Component from "../../../components/Component";

// ✅ 명확한 절대 경로
import Component from "components/Component";
```

<br />

### <span style="background-color:lavender">Prettier 자동 포맷팅</span>

**<span style="background-color:yellow">설치</span>**

```bash
npm install --save-dev husky lint-staged prettier
```

**<span style="background-color:yellow">.prettierrc.js 설정</span>**

```javascript
module.exports = {
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
};
```

**<span style="background-color:yellow">package.json에 Git Hook 설정</span>**

```json
{
  "scripts": {},
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": ["prettier --write"]
  }
}
```

> **💡핵심 포인트**

- **TypeScript**: 타입 안전성으로 런타임 오류 예방
- **Testing Library**: 사용자 중심 테스트로 더 견고한 코드
- **styled-components**: 컴포넌트 기반 스타일 관리
- **절대 경로**: 명확하고 유지보수하기 쉬운 import
- **Prettier**: 일관된 코드 스타일 자동 적용
