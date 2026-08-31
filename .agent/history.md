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

## 2026-08-31 15:20

### public/brand/onebywants-symbol.svg, public/brand/onebywants-wordmark.svg

- Brand Figma에서 추출한 공식 OneByWants 심볼과 워드마크 SVG 원본을 추가했습니다.

### src/components/Header/Header.tsx, src/components/Header/Header.module.css

- 공식 SVG 로고를 사용하도록 변경하고 홈 링크를 연결했습니다.
- Figma 기준의 데스크톱 높이, 콘텐츠 여백, 로고 크기 및 메뉴 타이포그래피·간격을 반영했습니다.

### src/components/Footer/Footer.tsx, src/components/Footer/Footer.module.css

- Navy 배경의 공통 Footer에 슬로건, 저작권 및 기존 경로 기반 메뉴를 추가했습니다.
- Figma 기준의 높이, 콘텐츠 정렬, 색상 및 텍스트 계층을 반영했습니다.

### src/app/globals.css, src/app/page.module.css

- 1296px 최대 콘텐츠 폭과 72px 데스크톱 좌우 여백을 공통 변수로 정의했습니다.
- 고정 viewport 높이 계산을 제거하고 flex 기반 페이지 셸로 짧은 페이지의 Footer 배치를 안정화했습니다.

## 2026-08-31 15:30

### next.config.ts

- GitHub Pages 배포를 위한 정적 export와 trailing slash 출력을 설정했습니다.
- GitHub Actions가 제공하는 저장소 base path를 빌드 시 적용하도록 구성해 로컬 기본 경로 동작을 유지했습니다.

### src/components/Header/Header.tsx

- GitHub Pages 하위 경로에서도 로고 SVG가 정상 로드되도록 public asset 경로에 base path를 반영했습니다.

### .github/workflows/deploy-pages.yml

- develop 브랜치 push와 수동 실행에서만 정적 사이트를 빌드해 GitHub Pages에 배포하는 워크플로를 추가했습니다.
- 공식 Pages artifact 업로드 및 배포 액션을 사용하고, 배포 환경의 base path를 Next.js 빌드에 전달하도록 구성했습니다.

## 2026-08-31 16:17

### src/app/globals.css

- 좁은 화면에서 콘텐츠 좌우 여백이 단계적으로 줄어들도록 공통 컨테이너 변수를 보완했습니다.
- 고정 최소 viewport 폭을 제거하고 main 영역이 부모 폭보다 커지지 않도록 조정했습니다.

### src/components/Header/Header.module.css

- 768px 이하에서 Header 높이와 로고·메뉴 간격을 축소하도록 반응형 규칙을 추가했습니다.
- 480px 이하에서도 Products, About, Contact 메뉴가 모두 표시되도록 로고와 메뉴 크기를 조정했습니다.

### src/components/Footer/Footer.module.css

- 768px 이하에서 Footer의 브랜드 정보와 메뉴를 세로로 쌓아 좁은 화면의 가로 넘침을 방지했습니다.
- 480px 이하에서 Footer 메뉴 간격을 축소했습니다.

## 2026-08-31 20:24

### src/app/page.tsx, src/app/page.module.css

- Home placeholder를 Hero, Products, How we build 섹션으로 교체하고 승인된 Figma의 데스크톱 구성과 공식 브랜드 에셋을 반영했습니다.
- PriShare 소개와 상세 페이지 링크를 Products 영역에만 추가하고, About 링크 및 GitHub Pages base path를 지원했습니다.
- 좁은 화면에서 섹션과 제품·원칙 항목이 자연스럽게 쌓이도록 반응형 레이아웃을 추가했습니다.

### src/components/Header/Header.module.css

- 320px 화면에서 로고와 메뉴가 가로로 넘치지 않도록 480px 이하 Header의 로고·메뉴 크기와 간격을 보완했습니다.
