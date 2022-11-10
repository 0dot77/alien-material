import styled from 'styled-components';
import participants from '../../data/participants';
import { useState, lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const GrabModel = lazy(() => import('../../assets/research/rp-models/LoadModel'));

const ContentContainer = styled.article`
  width: ${(props) => (props.isMobile ? '80%' : '100%')};
  height: ${(props) => (props.isMobile ? '100%' : '80%')};
  color: white;
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'normal')};
  justify-content: ${(props) => (props.isMobile ? '' : 'space-evenly')};
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-top: ${(props) => (props.isMobile ? '30vh' : '')};
`;

const ContentBox = styled.div`
  width: ${(props) => (props.isMobile ? '100%' : '')};
  height: ${(props) => (props.isMobile ? '' : '100%')};
  text-orientation: ${(props) => (props.isMobile ? 'none' : 'upright')};
  text-vertical: vertical-rl;
  text-align: center;
  color: white;
  background-color: blue;
  border-radius: 1rem;
  cursor: pointer;
  opacity: ${(props) => (props.participantNum === props.className ? '1' : '0.5')};
  writing-mode: ${(props) => (props.isMobile ? '' : 'vertical-lr')};
  margin-top: ${(props) => (props.isMobile ? '1rem' : '')};
  transition: opacity 1s ease;
  &:hover {
    opacity: 1;
  }
`;

const ParticipantBox = styled.div`
  width: ${(props) => (props.className === props.participantNum ? '30vw' : '3rem')};
  heigth: 100%;
  transition: width 1s ease;
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? '' : 'column')};
  color: white;
`;

const ParticipantBoxMobile = styled.div`
  width: 100%;
  height: ${(props) => (props.className === props.participantNum ? '30vh' : '3rem')};
  transition: height 1s ease;
  display: flex;
  color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ParticipantNameBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.isMobile ? '.75rem' : '1rem')};
  margin-top: ${(props) => (props.className === props.participantNum ? '1rem' : '')};
`;

const ParticipantContentBox = styled.div`
  width: ${(props) => (props.isMobile ? '100%' : '90%')};
  heigth: 100%;
  display: flex;
`;

const ParticipantPaper = styled.div`
  width: ${(props) => (props.isMobile ? '50%' : '100%')};
  height: ${(props) => (props.isMobile ? '100%' : '70%')};
  overflow: scroll;
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'none')};
  padding: 1rem;
  ::-webkit-scrollbar {
    display: none;
  }
  img {
    object-fit: contain;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const RPparticipant = ({ isMobile }) => {
  const [participantNum, setParticipantNum] = useState(null);

  return (
    <ContentContainer isMobile={isMobile}>
      {Object.keys(participants).map((participant, idx) => {
        return (
          <ContentBox
            key={idx}
            className={idx + 1}
            onClick={() => setParticipantNum(idx + 1)}
            participantNum={participantNum}
            isMobile={isMobile}
          >
            {isMobile ? (
              <ParticipantBoxMobile
                className={idx + 1}
                participantNum={participantNum}
                isMobile={isMobile}
              >
                <ParticipantNameBox
                  isMobile={isMobile}
                  participantNum={participantNum}
                  className={idx + 1}
                >
                  <h1>{participants[participant].name}</h1>
                </ParticipantNameBox>
                {idx + 1 === participantNum ? (
                  <ParticipantContentBox isMobile={isMobile}>
                    <Suspense fallback={<h1>연구자 데이터 수신 요청중...</h1>}>
                      <Canvas
                        style={{
                          width: '50%',
                          height: '30vh',
                          padding: '1rem',
                        }}
                        camera={{
                          zoom: 20,
                        }}
                      >
                        <ambientLight intensity={1} />
                        <OrbitControls panSpeed={0.1} />
                        {participants[participant].model === null ? null : (
                          <GrabModel modelPath={participants[participant].model} />
                        )}
                      </Canvas>
                      <ParticipantPaper isMobile={isMobile}>
                        {participants[participant].papers_png.map((image, idx) => {
                          return (
                            <img
                              src={image}
                              alt="paper"
                              key={idx}
                            />
                          );
                        })}
                      </ParticipantPaper>
                    </Suspense>
                  </ParticipantContentBox>
                ) : null}
              </ParticipantBoxMobile>
            ) : (
              <ParticipantBox
                className={idx + 1}
                participantNum={participantNum}
                isMobile={isMobile}
              >
                <ParticipantNameBox>
                  <h1>{participants[participant].name}</h1>
                </ParticipantNameBox>
                {idx + 1 === participantNum ? (
                  <ParticipantContentBox>
                    <Suspense fallback={<h1>연구자 데이터 수신 요청중...</h1>}>
                      <Canvas
                        style={{
                          height: '30%',
                          padding: '1rem',
                        }}
                        camera={{
                          zoom: 20,
                        }}
                      >
                        <ambientLight intensity={1} />
                        <OrbitControls panSpeed={0.1} />
                        {participants[participant].model === null ? null : (
                          <GrabModel modelPath={participants[participant].model} />
                        )}
                      </Canvas>
                      <ParticipantPaper>
                        {participants[participant].papers_png.map((image, idx) => {
                          return (
                            <img
                              src={image}
                              alt="paper"
                              key={idx}
                            />
                          );
                        })}
                      </ParticipantPaper>
                    </Suspense>
                  </ParticipantContentBox>
                ) : null}
              </ParticipantBox>
            )}
          </ContentBox>
        );
      })}
    </ContentContainer>
  );
};

export default RPparticipant;
