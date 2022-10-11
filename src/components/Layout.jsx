import styled from 'styled-components';

const Mobile = styled.main`
  width: 100%;
  height: 400vh;
  display: flex;
  flex-direction: column;
`;

const Desktop = styled.main`
  width: 100%;
  height: 400vh;
  display: flex;
`;

const MainLayout = styled.section`
  width: 100%;
  height: 100vh;
`;

const MobileLayout = ({ children }) => {
  return <Mobile>{children}</Mobile>;
};

const DesktopLayout = ({ children }) => {
  return <Desktop>{children}</Desktop>;
};

export { MobileLayout, DesktopLayout, MainLayout };
