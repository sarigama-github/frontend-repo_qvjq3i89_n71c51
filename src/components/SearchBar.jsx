import React from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="mt-4">
      <label className="sr-only" htmlFor="visa-search">Find your Dubai Visa Offer</label>
      <div className="relative">
        <input
          id="visa-search"
          placeholder="Find your Dubai Visa Offer"
          className="w-full rounded-2xl bg-white/95 backdrop-blur border border-white/30 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/30 text-slate-800 placeholder-slate-400 px-5 py-4 pr-12 shadow-[0_8px_30px_rgba(2,6,23,0.15)] outline-none transition"
        />
        <Search size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" />
      </div>
    </div>
  )
}
