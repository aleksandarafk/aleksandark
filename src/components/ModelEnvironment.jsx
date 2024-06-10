import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from './Model'
import {Environment, OrbitControls} from '@react-three/drei'
const ModelRender = () => {

  return (
   <div className='canva'>
    <Canvas>
      <Model/>
      <Environment preset='city'/>
      <OrbitControls enableZoom={false} autoRotate={true}/>
    </Canvas>
   </div>
  )
}

export default ModelRender