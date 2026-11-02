# pododala 개인 위키: 프로젝트 구조와 운영 흐름

> 자동 생성 문서 카드. 직접 수정하지 않는다. 판단은 반드시 아래 원고의 해당 절 본문을 읽고 한다.

- id: `pododala-project-structure` · 분류: 프로젝트 · 공개 · 원고: [wiki/pododala-project-structure.md](../../../wiki/pododala-project-structure.md) · 13,832자 · 절 17개
- 별칭: pododala 프로젝트 구조, 개인 위키 코드 구조, pododala 개발 안내, VSCode Codex 지식 증보 절차
- 요약: 개인 위키의 구조와 생성물 관계, VSCode·Codex를 이용한 로컬 개발과 지식 증보, 메타데이터·장부 갱신, 실제 검증 명령과 GitHub Pages 게시 절차를 설명한다.
- 태그: 개인 프로젝트, 프로젝트 구조, Markdown, JavaScript, Node.js, GitHub Pages, 자동 배포, VSCode, Codex, 로컬 개발, 지식 증보
- 수정일: 2026-11-02 · 실제 증보일: 2026-11-02 · 검토: reviewed

## 절 목차

들여쓰기가 소제목 경로(상위 절 아래의 하위 절)다. `L시작–끝`은 원고 파일에서 그 절 고유 부분(하위 절 제외)의 줄 범위, 글자 수는 그 본문 분량, 8자리 해시는 그 줄들의 내용 지문으로 원고가 바뀌면 달라진다. 첫 문장은 위치 확인용이며 절의 내용을 대표하지 않는다.

- (도입부) · L2–9 · 467자 · `54a569c2` — pododala 개인 위키는 Markdown으로 글을 작성하고, 같은 원고를 웹사이트와 AI 탐색 자료로 배포하는 개인 프로젝트다.
- 프로젝트의 실행 방식 · L11–17 · 425자 · `039c2c32` — 화면은 HTML, CSS, JavaScript로 구성된다.
- 폴더와 파일의 역할 · L19–34 · 808자 · `7f058eb3` — (표)
- 원고와 메타데이터를 관리하는 구조 · L36–57 · 980자 · `2917920a` — 글 본문의 원본은 wiki/<문서-id>.md다.
- 원본에서 만들어지는 생성물 · L59–67 · 747자 · `f5c1eb90` — scripts/build-notes.mjs는 Markdown과 manifest를 읽어 notes.json을 만든다.
- 웹 화면과 두 종류의 문서 주소 · L69–75 · 699자 · `af45df72` — 웹사이트의 기본 경로는 /pododala/다.
- 작성에서 배포까지의 흐름 · L77–90 · 914자 · `fa147dab` — wiki/<문서-id>.md에 새 글을 작성하거나 기존 원고를 수정한다.
- VSCode에서 로컬 개발을 시작하는 순서 · L92–104 · 1,254자 · `a43a075c` — VSCode는 프로젝트 폴더와 원고를 열고 터미널 명령을 실행하는 편집 환경, Codex는 저장소를 읽고 수정·검증을 돕는 도구, GitHub Pages는 생성한…
- Codex로 지식을 증보하는 작업 단위 · L106–108 · 229자 · `5b5794c8` — Codex에 맡기는 작업은 대상 원고, 보존할 내용, 확인할 근거, 갱신할 메타데이터와 검증 범위를 명확히 나누는 방식으로 구성한다.
  - 기존 내용과 대조하기 · L110–114 · 528자 · `26ea1ad6` — 먼저 editorial/ingestions/index.json에서 처리한 배치를 확인하고, editorial/map/index.md에서 관련 문서를 찾는다.
  - 원고와 메타데이터를 함께 갱신하기 · L116–120 · 456자 · `f4e692ed` — 본문의 사실과 절 제목을 확정한 뒤 manifest의 해당 문서 항목을 갱신한다.
  - 반영 위치를 장부에 남기기 · L122–126 · 452자 · `27563877` — 신규 증보는 editorial/ingestions/ing-YYYYMMDD-주제.json에 기록하고 index.json의 batches 끝에 배치 ID를 추가한다.
