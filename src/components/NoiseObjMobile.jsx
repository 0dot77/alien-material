import { Canvas } from '@react-three/fiber';
import styled, { keyframes } from 'styled-components';
import { MeshDistortMaterial, Sphere, Html } from '@react-three/drei';
import { Suspense } from 'react';
import { useState } from 'react';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import descriptionData from '../data/descriptionData';

const descriptionAnim = keyframes`
  0%{
    opacity:.5;
  }
  100%{
    opacity:1;
  }
`;

const HtmlContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  cursor: default;
`;

const DescriptionCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: purple;
  animation: ${descriptionAnim} 1s infinite alternate;
  position: absolute;
  z-index: 100;
  filter: ${(props) => (props.clickedNum === props.className ? 'blur(0)' : 'blur(3px)')};
  transition: all 1s ease;
  cursor: pointer;
`;

const DescriptionContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding-top: 0.25rem;
  padding-bottom: 0.1rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  overflow: scroll;
  width: 100vw;
  height: 100%;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  opacity: ${(props) => (props.clickedNum === props.className ? '1' : '0')};
  font-size: 16px;
  h1 {
    font-size: 1em;
    margin-bottom: 0.5em;
    text-align: center;
  }
  p {
    font-size: 0.75em;
    text-align: center;
  }
  .eng {
    margin-bottom: 0.5rem;
  }
  transition: opacity 1s ease;
`;

export default function NoiseObjMobile() {
  const [clicked, setClicked] = useState(null);
  return (
    <Canvas
      linear
      gl={{
        powerPreference: 'high-performance',
        alpha: true,
        antialias: false,
        stencil: false,
        depth: false,
      }}
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
