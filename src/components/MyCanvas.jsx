import store from "../Redux/store";
import { Provider } from "react-redux";
import { Canvas } from "@react-three/fiber";
import World from "./World";
const MyCanvas = () => {
  return (
    <Canvas shadows camera={{ position: [0, 20, 15], zoom: 4, near: 1, far: 100 }}>
          <color attach="background" args={['#171720']} />
      <pointLight position={[-10, -10, -10]} color="red" intensity={1.5} />
      <pointLight intensity={10} distance={5} castShadow={false}/>
      <spotLight  position={[0, 20, 0]} angle={0.4} penumbra={1} intensity={0.6} castShadow />
      <ambientLight intensity={0.2} />
      <Provider store={store}>
        <World />
      </Provider>
    </Canvas>
  );
};
export default MyCanvas;
