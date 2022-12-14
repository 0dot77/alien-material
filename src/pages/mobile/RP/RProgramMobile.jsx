import RPLayout from '../../../components/ForthPages/RPLayout';
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
    <RPLayout>
      <ParticipantContainer>
        <RPparticipant checkDeviceIsMobile={true} />
      </ParticipantContainer>
    </RPLayout>
  );
};

export default RProgramMobile;
