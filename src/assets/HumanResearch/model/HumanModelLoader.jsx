import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber';
import HumanModel from './humanScanning.glb?url';

const HumanModelLoader = ({ sc }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, HumanModel);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={sc}
    />
  );
};

export default HumanModelLoader;
