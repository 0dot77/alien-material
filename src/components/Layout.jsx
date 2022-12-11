import styled from 'styled-components';
import Timer from './Timer';
import Icon from './Icon';

const Mobile = styled.main`
  width: 100%;
  font-family: 'KoPubWorldDotum';
  max-height: 100vh;
`;

const Desktop = styled.main`
  width: 100%;
  font-family: 'KoPubWorldDotum';
  max-height: 100vh;
`;

const TopLayer = styled.nav`
  width: 100vw;
  height: auto;
  position: fixed;
  top: 0;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 1000000;
`;

const MobileLayout = ({ children }) => {
  return (
    <Mobile>
      <TopLayer>
        <Icon isMobile={true} />
        <Timer />
      </TopLayer>
      {children}
    </Mobile>
  );
};

const DesktopLayout = ({ children }) => {
  return (
    <Desktop>
      <TopLayer>
        <Icon />
        <Timer />
      </TopLayer>
      {children}
    </Desktop>
  );
};

export { MobileLayout, DesktopLayout };
