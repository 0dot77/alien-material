import styled, { keyframes } from 'styled-components';
import { FullpageSection } from '@ap.cx/react-fullpage';
import { logos, logos1, logos2 } from '../../assets/institutionLogo';

const InstitutionContainer = styled.section`
  width: 100%;
  grid-row: 1;
`;

const LogoTreeAnim1 = keyframes`
  from {
    transform: translateX(100vw);
  }

  to {
    transform: translateX(-200vw);
  }
`;

const LogoTreeAnim2 = keyframes`
  
`;

const LogoContainer = styled.article`
  width: 200vw;
  grid-row: 2;
  background-color: rgba(7, 18, 170, 1);
  display: flex;
`;

const LogoBox = styled.div`
  width: calc(100% / 8);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &.logo-tree-1 {
    animation: ${LogoTreeAnim1} linear 20s infinite;
  }

  img {
    width: 80%;
    height: 100%;
    object-fit: contain;
  }
`;

export default function HoDesktopThird() {
  return (
    <FullpageSection
      style={{
        width: '100%',
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '80% 20%',
      }}
    >
      <InstitutionContainer />
      <LogoContainer>
        {/* {logos1.map((logo, index) => {
          return (
            <LogoBox
              key={index}
              className="logo-tree-1"
            >
              <img
                src={logo}
                alt="logo"
              />
            </LogoBox>
          );
        })}
        {logos2.map((logo, index) => {
          return (
            <LogoBox
              key={index}
              className="logo-tree-2"
            >
              <img
                src={logo}
                alt="logo"
              />
            </LogoBox>
          );
        })} */}
        {logos.map((logo) => {
          return (
            <LogoBox className="logo-tree-1">
              <img
                src={logo}
                alt="logo"
              />
            </LogoBox>
          );
        })}
      </LogoContainer>
    </FullpageSection>
  );
}
