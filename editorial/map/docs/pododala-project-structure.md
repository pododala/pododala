# pododala 개인 위키: 프로젝트 구조와 운영 흐름

> 자동 생성 문서 카드. 직접 수정하지 않는다. 판단은 반드시 아래 원고의 해당 절 본문을 읽고 한다.

- id: `pododala-project-structure` · 분류: 프로젝트 · 공개 · 원고: [wiki/pododala-project-structure.md](../../../wiki/pododala-project-structure.md) · 6,359자 · 절 8개
- 별칭: pododala 프로젝트 구조, 개인 위키 코드 구조, pododala 개발 안내
- 요약: 개인 위키의 폴더와 파일 역할, Markdown·메타데이터·생성물의 관계, 웹 화면과 정적 문서 주소, GitHub Pages 배포 및 개인화 설정을 설명한다.
- 태그: 개인 프로젝트, 프로젝트 구조, Markdown, JavaScript, Node.js, GitHub Pages, 자동 배포
- 수정일: 2026-11-02 · 실제 증보일: 2026-11-02 · 검토: reviewed
- 관련 문서: `wiki-building-history`, `wiki-operations-pipeline`

## 절 목차

들여쓰기가 소제목 경로(상위 절 아래의 하위 절)다. `L시작–끝`은 원고 파일에서 그 절 고유 부분(하위 절 제외)의 줄 범위, 글자 수는 그 본문 분량, 8자리 해시는 그 줄들의 내용 지문으로 원고가 바뀌면 달라진다. 첫 문장은 위치 확인용이며 절의 내용을 대표하지 않는다.

- (도입부) · L2–5 · 428자 · `8a4ad70e` — pododala 개인 위키는 Markdown으로 글을 작성하고, 같은 원고를 웹사이트와 AI 탐색 자료로 배포하는 개인 프로젝트다.
- 프로젝트의 실행 방식 · L7–13 · 425자 · `039c2c32` — 화면은 HTML, CSS, JavaScript로 구성된다.
- 폴더와 파일의 역할 · L15–30 · 808자 · `7f058eb3` — (표)
- 원고와 메타데이터를 관리하는 구조 · L32–53 · 980자 · `2917920a` — 글 본문의 원본은 wiki/<문서-id>.md다.
- 원본에서 만들어지는 생성물 · L55–63 · 747자 · `f5c1eb90` — scripts/build-notes.mjs는 Markdown과 manifest를 읽어 notes.json을 만든다.
- 웹 화면과 두 종류의 문서 주소 · L65–71 · 699자 · `af45df72` — 웹사이트의 기본 경로는 /pododala/다.
- 작성에서 배포까지의 흐름 · L73–86 · 914자 · `fa147dab` — wiki/<문서-id>.md에 새 글을 작성하거나 기존 원고를 수정한다.
- 개인 프로젝트로 운영할 때의 변경 지점 · L88–96 · 796자 · `118cf1c4` — 현재 운영 저장소는 pododala/pododala이며 기존 원본 저장소와 별개다.
- 확인 범위와 관련 문서 · L98–102 · 356자 · `32fad213` — 설명 범위는 현재 저장소의 코드, 생성·검증 스크립트, 워크플로와 2026년 11월 2일에 확인한 실제 배포 결과다.

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
