import styled from 'styled-components';
import RPLayout from '../../../components/ForthPages/RPLayout';
import RPparticipant from '../../../components/ForthPages/RPparticipant';
import { useMediaQuery } from 'react-responsive';

const ParticipantContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function RProgram() {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return (
    <RPLayout>
      <ParticipantContainer>
        <RPparticipant isMobile={isMobile} />
      </ParticipantContainer>
    </RPLayout>
  );
}
