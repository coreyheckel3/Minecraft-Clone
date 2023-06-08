import {Canvas} from '@react-three/fiber';
import {Sky} from '@react-three/drei';
import {Physics} from '@react-three/cannon';
import {Ground} from './components/Ground';
import {Player} from './components/Player';
function App(){
  return (
    <>
    <Canvas>
      <Sky sunPosition = {[0, 0, 100]} />
      <ambientLight intensity= {0.5}/>
      <Physics>
        <Player></Player>
        <Ground></Ground>
      </Physics>
      </Canvas></>
  );
}
export default App;