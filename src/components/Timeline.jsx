import React from 'react'

export default function Timeline({ items }) {
  return (
    <ol className="relative border-s border-white/10 ml-3">
      {items.map((i, idx) => (
        <li key={idx} className="ms-6 mb-8">
          <span className="absolute -start-3 mt-1 h-5 w-5 rounded-full bg-primary-600 border-2 border-white/20"></span>
          <h4 className="text-base md:text-lg font-semibold">{i.when} — {i.title}</h4>
          <p className="text-white/70">{i.detail}</p>
        </li>
      ))}
    </ol>
  )
}
