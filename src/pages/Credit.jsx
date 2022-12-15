import styled from 'styled-components';
import Logo from '../components/Logo';

const CreditContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  line-height: 1.5;
  @media screen and (max-width: 767px) {
    font-size: 0.5rem;
    img {
      width: 40%;
    }
  }

  .main {
    backdrop-filter: drop-shadow(4px 4px 10px blue);
    margin-right: 1rem;

    @media screen and (max-width: 767px) {
      margin-right: 0.5rem;
    }
  }
`;

const MainLogoContainer = styled.div`
  width: 10rem;
  height: auto;
`;

export default function Credit() {
  return (
    <CreditContainer>
      <MainLogoContainer>
        <Logo
          logoSize={'10rem'}
          url={true}
        />
      </MainLogoContainer>
      <br />
      <div>
        <div>
          <span className="main">제작</span>
          <span>상상탐사기지 보이저런처</span>
        </div>
        <div>
          <span className="main">후원</span>
          <span>한국문화예술위원회 온라인미디어예술활동지원사업</span>
        </div>
        <div>
          <span className="main">아트디렉터</span>
          <span>김연준</span>
        </div>
        <div>
          <span className="main">웹 개발</span>
          <span>유태양</span>
        </div>
        <div>
          <span className="main">드라마</span>
          <span>고봉주 김연준 배명한 이향은</span>
        </div>
        <div>
          <span className="main">PD</span>
          <span>강윤구</span>
        </div>
        <div>
          <span className="main">프로덕션 매니저</span>
          <span>안주현</span>
        </div>
        <div>
          <span className="main">협력</span>
          <span>김혜원</span>
        </div>
      </div>
    </CreditContainer>
  );
}
