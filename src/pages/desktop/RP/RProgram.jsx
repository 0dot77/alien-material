import styled from 'styled-components';
import RPLayout from '../../../components/ForthPages/RPLayout';
import RPparticipant from '../../../components/ForthPages/RPparticipant';

const ParticipantContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function RProgram() {
  return (
    <RPLayout>
      <ParticipantContainer>
        <RPparticipant isMobile={false} />
      </ParticipantContainer>
    </RPLayout>
  );
}
