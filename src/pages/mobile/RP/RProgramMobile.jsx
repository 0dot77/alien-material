import RPLayout from '../../../components/ForthPages/RPLayout';
import styled from 'styled-components';
import RPparticipant from '../../../components/ForthPages/RPparticipant';
import { useMediaQuery } from 'react-responsive';

const ParticipantContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RProgramMobile = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return (
    <RPLayout>
      <ParticipantContainer>
        <RPparticipant isMobile={true} />
      </ParticipantContainer>
    </RPLayout>
  );
};

export default RProgramMobile;
