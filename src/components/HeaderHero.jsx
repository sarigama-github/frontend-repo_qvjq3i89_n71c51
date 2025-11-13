import React from 'react'
import { Sparkles } from 'lucide-react'

export default function HeaderHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl p-5 pb-24 shadow-xl bg-gradient-to-br from-[#0a1c3a] via-[#0e2a5e] to-[#08142b]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-tr from-yellow-400/20 via-yellow-300/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-16 -left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-400/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 mix-blend-screen opacity-30" style={{
          background: 'radial-gradient(1200px 500px at 50% -200px, rgba(255,255,255,0.25), transparent 60%)'
        }} />
      </div>

      <div className="relative z-10 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_10px_30px_rgba(234,179,8,0.35)] flex items-center justify-center">
          <Sparkles className="text-[#0a1c3a]" size={22} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-yellow-300/90">Dubai Visa Offers</p>
          <h1 className="text-white text-2xl font-semibold leading-tight">Unlock Premium Dubai Visas</h1>
        </div>
      </div>

      <Skyline />
    </div>
  )
}

function Skyline() {
  return (
    <svg className="absolute bottom-0 left-0 right-0 w-full h-28" viewBox="0 0 390 120" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#facc15" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="glow" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g opacity="0.25" transform="translate(0,8)">
        <rect x="10" y="20" width="24" height="60" fill="url(#gold)" rx="2" />
        <rect x="48" y="10" width="20" height="70" fill="url(#gold)" rx="2" />
        <rect x="80" y="26" width="16" height="54" fill="url(#gold)" rx="2" />
        <path d="M130 78 L140 18 L150 78 Z" fill="url(#gold)" />
        <rect x="168" y="30" width="18" height="50" fill="url(#gold)" rx="2" />
        <rect x="198" y="22" width="16" height="58" fill="url(#gold)" rx="2" />
        <path d="M230 80 C230 50 250 12 260 10 C270 12 290 50 290 80 Z" fill="url(#gold)" />
        <rect x="300" y="36" width="18" height="44" fill="url(#gold)" rx="2" />
        <rect x="330" y="18" width="24" height="62" fill="url(#gold)" rx="2" />
      </g>
      <rect x="0" y="92" width="390" height="28" fill="url(#glow)" />
    </svg>
  )
}
