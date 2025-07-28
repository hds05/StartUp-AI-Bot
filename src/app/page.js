'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import { Suspense } from 'react'
import LogoMesh from './components/LogoMesh'

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black text-white">
      <Canvas camera={{ position: [0, 0, 4], fov: 70 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 5]} intensity={1.2} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <LogoMesh />
          </Float>
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      <main className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-white to-blue-900 bg-clip-text text-transparent drop-shadow-md p-3">
          Let's Build Your Startup's Digital Identity 🚀
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mt-4 text-gray-300">
          <span className="inline-block bg-gray-900 p-6 rounded-[100px] animate-wave-text font-medium">
            {"Tell us about your business goals, and we’ll help you achieve them through interactive, high-impact websites powered by cutting-edge tech like AI, voice interfaces, and 3D experiences."
              .split('')
              .map((char, i) => (
                <span
                  key={i}
                  style={{ animationDelay: `${i * 0.03}s` }}
                  className="inline-block animate-wave"
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
          </span>
        </p>


        <div className="flex gap-4 mt-6">
          {/* <a
            href="#demo"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Start the Conversation
          </a> */}
          <a
            href="#features"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Explore Our Process
          </a>
        </div>
      </main>


      <footer className="absolute bottom-4 w-full text-center text-sm text-gray-400">
        © {new Date().getFullYear()} B2B Global. Helping Startups Grow with Design + Tech.
      </footer>

    </div>
  )
}
