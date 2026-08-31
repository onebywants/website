## 2026-08-31 14:38

### .gitignore

- Next.js와 TypeScript 개발 중 생성되는 의존성, 빌드 산출물, 환경 변수 및 로컬 설정 파일을 제외하도록 추가했습니다.

### README.md

- 초기 프로젝트 문서 작성을 위한 빈 README 파일을 추가했습니다.

## 2026-08-31 15:01

### package.json

- Next.js 16, React 19, TypeScript 및 ESLint 기반의 최소 프로젝트 의존성과 개발 스크립트를 추가했습니다.

### package-lock.json

- 프로젝트 의존성 설치 결과를 잠금 파일로 기록했습니다.

### tsconfig.json, next.config.ts, eslint.config.mjs, postcss.config.mjs

- App Router 기반 Next.js와 TypeScript, ESLint, PostCSS 기본 설정을 추가했습니다.

### src/app/layout.tsx, src/app/globals.css

- Plus Jakarta Sans와 기본 OneByWants 메타데이터를 설정했습니다.
- 공통 레이아웃 및 브랜드 색상, 간격, 콘텐츠 너비 CSS 변수를 추가했습니다.

### src/app/page.tsx, src/app/products/page.tsx, src/app/products/prishare/page.tsx, src/app/about/page.tsx, src/app/contact/page.tsx

- 홈, Products, PriShare, About, Contact App Router 페이지의 최소 placeholder를 추가했습니다.

### src/components/Header/Header.tsx, src/components/Footer/Footer.tsx

- 루트 레이아웃에서 사용하는 공통 Header와 Footer를 추가했습니다.

### .gitignore

- 기존 제외 규칙의 잘못된 접두사를 정리해 Next.js 생성 파일과 로컬 설정이 정상적으로 제외되도록 수정했습니다.
