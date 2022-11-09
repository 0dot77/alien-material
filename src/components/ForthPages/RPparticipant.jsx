import styled from 'styled-components';
import participants from '../../data/participants';
import { useState, lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const GrabModel = lazy(() => import('../../assets/research/rp-models/LoadModel'));

const ContentContainer = styled.article`
  width: 100%;
  height: 80%;
  color: white;
  display: flex;
  justify-content: space-evenly;
  overflow: scroll;
`;

const ContentBox = styled.div`
  
  text-align: center;
  text-orientation: upright;
  text-vertical
  padding: 1rem;
  color: white;
  background-color: blue;
  border-radius: 1rem;
  cursor: pointer;
  opacity: ${(props) => (props.participantNum === props.className ? '1' : '0.5')};
  writing-mode: vertical-lr;
  &:hover {
    opacity: 1;
  }
  transition: opacity 1s ease;
`;

const ParticipantBox = styled.div`
  width: ${(props) => (props.className === props.participantNum ? '30vw' : '3rem')};
  heigth: 100%;
  transition: width 1s ease;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  color: white;
`;

const ParticipantNameBox = styled.div`
  width: 10%;
  height: 100%;
`;

const ParticipantContentBox = styled.div`
  width: 90%;
  heigth: 100%;
  display: flex;
`;

const ParticipantPaper = styled.div`
  width: 100%;
  height: 70%;
`;

// 클릭 됐을 때 내부 컨텐츠가 보여져야 한다.
// 클릭된 클래스 = 클릭했을 때 저장된 state 값 => 해당(클릭된) 오브젝트 안에 내용물 표기

const RPparticipant = () => {
  const [participantNum, setParticipantNum] = useState(null);
  const [participantClicked, setParticipantClicked] = useState(false);

  return (
    <ContentContainer>
      {Object.keys(participants).map((participant, idx) => {
        return (
          <ContentBox
            key={idx}
            className={idx + 1}
            onClick={() => setParticipantNum(idx + 1)}
            participantNum={participantNum}
          >
            <ParticipantBox
              className={idx + 1}
              participantNum={participantNum}
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
                      <h1>신문 컨텐츠</h1>
                    </ParticipantPaper>
                  </Suspense>
                </ParticipantContentBox>
              ) : null}
            </ParticipantBox>
          </ContentBox>
        );
      })}
    </ContentContainer>
  );
};

export default RPparticipant;
