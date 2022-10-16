import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Suspense } from 'react';

export default function NoiseObj() {
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
      />
      <pointLight
        position={[0, -10, 5]}
        intensity={1}
      />
      <Suspense fallback={null}>
        <Sphere
          visible
          position={[0, 0, 0]}
          args={[1, 16, 200]}
        >
          <MeshDistortMaterial
            attach="material"
            color="#EB1E99"
            distort={1}
            speed={3} // Speed (default=1)
            roughness={0}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  );
}
