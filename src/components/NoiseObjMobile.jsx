import { Canvas } from '@react-three/fiber';
import styled, { keyframes } from 'styled-components';
import { MeshDistortMaterial, Sphere, Html } from '@react-three/drei';
import { Suspense } from 'react';
import { useState } from 'react';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing';

const descriptionData = {
  0: {
    title: 'CognitiveSensort System 인지 감각 체계',
    engDes:
      'There is a study that detects the flow of time and space and externalstimuli through an unknown sound wave system from the whole body. It consistsof a high-dimensional form by pulling nearby objects toward the body, but theidentity of the pulling force has not been revealed. In academia, the argumentthat magnetic force is used and the argument that adhesive force is used are atodds.',
    korDes:
      '전신에서 나오는 알려지지 않는 음파 체계를 통해 시공간의 흐름과 외부의 자극을 감지한다는 연구가 있다. 주변의 물체를 몸 쪽으로 당겨 고차원적 형태로 구성되는데, 당기는 힘의 정체는 밝혀진 바가 없다. 학계에서는 자기력을 사용한다는 주장과 접착력을 사용한다는 주장이 대립 중이다.',
  },
  1: {
    title: 'Communication system 소통 체계',
    engDes:
      "After three days of stabilization in the primarylatent object of extraterrestrial matter, that is, the host object, generatesits own non-conductor, and uses the non-conductor to detect the intrinsicfrequency of the area that Earth's life cannot hear. Dr. Haruki Kitano of Japanonce claimed that the frequency communicates with extraterrestrial materials onEarth.",
    korDes:
      '외계물질의 1차 잠복한 물체 즉, 숙주 물체에서 3일 간의 안정기가 지나면 비도기관를 자체 생성하며, 비도기관 이용해 지구생명체는 들을 수 없는 영역의 고유주파수를 감지한다. 일본의 기타노 하루키박사는, 이 주파수를 사용하여 지구에 존재하는 외계물질끼리 소통한다고 주장한 바가 있다.',
  },
  2: {
    title: 'Sensory cell Gyemuron 감각세포 계뮤런',
    engDes:
      "Extraterrestrial matter has a unique sensory cellcalled 'Gymureun'. It replicates the Gyemuron cells and senses external stimuliwith electrical signals. The neural nodes form a complex 'distributed network'that is independent and interconnected. Due to this characteristic of\"Gymureun,\" it has the ability to regenerate itself from muscletissue to nerve endings.",
    korDes:
      "외계물질은 ‘계뮤런’이라는 독특한 감각 세포를 갖고 있다. 계뮤런 세포들을 복제하여 전기 신호로 외부의 자극들을 감각한다. 신경절이 독립적이고 상호 연계되는 복잡한 '분산형 네트워크'를 형성하고 있다.‘계뮤런’ 의 이런 특징으로 인해 근육조 직부터 신경 말단부까지 다시 자라게 하는 자가재생능력이 있다.",
  },
  3: {
    title: 'Communication system 통신 체계',
    engDes:
      'Some of the extraterrestrial materials also formorgans that look similar to "straws" used by humans. It is acommunication institution that can communicate with outer space usinghigh-strength materials that are durable and shock resistant. It transmits andreceives information to and from the universe in the form of overlapping wavefunctions. A vast amount of information is processed with less energy at aspeed of 1 light per 0.5 seconds.',
    korDes:
      '외계물질 중 일부, 인간들이 사용하는 ‘빨대’와 비슷하게 생긴 기관을 형성하기도 한다. 내구성과 충격에 강한 고강도 소재를 이용해 지구 밖 우주와 통신이 가능한 통신 기관이다. 중첩된 파동함수의 형태로 우주와 정보를 송수신한다. 0.5초에 1광속의 속도로 방대한 양의 정보를 적은 에너지로 처리한다.',
  },
  4: {
    title: 'Memory system 기억 장치 체계',
    engDes:
      'Extraterrestrial substances form the hippocampus cortex and rememberinformation whenever they are stimulated from the outside. Each memory deviceis separated to store visual and auditory information separately, and the timeto remember the information is almost infinite.',
    korDes:
      '외계물질은 해마대피질을 형성해 외부에서 자극을 받을 때마다 정보를 기억한다. 시각과 청각의 정보를 분리하여 저장하도록 각각의 기억장치가 분리되어 있고,그 정보들을 기억하는 시간은 무한에 가깝다.',
  },
};

const descriptionAnim = keyframes`
  0%{
    opacity:.5;
  }
  100%{
    opacity:1;
  }
`;

const HtmlContainer = styled.section`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DescriptionCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: purple;
  animation: ${descriptionAnim} 1s infinite alternate;
  position: absolute;
  z-index: 100;
  position: absolute;
  filter: ${(props) => (props.clickedNum === props.className ? 'blur(0)' : 'blur(3px)')};
  transition: all 1s ease;
`;

const DescriptionContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding-top: 0.25rem;
  padding-bottom: 0.1rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  width: 100vw;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  opacity: ${(props) => (props.clickedNum === props.className ? '1' : '0')};
  h1 {
    font-size: 0.75rem;
    margin-bottom: 0.15rem;
    text-align: center;
  }
  p {
    font-size: 0.1rem;
    text-align: center;
  }
  .eng {
    margin-bottom: 0.1rem;
  }
  transition: opacity 1s ease;
`;

export default function NoiseObjMobile() {
  const [clicked, setClicked] = useState(null);
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        zIndex: '0',
      }}
    >
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={50}
          height={400}
        />
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={2}
          height={10}
        />
        <Noise opacity={1} />
        <Vignette
          eskil={false}
          offset={0.1}
          darkness={0.1}
        />
      </EffectComposer>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
      />
      <pointLight
        position={[0, -10, 5]}
        intensity={1}
      />
      <Html
        as="div"
        center={true}
        style={{
          heigth: '100vh',
        }}
      >
        {Object.keys(descriptionData).map((idx, description) => {
          return (
            <HtmlContainer key={idx}>
              <DescriptionCircle
                className={idx}
                clickedNum={clicked}
                onClick={() => {
                  return clicked === idx ? setClicked(null) : setClicked(idx);
                }}
              />
              <DescriptionContainer
                className={idx}
                clickedNum={clicked}
              >
                <h1>{descriptionData[description].title}</h1>
                <p className="eng">{descriptionData[description].engDes}</p>
                <p className="kor">{descriptionData[description].korDes}</p>
              </DescriptionContainer>
            </HtmlContainer>
          );
        })}
      </Html>
      <Suspense fallback={null}>
        <Sphere
          visible
          position={[0, 0, 0]}
          args={[1, 16, 200]}
          scale={(1.5, 1.5, 1.5)}
        >
          <MeshDistortMaterial
            attach="material"
            color="blue"
            distort={0.4}
            speed={1}
            roughness={0}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  );
}
