import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber';

const LoadModel = ({ modelPath, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <>
      {modelPath !== null ? (
        <primitive
          ref={ref}
          object={gltf.scene}
          position={position}
        />
      ) : (
        <h1>모델이 없습니다</h1>
      )}
    </>
  );
};

export default LoadModel;
