import React, { useEffect } from "react";
import { Plane, Box } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import Balls from "./Balls";
import { useSelector } from "react-redux";
const MyPlane = ({ color, ...props }) => {
  const [ref] = usePlane(() => ({ ...props }));

  return (
    <Plane args={[1000, 1000]} ref={ref} receiveShadow={true}>
      <meshStandardMaterial attach="material" color="#171720" />
    </Plane>
  );
};
function PhyBox(props) {
  const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));
  const KeyDown = (e) => {
    var name = e.key;
    if (name === " ") {
      api.velocity.set(0, 5, 0);
    }
    if (name === "w") {
      api.velocity.set(0, 0, -4);
    }
    if (name === "a") {
      api.velocity.set(-4, 0, 0);
    }
    if (name === "d") {
      api.velocity.set(4, 0, 0);
    }
    if (name === "s") {
      api.velocity.set(0, 0, 4);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", KeyDown);
    return () => {
      document.removeEventListener("keydown", KeyDown);
    };
  });
  return (
    <Box args={[1, 1, 1]} ref={ref} castShadow={true}>
      <meshPhysicalMaterial color={"white"} />
    </Box>
  );
}

const World = () => {
  const { eventBalls } = useSelector((state) => state.events);
  return (
    <Physics gravity={[0, -15, 0]}>
      <MyPlane
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <PhyBox position={[0, 10, 0]} />
      {eventBalls && <Balls number={200} />}
    </Physics>
  );
};
export default World;
