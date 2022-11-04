import styled from 'styled-components';
import ProgramLogo from '../../components/ForthPages/ProgramLogo';

const FourthLayout = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  flex-direction: column;
`;

const AMcontainer = styled.section`
  width: 100%;
  height: 100%;
`;

const RMContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export default function HoMobileFourth() {
  return (
    <FourthLayout>
      <AMcontainer>
        <ProgramLogo logo={'am'} />
      </AMcontainer>
      <RMContainer>
        <ProgramLogo logo={'rp'} />
      </RMContainer>
    </FourthLayout>
  );
}
