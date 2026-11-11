# 정비 대기열

> 자동 생성(`scripts/build-maintenance-queue.mjs`). 직접 수정하지 않는다. 기계가 원고 전체에서 찾은 **신호**일 뿐이며, 무엇을 고칠지는 [정비 절차](../../MAINTENANCE.md)에 따라 원고를 읽고 판단한다.

마지막 정비: **M001** (2026-11-02) · [보고서](reports/M001.md) · 다음 정비 버전: **M002**

원고 5개 · 변경 문서 5 · 고립 5 · 한쪽 연결 0 · 보류 0 · 열린 교차 제안 0

## 1. 지난 정비 이후 변경된 문서 (5)

manifest의 수정일이 2026-11-02 이후(당일 포함)이거나 수정일이 없는 문서. 분류별로 묶었으며, 양이 많으면 분류 단위로 나누어 처리한다.

- **물류** (1): `postal-parcel-process`
- **음악** (1): `red-velvet-debut`
- **정치** (1): `us-senate-election-2026`
- **프로젝트** (1): `pododala-project-structure`
- **IT** (1): `cloud-ddd-msa-architecture`

## 2. 들어오는 연결이 없는 문서 (5)

다른 문서의 관련 문서·본문 링크·확인된 관계 어디에도 등장하지 않는다. 직접 관련 문서가 있는지 본문을 읽고 확인한다.

- `pododala-project-structure` pododala 개인 위키: 프로젝트 구조와 운영 흐름
- `postal-parcel-process` 우체국 소포 프로세스
- `red-velvet-debut` 레드벨벳 데뷔
- `us-senate-election-2026` 2026년 미국 상원선거: 개표 현황과 관전 지점
- `cloud-ddd-msa-architecture` 클라우드 아키텍처와 DDD 기반 MSA 설계 개념

## 3. 한쪽에서만 건 관련 문서 (0)

`A → B`는 A의 관련 문서에 B가 있으나 B에는 A가 없다는 뜻이다. 반대 방향도 직접 관련일 때만 맞춘다.


## 4. 관련 문서가 없는 문서 (5)

- `pododala-project-structure` pododala 개인 위키: 프로젝트 구조와 운영 흐름
- `postal-parcel-process` 우체국 소포 프로세스
- `red-velvet-debut` 레드벨벳 데뷔
- `us-senate-election-2026` 2026년 미국 상원선거: 개표 현황과 관전 지점
- `cloud-ddd-msa-architecture` 클라우드 아키텍처와 DDD 기반 MSA 설계 개념

## 5. 제목·소제목이 비슷한 문서 쌍 (상위 15)

제목·별칭·소제목의 글자 2-gram 유사도(0~1)다. 중복이 아니라 **대조해 볼 후보**이며, 이미 연결된 쌍도 표시한다.

- `pododala-project-structure` ↔ `postal-parcel-process` · 0.05
- `us-senate-election-2026` ↔ `cloud-ddd-msa-architecture` · 0.05
- `red-velvet-debut` ↔ `us-senate-election-2026` · 0.04
- `pododala-project-structure` ↔ `us-senate-election-2026` · 0.04
- `red-velvet-debut` ↔ `cloud-ddd-msa-architecture` · 0.03
- `pododala-project-structure` ↔ `cloud-ddd-msa-architecture` · 0.02
- `pododala-project-structure` ↔ `red-velvet-debut` · 0.01
- `postal-parcel-process` ↔ `cloud-ddd-msa-architecture` · 0.01
- `postal-parcel-process` ↔ `us-senate-election-2026` · 0.01
- `postal-parcel-process` ↔ `red-velvet-debut` · 0.00

## 6. 보류 항목 (0)


## 7. 열린 교차 편집 제안 (0)

정비에서 승인하지 않는다. 판단 근거를 보고서에 적어 사용자 결정을 요청한다.


## 8. 분량 참고

분량만으로 나누거나 합치지 않는다. 내용상 이유가 있을 때만 보고서에 제안한다. 기준: 10,000자 초과 / 1,500자 미만.

- 긴 문서 (1): `pododala-project-structure` 14,041자
- 짧은 문서 (1): `red-velvet-debut` 523자

## 9. 분류 참고

분류 5개: 프로젝트 1, 물류 1, 음악 1, 정치 1, IT 1
문서가 하나뿐인 분류 5개: 프로젝트, 물류, 음악, 정치, IT. 분류 체계 변경은 제안만 한다.
