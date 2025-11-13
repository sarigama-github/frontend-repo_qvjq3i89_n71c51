import React from 'react'
import { Home, Briefcase, Star, Phone, User } from 'lucide-react'

export default function BottomNav() {
  const items = [
    { icon: Home, label: 'Home' },
    { icon: Briefcase, label: 'Visa Types' },
    { icon: Star, label: 'Offers' },
    { icon: Phone, label: 'Support' },
    { icon: User, label: 'Profile' },
  ]

  return (
    <nav className="fixed bottom-4 left-0 right-0 px-5">
      <div className="mx-auto max-w-md rounded-3xl bg-white/95 backdrop-blur border border-white/40 shadow-[0_18px_40px_rgba(2,6,23,0.18)]">
        <ul className="grid grid-cols-5">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="relative">
              <button className="w-full py-3 flex flex-col items-center gap-1 text-xs font-medium text-slate-600 hover:text-[#0e2a5e]">
                <span className="relative">
                  <span className="absolute -inset-3 rounded-full bg-gradient-to-tr from-yellow-400/0 to-amber-500/0 group-hover:from-yellow-400/10 group-hover:to-amber-500/10 transition" />
                  <Icon size={20} />
                </span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
