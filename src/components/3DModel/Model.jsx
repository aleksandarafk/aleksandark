import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const model = useGLTF("./lopoly_ryu.glb")
    return(
        <mesh scale={[10, 10, 10]}>
           <primitive object={model.scene}/>
        </mesh>
    )
}