# 클라우드 아키텍처와 DDD 기반 MSA 설계 개념

> 자동 생성 문서 카드. 직접 수정하지 않는다. 판단은 반드시 아래 원고의 해당 절 본문을 읽고 한다.

- id: `cloud-ddd-msa-architecture` · 분류: IT · 공개 · 원고: [wiki/cloud-ddd-msa-architecture.md](../../../wiki/cloud-ddd-msa-architecture.md) · 5,630자 · 절 14개
- 별칭: DDD MSA 설계, BFF와 API Gateway, 클라우드 아키텍처 계층
- 요약: 클라우드 계층, Gateway·BFF·MSA·DDD·Saga의 개념과 논리·배포 구조 구별, 장애 전파, 데이터 소유권, 설계 시각화 검증 기준을 설명한다.
- 태그: 클라우드, IaaS, PaaS, SaaS, API Gateway, BFF, MSA, DDD, Aggregate, Saga, 아키텍처
- 수정일: 2026-11-11 · 실제 증보일: 2026-11-11 · 검토: needs_review

## 절 목차

들여쓰기가 소제목 경로(상위 절 아래의 하위 절)다. `L시작–끝`은 원고 파일에서 그 절 고유 부분(하위 절 제외)의 줄 범위, 글자 수는 그 본문 분량, 8자리 해시는 그 줄들의 내용 지문으로 원고가 바뀌면 달라진다. 첫 문장은 위치 확인용이며 절의 내용을 대표하지 않는다.

- (도입부) · L2–3 · 153자 · `74c2d491` — 클라우드 이전과 애플리케이션 아키텍처 변경은 서로 다른 결정이다.
- 클라우드 서비스 모델: IaaS·PaaS·SaaS · L5–11 · 240자 · `81a0e868` — IaaS(아이아스): 가상 서버·네트워크·스토리지 등 인프라를 제공한다.
- WEB·WAS·DB와 Gateway Layer · L13–17 · 302자 · `6f0ba03b` — 전통적인 웹 애플리케이션은 웹 서버가 요청을 받아 WAS로 전달하고, WAS가 업무 로직과 데이터 접근을 처리하는 구조를 사용할 수 있다.
- BFF(Backend for Frontend) · L19–25 · 420자 · `28e25d62` — BFF는 웹·모바일 등 클라이언트 유형별 요구에 맞춰 백엔드 API를 호출하고 결과를 조합·가공하는 계층이다.
- MSA와 서비스 분리 · L27–31 · 266자 · `d46688ed` — MSA(Microservices Architecture)는 업무 책임에 따라 서비스를 분리해 독립적으로 개발·배포·확장할 수 있도록 하는 접근이다.
- DDD와 Aggregate 할당 · L33–43 · 363자 · `6dbfb8cf` — DDD(Domain-Driven Design)는 업무 도메인의 개념과 규칙을 중심으로 소프트웨어를 설계하는 접근이다.
- Saga 패턴 · L45–52 · 321자 · `d563317b` — Saga는 여러 서비스에 걸친 업무를 각각의 로컬 트랜잭션으로 처리하고, 중간 실패 시 별도 보상 트랜잭션으로 이전 작업의 효과를 취소·상쇄하도록 설계하는 패턴이다.
- DDD 기반 MSA 설계의 시각화 · L54–65 · 364자 · `01ca676b` — '시각화'는 도메인 경계, 애그리거트, 서비스 책임, API·이벤트 관계 등을 다이어그램이나 모델링 도구로 표현한다는 뜻일 수 있다.
- 논리 계층과 물리 배치의 구별 · L68–72 · 367자 · `d8743dc2` — 아키텍처 다이어그램의 'Layer'는 기능적 책임의 분류일 수도 있고 실제로 분리 배포된 실행 단위일 수도 있다.
- Gateway와 BFF의 책임 경계 · L74–86 · 593자 · `192852c2` — Gateway와 BFF 모두 요청을 중계할 수 있지만 주된 관심사가 다르다.
- 모놀리스에서 MSA로: 분리의 이익과 비용 · L88–94 · 464자 · `a66c5606` — 단일 애플리케이션 내부에서도 Controller가 여러 Service를 호출하고 하나의 트랜잭션으로 데이터를 변경할 수 있다.
- 장애 지점과 장애 전파는 다르다 · L96–100 · 375자 · `e96c3f09` — 단일 장애점(SPOF)은 하나의 구성요소가 고장 나면 전체 기능이 중단되는 지점을 말한다.
- 데이터 소유권과 분산 트랜잭션의 경계 · L102–106 · 375자 · `247a4482` — 애그리거트는 일관성을 유지할 경계를 제시하고, 서비스 경계는 배포와 데이터 책임을 구분한다.
- 설계 시각화 산출물의 검증 · L108–120 · 459자 · `d76b0375` — DDD 기반 설계를 시각화했다는 주장은 그림의 존재만으로 충분하지 않다.
- 아키텍처 검토 기준 · L122–124 · 189자 · `01777e10` — 클라우드 이전에서 핵심 질문은 '새 계층을 도입하는가'보다 기존 구조의 어떤 문제를 해결하는가이다.

## 장부에 기록된 반영 지식

- **클라우드 서비스 모델: IaaS·PaaS·SaaS**
  - 클라우드 서비스 모델 · `ing-20261111-cloud-ddd-msa-architecture`
- **WEB·WAS·DB와 Gateway Layer**
  - 웹 서버와 게이트웨이 역할 · `ing-20261111-cloud-ddd-msa-architecture`
- **BFF(Backend for Frontend)**
  - BFF 역할과 한계 · `ing-20261111-cloud-ddd-msa-architecture`
- **MSA와 서비스 분리**
  - MSA 분리와 장애 격리 · `ing-20261111-cloud-ddd-msa-architecture`
- **DDD와 Aggregate 할당**
  - DDD와 애그리거트 할당 · `ing-20261111-cloud-ddd-msa-architecture`
- **Saga 패턴**
  - Saga 분산 트랜잭션 · `ing-20261111-cloud-ddd-msa-architecture`
- **DDD 기반 MSA 설계의 시각화**
  - DDD 설계 시각화 산출물 · `ing-20261111-cloud-ddd-msa-architecture`
- **아키텍처 검토 기준**
  - 아키텍처 도입 평가 기준 · `ing-20261111-cloud-ddd-msa-architecture`
- **논리 계층과 물리 배치의 구별**
  - 논리 계층과 물리 배치의 구별 · `ing-20261111-cloud-architecture-enrichment`
- **Gateway와 BFF의 책임 경계**
  - Gateway와 BFF의 책임 경계 · `ing-20261111-cloud-architecture-enrichment`
- **모놀리스에서 MSA로: 분리의 이익과 비용**
  - 모놀리스에서 MSA로: 분리의 이익과 비용 · `ing-20261111-cloud-architecture-enrichment`
- **장애 지점과 장애 전파는 다르다**
  - 장애 지점과 장애 전파는 다르다 · `ing-20261111-cloud-architecture-enrichment`
- **데이터 소유권과 분산 트랜잭션의 경계**
  - 데이터 소유권과 분산 트랜잭션의 경계 · `ing-20261111-cloud-architecture-enrichment`
- **설계 시각화 산출물의 검증**
  - 설계 시각화 산출물의 검증 · `ing-20261111-cloud-architecture-enrichment`
