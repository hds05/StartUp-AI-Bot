'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
      {/* MAIN CONTENT */}
      <main className="flex flex-1 flex-col justify-center items-center text-center px-6 sm:px-12 py-12 gap-8">
        <Image
          src="https://www.shutterstock.com/image-photo/circular-logo-written-half-dark-600nw-2508371925.jpg"
          alt="AI Voice Agent Logo"
          width={160}
          height={160}
          className="rounded-full shadow-lg"
        />

        <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl leading-tight">
          AI Voice Agent for Startups 🚀
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
          Engage your users like never before with our AI-powered voice assistant — built on ElevenLabs, trained to understand, speak, and convert.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#demo"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Try the Demo
          </a>
          <a
            href="#features"
            className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            See Features
          </a>
        </div>

        {/* DEMO PLACEHOLDER */}
        <div id="demo" className="w-full max-w-xl mt-12">
          <p className="text-sm mb-2 text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Live Voice Demo
          </p>
          <div className="border border-dashed rounded-lg p-6 dark:border-gray-600">
            {/* Replace with actual widget */}
            <p>🎤 [Your AI voice assistant widget will appear here]</p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-4 text-center text-sm text-gray-400 dark:text-gray-600">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </footer>
    </div>
  )
}
