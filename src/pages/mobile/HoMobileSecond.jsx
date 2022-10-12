import styled from 'styled-components';
import { FullpageSection } from '@ap.cx/react-fullpage';

const SecondLayout = styled.section`
  width: 100%;
  height: 100vh;
`;

export default function HoMobileSecond() {
  return (
    <FullpageSection
      style={{
        width: '100%',
        height: '100vh',
      }}
    ></FullpageSection>
  );
}
