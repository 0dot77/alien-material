import styled from 'styled-components';
import ForthPageLayout from '../../../components/ForthPages/ForthPageLayout';
import RPparticipant from '../../../components/ForthPages/RPparticipant';

const ParticipantContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function RProgram() {
  return (
    <ForthPageLayout>
      <ParticipantContainer>
        <RPparticipant />
      </ParticipantContainer>
    </ForthPageLayout>
  );
}
