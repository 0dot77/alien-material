import styled from 'styled-components';
import { FullpageSection } from '@ap.cx/react-fullpage';

const Temp = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function HoDesktopSecond() {
  return (
    <FullpageSection
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <Temp>노이즈</Temp>
    </FullpageSection>
  );
}
