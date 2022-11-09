import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import amrpLogoPng from '../../assets/AMP_logo.png';
import amrpLogoWebp from '../../assets/AMP_logo.png';
import { LogoAnim } from '../Logo';

const ForthPageLayoutContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const NavigateLogoContainer = styled.nav`
  position: absolute;
  padding: 1rem;
  cursor: pointer;
  animation: ${LogoAnim} 2s infinite alternate;
  picture {
    position: relative;
    width: 10rem;
    object-fit: contain;
    img {
      width: 10rem;
    }
  }
`;

export default function ForthPageLayout({ children }) {
  const nav = useNavigate();
  return (
    <ForthPageLayoutContainer>
      <NavigateLogoContainer
        onClick={() => {
          nav('/');
        }}
      >
        <picture>
          <source srcSet={amrpLogoWebp} />
          <img
            src={amrpLogoPng}
            alt="navigate-logo"
          />
        </picture>
      </NavigateLogoContainer>
      {children}
    </ForthPageLayoutContainer>
  );
}
