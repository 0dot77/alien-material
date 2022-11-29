import HumanModelLoader from '../../assets/HumanResearch/model/HumanModelLoader';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
const HumanScaning = ({ sc }) => {
  return (
    <Suspense fallback={null}>
      <Canvas
        style={{
          width: '100%',
          height: '100%',
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
        <HumanModelLoader sc={sc} />
      </Canvas>
    </Suspense>
  );
};
export default HumanScaning;
