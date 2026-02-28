# 📒 프로젝트 작업 로그 (Task Log)

- **작성일**: 2026년 2월 28일
- **작성자**: 서기 (Scribe)
- **프로젝트 명**: 깃허브 계정 관리자 (Git Account Manager)

---

## 1. 개요
한 컴퓨터에서 여러 깃허브 계정을 전환하며 사용할 때 발생하는 인증 충돌 및 토큰 관리의 번거로움을 해결하기 위한 '명령어 생성기 및 프로필 관리' 웹앱을 성공적으로 구현하였습니다.

## 2. 작업 단계 및 구현 내용

### 🛠 Phase 1: 건축가 & 작업자 (Architecure & Logic)
- **Vite + React (TypeScript)** 기반 프로젝트 초기화.
- **Tailwind CSS v4** 설치 및 설정: 최신 유틸리티 우선 방식 및 JIT 엔진 활용.
- **LocalStorage API** 연동: 사용자의 데이터 보안을 위해 서버 저장 없이 클라이언트 측에만 프로필 정보 저장.
- **Git 명령어 생성 로직**: 입력된 저장소 URL을 파싱하여 토큰이 포함된 `set-url` 명령어를 올바르게 조합하는 알고리즘 구현.

### 🎨 Phase 2: 디자이너 (UI/UX)
- **Bento Grid 레이아웃**: 2026년 트렌드인 격자형 카드 시스템 적용.
- **Glassmorphism 2.0**: 투명도와 블러 효과를 극대화한 세련된 다크 모드 UI 구현.
- **Framer Motion**: 카드 호버링, 리스트 추가/삭제 시 부드러운 애니메이션 효과 적용.
- **색상 팔레트**: 심해색(Deep Sea, #0a0f18)과 일렉트릭 블루/인디고 포인트 컬러 조합.

### 🔧 Phase 3: 해결사 & 상담가 (Fixing & Consulting)
- **URL 파싱 예외 처리**: 사용자가 실수로 잘못된 URL을 입력하더라도 앱이 죽지 않도록 방어 코드 추가.
- **반응형 대응**: 모바일 환경에서도 Bento Grid가 적절히 재배치되도록 CSS 매체 쿼리 최적화.
- **TypeScript 빌드 최적화**: `verbatimModuleSyntax` 설정에 따른 타입 전용 임포트(`import type`) 방식 적용.

### 🚀 Phase 4: 배포 (Deployment)
- **GitHub Actions 워크플로우**: `main` 브랜치 푸시 시 자동 배포되는 가파른 자동화 파이프라인 구축.
- **Vite 배포 최적화**: GitHub Pages 호스팅을 위한 `base` 경로 설정 완료.

### 🌎 Phase 5: 다국어 및 가이드 최적화 (i18n & UX)
- **다국어 지원(KO/EN)**: 전역 상태 기반의 언어 전환 토글 구현 및 모든 UI 텍스트 다국어화.
- **상세 가이드 보강**: 명령어를 터미널에서 어떻게 실행하고 왜 필요한지에 대한 활용 팁을 "How to Use" 모달에 추가.
- **보안 가이드 강화**: 데이터가 로컬에만 머무른다는 점을 재강조하여 사용자 신뢰도 향상.

---

## 3. 최종 결과물 주요 특징
1.  **동적 명령어 생성**: 저장된 프로필을 클릭하면 즉시 해당 계정의 토큰과 정보가 반영된 명령어가 생성됨.
2.  **커맨드 복사 편의성**: 한 번의 클릭으로 클립보드에 복사할 수 있는 기능 제공.
3.  **보안 강조**: 모든 데이터는 오직 사용자의 컴퓨터에만 머물며 외부 유출 위험이 없음.

## 4. 향후 계획 및 참고 사항
- 깃허브 외의 다른 Git 호환 브라우저(GitLab 등) 지원 확장 고려.
- SSH 키 관리 가이드 추가 예정.

---

## 🔗 관련 링크
- **제작 지원**: [아크랩스 (AKLabs)](https://litt.ly/aklabs)
- **메인 코드**: [App.tsx](file:///Users/byunmose/Desktop/vibe_coding/git-account-manager/src/App.tsx)
- **스타일 설정**: [index.css](file:///Users/byunmose/Desktop/vibe_coding/git-account-manager/src/index.css)

---
*본 문서는 다음 작업을 위한 참고 자료로 활용됩니다.*
