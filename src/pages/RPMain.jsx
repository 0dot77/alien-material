import { Suspense, lazy } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import RPLayout from '../components/ForthPages/RPLayout';
import RPparticipant from '../components/ForthPages/RPparticipant';

const ParticipantContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RPMain = () => {
  const checkMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return (
    <RPLayout>
      <ParticipantContainer>
        <RPparticipant checkDeviceIsMobile={checkMobile} />
      </ParticipantContainer>
    </RPLayout>
  );
};

export default RPMain;
