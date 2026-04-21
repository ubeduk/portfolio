'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float } from '@react-three/drei'
import { useMemo, useRef, Suspense } from 'react'
import * as THREE from 'three'

function ParticleField({ count = 2500 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.02
    ref.current.rotation.x += delta * 0.008
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
      />
    </Points>
  )
}

function FloatingShape({ position, geometry, scale = 1 }) {
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.14}
        />
      </mesh>
    </Float>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
        <Suspense fallback={null}>
          <ParticleField count={2200} />
          <FloatingShape position={[-3.5, 1.2, -2]} geometry={<icosahedronGeometry args={[0.8, 0]} />} />
          <FloatingShape position={[3.2, -1.5, -1]} geometry={<octahedronGeometry args={[0.6, 0]} />} scale={1.1} />
          <FloatingShape position={[2.5, 2, -3]} geometry={<torusGeometry args={[0.5, 0.12, 16, 48]} />} />
          <FloatingShape position={[-2.8, -1.8, -2.5]} geometry={<tetrahedronGeometry args={[0.55, 0]} />} />
        </Suspense>
      </Canvas>
    </div>
  )
}
