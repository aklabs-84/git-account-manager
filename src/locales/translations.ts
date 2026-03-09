export const translations = {
    ko: {
        titlePrefix: "개발자 스위트 2026",
        title: "Git 계정 관리자",
        subtitle: "개인용과 업무용 깃허브 계정을 한 번의 클릭으로 편리하게 전환하세요.",
        howToUse: "사용 방법",
        poweredBy: "제작 지원",
        profiles: {
            title: "프로필",
            addProfile: "프로필 추가",
            namePlaceholder: "이름 (예: 업무용)",
            emailPlaceholder: "이메일",
            githubPlaceholder: "깃허브 아이디",
            add: "추가",
            cancel: "취소",
        },
        generator: {
            title: "명령어 생성기",
            repoUrl: "저장소 URL (HTTPS)",
            token: "개인 액세스 토큰 (PAT)",
            remoteLabel: "원격 URL 추가 (Add Remote URL)",
            remoteTypeAdd: "새로운 저장소 연결 (add)",
            remoteTypeSetUrl: "기존 저장소 주소 변경 (set-url)",
            configLabel: "사용자 설정 업데이트 (Update User Config)",
            pushLabel: "원스톱 푸시 (One-stop)",
            pushStepLabel: "단계별 푸시 (Step-by-step)",
            pushSteps: {
                step1: "1. 변경사항 준비",
                step2: "2. 커밋 메시지 작성",
                step3: "3. 메인 브랜치 설정",
                step4: "4. 원격 저장소 푸시"
            },
            copy: "복사",
            copied: "복사됨",
            securityTip: "* 보안 팁: 어떤 데이터도 브라우저를 떠나지 않습니다. 모든 처리는 100% 로컬에서 이루어집니다.",
            invalidUrl: "잘못된 URL 형식입니다. HTTPS 링크를 사용하세요.",
            githubOnly: "오류: 깃허브 URL만 지원됩니다.",
            waitingUrl: "저장소 URL을 기다리는 중...",
        },
        guide: {
            title: "토큰 발급 가이드",
            step1: "GitHub Settings > Developer settings로 이동하세요.",
            step2: "Personal access tokens (classic)에서 새 토큰을 생성하세요.",
            step3: "repo 권한만 선택하면 준비 완료!",
            btnText: "토큰 발급하러 가기",
        },
        help: {
            title: "상세 사용 가이드",
            gotIt: "확인했습니다!",
            privacyTitle: "개인정보 보호",
            privacyDesc: "모든 데이터는 브라우저 LocalStorage에만 저장되며 외부로 전송되지 않습니다.",
            steps: [
                {
                    title: "1. 프로필 등록",
                    desc: "왼쪽 '프로필' 섹션에서 계정 정보를 등록하세요. 클릭 한 번으로 활성 계정을 바꿀 수 있습니다."
                },
                {
                    title: "2. 명령어 생성",
                    desc: "저장소 URL과 토큰을 입력하면 하단에 터미널 명령어가 자동으로 생성됩니다."
                },
                {
                    title: "3. 터미널에서 실행 (중요!)",
                    desc: "생성된 각 명령어의 '복사' 버튼을 누른 뒤, 실제 작업 중인 프로젝트의 터미널(VS Code 등)에 붙여넣고 엔터를 치면 즉시 적용됩니다."
                }
            ],
            terminalTip: {
                title: "복사한 명령어 활용법",
                remote: "Remote URL: 403 인증 에러 발생 시 이 명령어를 실행하면 토큰이 포함되어 푸시가 가능해집니다.",
                config: "User Config: 커밋 히스토리의 작성자 정보(잔디)를 현재 프로필 계정으로 맞출 때 실행하세요."
            }
        }
    },
    en: {
        titlePrefix: "Developer Suite 2026",
        title: "Git Account Manager",
        subtitle: "Switch between personal and professional GitHub accounts with one-click commands.",
        howToUse: "How to Use",
        poweredBy: "Powered by",
        profiles: {
            title: "Profiles",
            addProfile: "Add Profile",
            namePlaceholder: "Name (e.g. Work)",
            emailPlaceholder: "Email",
            githubPlaceholder: "GitHub Username",
            add: "Add",
            cancel: "Cancel",
        },
        generator: {
            title: "Command Generator",
            repoUrl: "Repository URL (HTTPS)",
            token: "Personal Access Token (PAT)",
            remoteLabel: "Add Remote URL",
            remoteTypeAdd: "Connect New Remote (add)",
            remoteTypeSetUrl: "Change Existing Remote (set-url)",
            configLabel: "Update User Config",
            pushLabel: "One-stop Push",
            pushStepLabel: "Step-by-step Push",
            pushSteps: {
                step1: "1. Stage changes",
                step2: "2. Commit with message",
                step3: "3. Set main branch",
                step4: "4. Push to remote"
            },
            copy: "Copy",
            copied: "Copied",
            securityTip: "* Security Tip: No data leaves your browser. All processing is 100% local.",
            invalidUrl: "Invalid URL format. Please use HTTPS link.",
            githubOnly: "Error: Only GitHub URLs are supported.",
            waitingUrl: "Waiting for repository URL...",
        },
        guide: {
            title: "Quick Token Guide",
            step1: "Go to GitHub Settings > Developer settings.",
            step2: "Generate a new token in Personal access tokens (classic).",
            step3: "Select only the 'repo' scope and you're all set!",
            btnText: "Go to Issue Token",
        },
        help: {
            title: "Detailed Usage Guide",
            gotIt: "Got it!",
            privacyTitle: "Privacy First",
            privacyDesc: "All data is saved in your browser's LocalStorage and never sent externally.",
            steps: [
                {
                    title: "1. Profile Setup",
                    desc: "Register your accounts in the 'Profiles' section. Switch active accounts with a single click."
                },
                {
                    title: "2. Generate Command",
                    desc: "Enter your repo URL and token; terminal commands will be generated automatically below."
                },
                {
                    title: "3. Run in Terminal (Important!)",
                    desc: "Click 'Copy' for each generated command, then paste it into your project's terminal (e.g., in VS Code) and press Enter."
                }
            ],
            terminalTip: {
                title: "How to Use Copied Commands",
                remote: "Remote URL: Run this to include your token in the remote address, fixing 403 authentication errors.",
                config: "User Config: Run this to align the commit history author info (Contribution) with your current profile."
            }
        }
    }
};

export type TranslationType = typeof translations.ko;
export type LanguageType = 'ko' | 'en';
