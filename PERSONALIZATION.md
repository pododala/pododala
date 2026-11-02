# 내 프로젝트로 변경할 위치

사이트 이름과 저장소 설정을 `pododala` / `pododala/pododala`로 교체했다.
기본 배포 주소는 `https://pododala.github.io/pododala/`이며 정적 페이지의 CSS·메뉴·문서 경로에도 `/pododala/`를 반영했다.
현재는 프로젝트 분류 문서 1편만 유지한다. 기존 원고 173개와 관련 편집 기록은 삭제했으며, 삭제 전 자료는 Git 이력에 남는다. 이전 사이트 링크와 도메인 호환 처리는 제거했고, 현재 사이트 주소만 내부 링크로 변환한다.
친구의 Google·네이버 인증 값은 제거했다. 본인 인증 값과 giscus ID는 아직 없으므로 댓글은 비활성 상태다.
아래 목록의 기존 원고·이력 경로는 삭제 전 참고 정보다. 현재 문서와 파일의 기준은 manifest와 프로젝트 구조 문서다.

## 소스에 주석을 표시한 부분

| 파일 | 변경할 내용 |
| --- | --- |
| `index.html` | 제목, 브랜드, 소개, 아이콘, 대표 주소, GitHub 링크, Google·네이버 소유권 확인 값, 한글·영문 AI 안내, 하단 이름·링크 |
| `app.js` | 저장소 주소, 문서 페이지 주소, giscus 저장소·카테고리 ID, 댓글 테마 주소, 원문·이력·편집 링크 |
| `scripts/build-static.mjs` | 사이트 주소·이름, 원문 링크, 아이콘, 헤더·푸터, 구조화 데이터 작성자 |
| `scripts/build-ai-index.mjs` | 원본 Markdown·GitHub·사이트 주소, llms.txt 제목 |
| `scripts/build-notes.mjs` | 현재 pododala 사이트 주소만 내부 문서 링크로 변환 |
| `scripts/search-wiki.mjs` | 검색 결과의 원본 Markdown 주소 |
| `scripts/test-viewer.mjs` | 본인 주소에 맞춘 링크 기대값. 콘텐츠를 교체하면 특정 문서에 의존하는 테스트도 검토 |
| `robots.txt` | 사이트맵 주소 |
| `giscus-theme.css` | 선택 사항: 테마 이름·색·글꼴. 원본 테마 출처 표기는 유지 |
| `.github/workflows/deploy-pages.yml` | Pages 설정, 사용할 브랜치, 자동 커밋 대상, 배포할 파일 범위 |
| `README.md`, `WIKI_PROTOCOL.md`, `MAINTENANCE.md`, `SYNTHESIS.md`, `FICTION.md` | 문서 상단 주석 참고. 기존 소유자·주소·운영 규칙 검토 |

GitHub 프로젝트 사이트처럼 주소에 저장소 경로가 붙으면 정적 템플릿의 `/style.css`, `/notes/`, `/#...` 같은 루트 기준 경로도 검토해야 한다.
댓글 설정의 ID는 저장소 이름만 바꿔서는 이전되지 않는다. 본인 저장소에 연결된 값을 사용해야 한다.

## JSON 및 원고: 주석 대신 여기서 표시

JSON에는 주석을 넣지 않았고, 원고에 주석을 넣어 생성 데이터나 공개 본문이 달라지는 것도 피했다.

- `wiki/manifest.json`의 `documents`: 기존 173개 문서의 유지·교체·공개 여부 검토. 제목, 요약, 분류, 태그, 출처, 날짜, 관련 문서, 별칭도 해당 콘텐츠에 맞게 정리.
- `wiki/manifest.json`의 `linkAliases`: 기존 문서 ID 호환용 설정. 문서 교체 시 유지 여부 검토.
- `wiki/*.md`: 친구의 기존 본문 전체를 유지할지 결정. 특히 운영 소개인 `living-notes.md`, `editing-principles.md`, `open-questions.md`, `wiki-building-history.md`, `wiki-operations-pipeline.md` 검토.
- 기존 소유자 언급이 있는 원고: `circus-music-history.md`, `circus-music-research-ledger.md`, `circus-music-concepts.md`, `editing-principles.md`, `wiki-building-history.md`, `wiki-operations-pipeline.md`. 과거 이력·출처 언급은 일괄 치환하지 말고 문맥 확인.
- `wiki/relations.json`: 콘텐츠를 교체할 때 문서 ID, 관계, 근거 절, 설명을 함께 정리.
- `wiki/calendar.json`: 본인 문서에 맞는 연대·절기와 연결 문서·절 검토.
- `editorial/ingestions/`, `editorial/crosslinks/`, `editorial/maintenance/log.json`, `editorial/maintenance/reports/`: 친구의 증보·교차 연결·정비 기록. 기존 콘텐츠를 비우는 경우 참조 무결성도 함께 정리.
- `editorial/processed.md`, `sources/conversations/2026-10-22-circus-music-visible.md`: 기존 소유자 언급과 기존 작업 기록의 유지 여부 검토.
- `AGENTS.md`: 현재 pododala 사이트 주소를 반영한 편집 지침을 적용한다.

`publish: false`는 사이트 목록에서 제외하는 설정이다. 저장소와 현재 배포 구성의 파일 접근까지 비공개로 만들지는 않는다.

## 직접 수정하지 않을 자동 생성물

- `notes.json`: `wiki/*.md`와 `wiki/manifest.json`에서 생성.
- `AI_INDEX.md`, `ai/index.json`, `ai/relations.json`, `llms.txt`: 원본 메타데이터와 `scripts/build-ai-index.mjs`에서 생성.
- `editorial/map/*`, `editorial/maintenance/queue.md`: 원고·편집 기록에서 생성.
- 배포 시 생성되는 `notes/<id>/index.html`, `notes/index.html`, `sitemap.xml`: `scripts/build-static.mjs`에서 생성.

주소와 콘텐츠를 교체한 다음 원본 스크립트로 다시 생성하고 검증한다.

## 파일 밖에서 설정할 것

- Git 저장소와 origin은 본인 저장소 `pododala/pododala`에 연결되어 있다. main의 추적 대상과 기본 업로드 대상은 origin으로 설정한다.
- ChatGPT/Codex의 GitHub 앱 계정은 로컬 Git 인증과 별도다. 앱 계정을 바꾸려면 연결 화면에서 본인 계정으로 재인증한다. 저장소 수정만으로 앱 인증이 바뀌지는 않는다.
- 저장소의 Pages 배포 소스와 Actions 권한 설정.
- 댓글을 사용할 경우 본인 저장소의 Discussions와 giscus 연결.
- 검색엔진에 등록할 경우 본인 사이트의 소유권 확인 값 발급.
- 본인 표시 이름, 사이트 제목, GitHub 저장소, 사이트 도메인, 기존 콘텐츠 유지 범위 결정.

현재 내장 AI API 호출이 없으므로 교체할 AI API 키 설정도 없다.
