# 외계물질 프로젝트

# Dev log

Structure

- desktop mobile 분리
- Scroll 반응

_2022.09.12_

- [x] 기본 프로젝트 세팅
  - [x] react를 기반으로 Greensock 같은 애니메이션 라이브러리를 적극적으로 활용해보기

_2022.10.11_

- Structure

  - [x] desktop / mobile 분리
    - [x] Layout 정리하기
    - [x] background image 적용하기
    - [x] main font
    - [x] mobile notch 수정
      - https://erikmartinjordan.com/safari-ios-notch-change-color
    - [ ] CDN 전송방식 서치
    - [x] full page scroll 방식 사용하기
      - react-full-page
    - [x] 스크롤 훅 만들기

- page1

  - [x] logo
  - [x] video

_2022.10.14_

- page 2
  - [x] react-three를 사용해서 노이즈 오브젝트 제작
    - https://codesandbox.io/s/el11e?file=/src/App.js
  - [x] 특정 지점을 클릭하면 텍스트가 팝업되도록? 혹은 화면에 표시되도록 설정하기

_2022.10.17_

- 로고

  - [x] png로 다 짜르기
  - [x] png -> webp
  - [x] 데이터 분리하기
  - [x] GSAP 적용하기
  - [x] image preload
    - [ ] loading을 따로 만들어야 할까? 이미지가 너무 많다.

_2022.10.18_

- 뉴스

  - [x] 페이지 선택 버튼 만들기
    - [x] 뉴스 페이지
      - [ ] 뉴스의 화질? 사이즈 조절하기
  - [ ] 관찰일지 페이지 구성
    - [ ] 모델 업로드
    - [x] 관찰일지 업로드
    - [ ] 페이지 새로 하나 만들기
    - [ ] 애니메이션

- 노이즈
  - [ ] lazy loading 혹은 suspense를 사용해서 intersection observe가 작동하면 동작하도록 만들기 (최적화)

_TODO_

- [x] 모바일 반응형 틀 잡기
- [x] 첫 번째 페이지 GIF 수정
- [ ] 두 번째 페이지 텍스쳐 추가 및 설명 추가하기
- [x] 세 번째 페이지 팝업 방식 수정하기
- [x] 네 번째 페이지 RP 참여자 기록 추가하기
  - [ ] 전환 방식 고민하기 (모바일에서도 반영 가능한?..)
- [ ] 휴먼관찰일지 전환 추가

_2022.11.10_

- [ ] RP page
  - [ ] reloading 시에 media query 에러 수정하기
  - [ ] 화면 사이즈 조절해보기
  - [ ] 스크린 snap 오작동 오류 잡아내기
  - [ ] 쿼리 잘 동작하면, 기존에 작성해둔 모바일 / 데스크톱 분리 페이지 삭제하기
- [x] 외계물질 (두 번째)
  - [x] 포인트 설정하고 설명 적기
  - [ ] data 한 곳에 모아주기

# 참고 자료

- [Razy loading](https://web.dev/i18n/ko/code-splitting-suspense/)
