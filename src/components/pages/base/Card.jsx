import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';

export function Card(props) {
    const { nodes, materials } = useGLTF('/assets/card/card.gltf');
    const ref = useRef();

    // Используем useSpring из react-spring для создания анимации прозрачности
    const { opacity } = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2500 },
    });

    useFrame((state, delta) => {
        ref.current.rotation.x += (delta / 6) * props.rotationspeed;
        ref.current.rotation.y += (delta / 4) * props.rotationspeed;
    });

    return (
        <group {...props} dispose={null}>
            {/* Применяем анимацию прозрачности к материалу */}
            <animated.mesh
                material-transparent
                material-opacity={opacity}
                ref={ref}
                castShadow
                receiveShadow
                geometry={nodes.SPADES.geometry}
                material={materials['default']}
                position={[0, 0, 0]}
                rotation={[-1.249, -1.479, 1.892]}
                scale={0.0095}
            >
            </animated.mesh>
        </group>
    );
}

useGLTF.preload('/assets/card/card.gltf');
