import styled from 'styled-components';
import participants from '../../data/participants';
import { useState, lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { pageState } from '../../data/atom';
import { useRecoilState } from 'recoil';

const GrabModel = lazy(() => import('../../assets/research/rp-models/LoadModel'));

const ContentContainer = styled.article`
  width: ${(props) => (props.checkDeviceIsMobile ? '80%' : '100%')};
  height: ${(props) => (props.checkDeviceIsMobile ? '100%' : '80%')};
  color: white;
  display: flex;
  flex-direction: ${(props) => (props.checkDeviceIsMobile ? 'column' : 'normal')};
  justify-content: ${(props) => (props.checkDeviceIsMobile ? '' : 'space-evenly')};
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-top: ${(props) => (props.checkDeviceIsMobile ? '30vh' : '')};
`;

const ContentBox = styled.div`
  width: ${(props) => (props.checkDeviceIsMobile ? '100%' : '')};
  height: ${(props) => (props.checkDeviceIsMobile ? '' : '100%')};
  text-orientation: ${(props) => (props.checkDeviceIsMobile ? 'none' : 'upright')};
  text-align: center;
  color: white;
  background-color: blue;
  border-radius: 1rem;
  cursor: pointer;
  opacity: ${(props) => (props.participantNum === props.className ? '1' : '0.5')};
  writing-mode: ${(props) => (props.checkDeviceIsMobile ? '' : 'vertical-lr')};
  margin-top: ${(props) => (props.checkDeviceIsMobile ? '1rem' : '')};
  transition: opacity 1s ease;
  &:hover {
    opacity: 1;
  }
`;

const ParticipantBox = styled.div`
  width: ${(props) => (props.className === props.participantNum ? '30vw' : '3rem')};
  height: 100%;
  transition: width 1s ease;
  display: flex;
  flex-direction: ${(props) => (props.checkDeviceIsMobile ? '' : 'column')};
  color: white;
`;

const ParticipantBoxMobile = styled.div`
  width: 100%;
  height: ${(props) => (props.className === props.participantNum ? '30vh' : '3rem')};
  transition: height 1s ease;
  display: flex;
  flex-direction: column;
  color: white;
`;

const ParticipantContentBox = styled.div`
  width: ${(props) => (props.checkDeviceIsMobile ? '100%' : '90%')};
  height: 100%;
  display: flex;
  overflow: hidden;
  h1 {
    text-align: center;
  }
  .collage {
    width: 100%;
    height: 50%;
    padding: 1rem;
    cursor: default;
  }
`;

const ParticipantNameBox = styled.div`
  width: ${(props) => (props.checkDeviceIsMobile ? '100%' : '10%')};
  height: ${(props) => (props.checkDeviceIsMobile ? '5rem' : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.checkDeviceIsMobile ? '.75rem' : '1rem')};
  margin-top: ${(props) => (props.checkDeviceIsMobile ? '.25rem' : '0')};
  margin-left: ${(props) => (props.checkDeviceIsMobile ? '0' : '1.25rem')};
`;

const ParticipantPaper = styled.div`
  width: ${(props) => (props.checkDeviceIsMobile ? '50%' : '100%')};
  height: ${(props) => (props.checkDeviceIsMobile ? '100%' : '70%')};
  overflow: scroll;
  display: flex;
  flex-direction: ${(props) => (props.checkDeviceIsMobile ? 'column' : 'none')};
  padding: 1rem;
  ::-webkit-scrollbar {
    display: none;
  }
  img {
    object-fit: contain;
    width: 100%;
    margin-bottom: 1rem;
  }

  .video {
    border: none;
    height: 100%;
  }
`;

const RPparticipant = ({ checkDeviceIsMobile }) => {
  const [isHacked] = useRecoilState(pageState);
  const [participantNum, setParticipantNum] = useState(null);
  return (
    <ContentContainer checkDeviceIsMobile={checkDeviceIsMobile}>
      {Object.keys(participants).map((participant, idx) => {
        return (
          <ContentBox
            key={idx}
            className={idx + 1}
            onClick={() => setParticipantNum(idx + 1)}
            participantNum={participantNum}
            checkDeviceIsMobile={checkDeviceIsMobile}
          >
            {checkDeviceIsMobile ? (
              <ParticipantBoxMobile
                className={idx + 1}
                participantNum={participantNum}
                checkDeviceIsMobile={checkDeviceIsMobile}
              >
                <ParticipantNameBox
                  checkDeviceIsMobile={checkDeviceIsMobile}
                  participantNum={participantNum}
                  className={idx + 1}
                >
                  <h1>{participants[participant].name}</h1>
                </ParticipantNameBox>
                {idx + 1 === participantNum ? (
                  <ParticipantContentBox checkDeviceIsMobile={checkDeviceIsMobile}>
                    {isHacked ? (
                      <>
                        <img
                          className="collage"
                          src={participants[participant].collage}
                        />
                        <ParticipantPaper>
                          {participants[participant].youtube_url.map((image, idx) => {
                            return (
                              <iframe
                                allowFullScreen
                                className="video"
                                src={image}
                                alt="paper"
                                key={idx}
                              />
                            );
                          })}
                        </ParticipantPaper>
                      </>
                    ) : (
                      <Suspense fallback={<h1>????????? ????????? ?????? ?????????...</h1>}>
                        <Canvas
                          style={{
                            width: '50%',
                            height: '30vh',
                            padding: '1rem',
                          }}
                          gl={{
                            powerPreference: 'high-performance',
                            alpha: true,
                            antialias: false,
                            stencil: false,
                            depth: false,
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
                        <ParticipantPaper checkDeviceIsMobile={checkDeviceIsMobile}>
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
                    )}
                  </ParticipantContentBox>
                ) : null}
              </ParticipantBoxMobile>
            ) : (
              <ParticipantBox
                className={idx + 1}
                participantNum={participantNum}
                checkDeviceIsMobile={checkDeviceIsMobile}
              >
                <ParticipantNameBox>
                  <h1>{participants[participant].name}</h1>
                </ParticipantNameBox>
                {idx + 1 === participantNum ? (
                  <ParticipantContentBox>
                    {isHacked ? (
                      <>
                        <img
                          className="collage"
                          src={participants[participant].collage}
                        />
                        <ParticipantPaper>
                          {participants[participant].youtube_url.map((image, idx) => {
                            return (
                              <iframe
                                className="video"
                                src={image}
                                alt="paper"
                                key={idx}
                              />
                            );
                          })}
                        </ParticipantPaper>
                      </>
                    ) : (
                      <Suspense fallback={<h1>????????? ????????? ?????? ?????????...</h1>}>
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
                    )}
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
