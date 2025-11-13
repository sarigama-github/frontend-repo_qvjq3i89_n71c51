import React from 'react'
import { ArrowRight, Clock, BadgeDollarSign } from 'lucide-react'

export default function OfferCard({ title, price, duration, accent = 'from-amber-400 to-yellow-500' }) {
  return (
    <div className="group relative rounded-3xl bg-white/95 backdrop-blur border border-white/40 p-4 shadow-[0_12px_40px_rgba(2,6,23,0.12)] overflow-hidden">
      <div className={`absolute -top-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-tr ${accent} opacity-20 blur-3xl`} />

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-slate-900 text-lg font-semibold">{title}</h3>
          <div className="mt-2 flex items-center gap-3 text-slate-600">
            <span className="inline-flex items-center gap-1 text-amber-600 font-medium"><BadgeDollarSign size={18}/> AED {price}</span>
            <span className="inline-flex items-center gap-1"><Clock size={16}/> {duration}</span>
          </div>
        </div>
        <button className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] text-white px-3 py-2 text-sm font-medium shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_36px_rgba(37,99,235,0.55)] transition">
          Apply Now <ArrowRight size={16}/>
        </button>
      </div>

      <div className="mt-3">
        <button className="text-sm font-medium text-[#0e2a5e] hover:text-amber-600 inline-flex items-center gap-1">
          View Details <ArrowRight size={16}/>
        </button>
      </div>
    </div>
  )
}
