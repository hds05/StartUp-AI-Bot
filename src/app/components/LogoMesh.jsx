'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function LogoMesh() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#00BFFF" wireframe />
    </mesh>
  )
}
