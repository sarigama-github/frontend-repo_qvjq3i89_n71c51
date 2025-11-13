import React from 'react'
import HeaderHero from './components/HeaderHero'
import SearchBar from './components/SearchBar'
import OfferCard from './components/OfferCard'
import BottomNav from './components/BottomNav'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030712] via-[#061129] to-[#0a1c3a] text-white">
      <div className="mx-auto max-w-md px-5 pt-5 pb-28">
        <HeaderHero />
        <SearchBar />

        <section className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold text-yellow-300/90">Highlighted Offers</h2>
          <OfferCard title="30-Day Tourist Visa" price="350" duration="30 Days" accent="from-amber-400 to-yellow-500" />
          <OfferCard title="60-Day Tourist Visa" price="650" duration="60 Days" accent="from-emerald-400 to-teal-500" />
          <OfferCard title="Business Visa" price="1200" duration="90 Days" accent="from-sky-400 to-blue-600" />
          <OfferCard title="Work Visa (Entry Permit)" price="1800" duration="14 Days" accent="from-fuchsia-400 to-purple-600" />
        </section>

        <section className="mt-8">
          <div className="rounded-3xl p-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20">
            <h3 className="text-base font-medium text-white/90">Travel-ready perks</h3>
            <p className="mt-1 text-sm text-white/70">Priority processing, dedicated support, and verified partners for a premium, worry-free experience.</p>
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  )
}
