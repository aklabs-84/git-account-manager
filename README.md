# 🚀 Git Account Manager (2026)

**Git Account Manager**는 여러 개의 깃허브 계정(개인, 업무 등)을 전환하며 사용할 때 발생하는 인증 충돌(403 Error)과 토큰 관리의 번거로움을 해결하기 위한 프리미엄 웹 도구입니다.

2026년 최신 웹 디자인 트렌드인 **Bento Grid**와 **Glassmorphism 2.0** 스타일을 적용하여, 심미적으로 뛰어나면서도 실용적인 사용자 경험을 제공합니다.

---

## 📺 주요 기능

- **🍱 Bento Grid UI**: 정보를 직관적이고 구조적으로 배치하여 한눈에 파악 가능.
- **🌎 Multilingual Support**: 한국어와 영어 다국어 지원 (KO/EN 토글).
- **👤 Profile Management**: 자주 사용하는 계정 정보를 브라우저 `LocalStorage`에 안전하게 저장 및 관리.
- **🛠 Command Generator**: 리모트 저장소 URL과 토큰을 기반으로 최적화된 `git remote set-url` 명령어 자동 생성.
- **📖 Step-by-Step Guide**: 깃허브 개인 액세스 토큰(PAT) 발급 및 터미널 명령어 실행 과정을 상세히 안내.
- **🔒 100% Client-Side**: 어떤 데이터도 외부 서버로 전송되지 않는 완벽한 보안성.

---

## 📖 상세 사용 방법

1. **프로필 등록**: 메인 화면 왼쪽의 `Add Profile` 버튼을 클릭하여 이름, 이메일, 깃허브 아이디를 등록합니다.
2. **계정 선택**: 등록된 프로필 중 사용할 계정을 클릭하면 실시간으로 해당 정보가 생성기에 반영됩니다.
3. **저장소 연결**: 작업 중인 저장소의 HTTPS URL을 입력합니다.
4. **명령어 실행**: 생성된 `Set Remote URL`과 `Update User Config` 명령어를 터미널에 복사하여 실행합니다.

---

## 🛠 기술 스택

- **Framework**: [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Actions (자동 배포 파이프라인 구축)

---

## 🚀 시작하기 & 배포

### 로컬 실행
```bash
npm install
npm run dev
```

### GitHub Pages 배포
이 프로젝트는 GitHub Actions를 통해 자동 배포되도록 설정되어 있습니다.
1. 코드를 GitHub 저장소에 푸시합니다.
2. 저장소 설정(`Settings > Pages`)에서 소스를 `GitHub Actions`로 설정합니다.
3. 잠시 후 배포된 URL에서 웹앱을 확인할 수 있습니다.

---

## 📞 제작 지원 & 문의

본 프로젝트는 **Aklabs (아크랩스)** 의 아이디어를 바탕으로 설계 및 제작되었습니다.

🔗 [https://litt.ly/aklabs](https://litt.ly/aklabs)

---

> [!TIP]
> 2026년 기준 가장 세련된 개발자 도구 인터페이스를 경험해 보세요!
