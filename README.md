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
    - [ ] 뉴스 페이지
      - [ ] 뉴스의 화질? 사이즈 조절하기
  - [ ] 관찰일지 페이지 구성
    - [ ] 페이지 새로 하나 만들기
    - [ ] 애니메이션

- 노이즈
  - [ ] lazy loading 혹은 suspense를 사용해서 intersection observe가 작동하면 동작하도록 만들기 (최적화)

# 참고 자료

- [Razy loading](https://web.dev/i18n/ko/code-splitting-suspense/)
