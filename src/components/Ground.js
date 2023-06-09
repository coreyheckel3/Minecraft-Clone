import {usePlane} from '@react-three/cannon'
import {groundTexture} from '../images/textures'
import * as THREE from 'three';
export const Ground = () => {
    const [ref] = usePlane(() =>({
        rotation: [-Math.PI/2,0,0], position: [0,0,0]
    }) )

    groundTexture.magFilter = THREE.NearestFilter
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(100, 100);

    return(
        <mesh ref={ref}>
            <planeBufferGeometry attach='geometry' args={[100,100]}/>
            <meshStandardMaterial attach='material' map={groundTexture}/>
        </mesh>
    )
}
