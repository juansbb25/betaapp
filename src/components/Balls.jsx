import React, { useMemo } from "react";
import niceColors from "nice-color-palettes";
import { Box, Sphere } from "@react-three/drei";
import { useBox, useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
function Ball({ number }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    args: [0.1, 0.1, 0.1],
    position: [Math.random() - 0.5, Math.random() * 10, Math.random() - 5],
  }));

  const colors = useMemo(() => {
    const array = new Float32Array(number * 3);
    const color = new THREE.Color();
    for (let i = 0; i < number; i++)
      color
        .set(niceColors[17][Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(array, i * 3);
    return array;
  }, [number]);

  useFrame(() =>
    api
      .at(Math.floor(Math.random() * number))
      .position.set(0, Math.random() * 10, -5)
  );

  return (
    <instancedMesh
      receiveShadow
      castShadow
      ref={ref}
      args={[null, null, number]}
    >
      <sphereBufferGeometry attach="geometry" args={[0.2, 16, 16]}>
        <instancedBufferAttribute
          attachObject={["attributes", "color"]}
          args={[colors, 3]}
        />
      </sphereBufferGeometry>
      <meshLambertMaterial
        attach="material"
        vertexColors={THREE.VertexColors}
      />
    </instancedMesh>
  );
}
export default Ball;
