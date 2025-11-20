import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const QuantumNotation = ({ position, text, speed }: { position: [number, number, number], text: string, speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <Text
          fontSize={0.3}
          color="#22D3EE"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#020617"
        >
          {text}
        </Text>
      </mesh>
    </Float>
  );
};

const Qubit = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial
        color="#22D3EE"
        emissive="#22D3EE"
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const QuantumScene = () => {
  const notations = useMemo(() => [
    { position: [-8, 2, -5] as [number, number, number], text: '|ψ⟩', speed: 0.8 },
    { position: [8, -1, -5] as [number, number, number], text: '⟨φ|', speed: 0.6 },
    { position: [-5, -3, -3] as [number, number, number], text: '|0⟩', speed: 0.9 },
    { position: [6, 3, -4] as [number, number, number], text: '|1⟩', speed: 0.7 },
    { position: [0, 4, -6] as [number, number, number], text: '⟨ψ|φ⟩', speed: 0.5 },
    { position: [-3, 1, -2] as [number, number, number], text: '|+⟩', speed: 1.0 },
    { position: [4, -2, -3] as [number, number, number], text: '|-⟩', speed: 0.85 },
  ], []);

  const qubits = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 5,
      ] as [number, number, number]
    })),
  []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#22D3EE" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#14B8A6" />
      
      {notations.map((notation, i) => (
        <QuantumNotation key={i} {...notation} />
      ))}
      
      {qubits.map((qubit, i) => (
        <Qubit key={i} position={qubit.position} />
      ))}
    </>
  );
};

export const QuantumBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <QuantumScene />
      </Canvas>
    </div>
  );
};
