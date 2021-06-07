import store from "../Redux/store";
import { Provider } from "react-redux";
import { Canvas } from "@react-three/fiber";
import World from "./World";
const MyCanvas = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 0], near: 0.1, far: 1000 }}>
      <pointLight intensity={0.8} position={[0, 10, 4]} castShadow={true} />
      <ambientLight intensity={0.2} />
      <Provider store={store}>
        <World />
      </Provider>
    </Canvas>
  );
};
export default MyCanvas;