- 로컬 생성과 검증을 실행하는 순서 · L128–154 · 1,523자 · `a6b30ab9` — 원고·manifest·장부를 저장한 뒤 프로젝트 루트에서 다음 생성 명령을 순서대로 실행한다.
- 로컬 화면과 원고 보존을 확인하는 방법 · L156–164 · 1,085자 · `9cea1b3a` — VSCode에서 Markdown을 읽는 것과 사이트의 자체 렌더러로 읽는 것은 다르다.
- main 커밋과 GitHub Pages 게시 확인 · L166–176 · 1,259자 · `e1ad7b8b` — 게시할 변경을 확인할 때는 git diff --stat과 git status --short로 파일 범위를 먼저 본다.
- 개인 프로젝트로 운영할 때의 변경 지점 · L178–186 · 778자 · `1a7f0b4b` — 현재 운영 저장소는 pododala/pododala이며 기존 원본 저장소와 별개다.
- 달력 동작 예시 · L188–194 · 501자 · `48adae52` — 달력의 연대 표시를 확인하기 위해 1986년 작성자 탄생을 예시로 등록했다.
- 확인 범위와 현재 콘텐츠 · L196–200 · 293자 · `04504c62` — 설명 범위는 현재 저장소의 코드, 생성·검증 스크립트, 워크플로와 2026년 11월 2일에 확인한 실제 배포 결과다.

## 장부에 기록된 반영 지식

- **프로젝트의 실행 방식**
  - 정적 개인 위키의 브라우저 실행과 Node.js 생성 역할 · `ing-20261102-pododala-project-structure`
- **폴더와 파일의 역할**
  - 화면·원고·편집 기록·생성 도구의 파일별 역할 · `ing-20261102-pododala-project-structure`
- **원고와 메타데이터를 관리하는 구조**
  - Markdown 원본과 manifest 메타데이터 및 주제 등록 · `ing-20261102-pododala-project-structure`
- **원본에서 만들어지는 생성물**
  - 사이트 캐시·AI 색인·편집 지도의 생성 경로 · `ing-20261102-pododala-project-structure`
- **웹 화면과 두 종류의 문서 주소**
  - 프로젝트 경로 아래의 탐색 주소와 정적 문서 주소 · `ing-20261102-pododala-project-structure`
- **작성에서 배포까지의 흐름**
  - 원고 작성에서 검증·자동 커밋·Pages 게시까지의 흐름 · `ing-20261102-pododala-project-structure`
- **개인 프로젝트로 운영할 때의 변경 지점**
  - 개인 저장소 분리와 댓글·검색엔진·공개 범위의 현재 설정 · `ing-20261102-pododala-project-structure`
- **달력 동작 예시**
  - 1986년 작성자 탄생 가상 항목으로 달력의 연대·문서 연결 확인 · `ing-20261102-pododala-project-structure`
- **VSCode에서 로컬 개발을 시작하는 순서**
  - VSCode·Codex·Pages의 역할과 프로젝트 루트 작업 환경 · `ing-20261102-local-development-enrichment`
- **기존 내용과 대조하기**
  - 편집 지도·카드·원고 대조를 통한 중복 판단과 증보 범위 · `ing-20261102-local-development-enrichment`
- **원고와 메타데이터를 함께 갱신하기**
  - 실제 증보일·검토 상태와 원고 검색 메타데이터의 갱신 기준 · `ing-20261102-local-development-enrichment`
- **반영 위치를 장부에 남기기**
  - 원문 없는 증보 배치와 정확한 문서·절 반영 위치 기록 · `ing-20261102-local-development-enrichment`
- **로컬 생성과 검증을 실행하는 순서**
  - 실제 생성기·동기화 검사·장부·검색·달력·뷰어 검증 명령의 실행 순서 · `ing-20261102-local-development-enrichment`
- **로컬 화면과 원고 보존을 확인하는 방법**
  - 정적 생성기의 출력 범위와 HTTP 서버·운영 경로의 구분 · `ing-20261102-local-development-enrichment`
- **main 커밋과 GitHub Pages 게시 확인**
  - 선택적 원본 커밋·본인 원격 확인·자동 생성 커밋과 실제 게시 완료의 구분 · `ing-20261102-local-development-enrichment`
