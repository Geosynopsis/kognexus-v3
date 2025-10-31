import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

/**
 * AnimatedSphere is a React functional component that renders a rotating sphere in a 3D scene.
 *
 * @param position - The position of the sphere in 3D space as an array of three numbers [x, y, z].
 * @param color - The color of the sphere as a string (e.g., '#FF0000').
 *
 * The sphere rotates around its axes based on the elapsed time from the animation clock.
 */
interface SphereAttribute {
  position: [number, number, number];
  color: string;
  radius: number;
}

const AnimatedSpheres: React.FC<{ count?: number; span?: number }> = ({
  count = 10,
  span = 20,
}) => {
  const sphereAttributes: SphereAttribute[] = React.useMemo(() => {
    // Generate 10 spheres with random positions within [-10, 10] and random colors from the palette
    const colorPalette = [
      "#FFD700",
      "#FFA500",
      "#00FF00",
      "#32CD32",
      "#0080FF",
      "#00BFFF",
      "#FF00FF",
      "#FF6B6B",
      "#FFFFFF",
      "#00FFFF",
    ];
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * span,
        (Math.random() - 0.5) * span,
        (Math.random() - 0.8) * span,
      ] as [number, number, number],
      color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
      radius: 0.01 + Math.random() * 0.01, // radius between 0.1 and 0.3
    }));
  }, [count, span]);
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.01;
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.01;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {sphereAttributes.map((attribute, index) => (
        <mesh
          key={index}
          ref={meshRef}
          position={attribute.position}
          scale={attribute.radius}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={attribute.color}
            roughness={0}
            fog={true}
          />
        </mesh>
      ))}
    </group>
  );
};

export default AnimatedSpheres;
