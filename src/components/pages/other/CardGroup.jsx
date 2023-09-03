import React, { Suspense } from 'react';
import { Environment, OrbitControls } from "@react-three/drei";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { Card } from "./Card";
import { Canvas } from "@react-three/fiber";

const CardGroup = ({preset, color}) => {
    return (
        <>
            <Canvas onCreated={state => state.gl.setClearColor(color)} gl={{ antialias: true }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 45, near: 0.01, far: 95 }}>
            <spotLight position={[10, 20, 10]} penumbra={1} intensity={1} color="orange" />
                <Environment preset={preset}/>
                <Suspense>
                    <EffectComposer multisampling={3}>
                        <DepthOfField target={[0, 0, 10]} focalLength={1} bokehScale={10} height={700} />
                    </EffectComposer>
                    <OrbitControls enableRotate={true}/>
                    <Card rotationspeed={1}/>
                    <Card position={[1.5,2,-3]} scale={0.5} rotation={[0, 1, 0]} rotationspeed={0.4}/>
                    <Card position={[-2, -1, 2]} scale={0.7} rotation={[1, 0, 1]} rotationspeed={0.2}/>
                </Suspense>
            </Canvas>
        </>
    );
};

export default CardGroup;