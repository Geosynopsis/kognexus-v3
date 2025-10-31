import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

/**
 * ParticleField is a React functional component that renders a 3D field of colored particles using THREE.js.
 *
 * @param count - Optional. The number of particles to generate in the field. Defaults to 500.
 *
 * The component uses random positions and colors for each particle, and animates the field by rotating it over time.
 */
const ParticleField: React.FC<{
  count?: number;
  span?: number;
}> = ({
  count = 500,
  span = 40, // Span for random positions
}) => {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    Array.from({ length: count }).forEach((_, i) => {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * span;
      positions[i3 + 1] = (Math.random() - 0.5) * span;
      positions[i3 + 2] = (Math.random() - 0.8) * span;

      const colorType = Math.floor(Math.random() * 3);
      switch (colorType) {
        case 0:
          colors[i3] = 0;
          colors[i3 + 1] = 1;
          colors[i3 + 2] = 0;
          break;
        case 1:
          colors[i3] = 1;
          colors[i3 + 1] = 1;
          colors[i3 + 2] = 0;
          break;
        case 2:
          colors[i3] = 0;
          colors[i3 + 1] = 0.5;
          colors[i3 + 2] = 1;
          break;
      }
    });

    return { positions, colors };
  }, [count, span]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent />
    </points>
  );
};

export default ParticleField;
