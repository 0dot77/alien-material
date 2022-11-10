import ForthPageLayout from '../../../components/ForthPages/ForthPageLayout';
import styled from 'styled-components';
import RPparticipant from '../../../components/ForthPages/RPparticipant';

const ParticipantContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RProgramMobile = () => {
  return (
    <ForthPageLayout>
      <ParticipantContainer>
        <RPparticipant isMobile={true} />
      </ParticipantContainer>
    </ForthPageLayout>
  );
};

export default RProgramMobile;
