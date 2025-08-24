import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }){
  return (
    <section id={id} className="section">
      <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.2 }} transition={{ duration:0.6 }} className="space-y-6">
        <div><h2 className="text-2xl md:text-3xl font-bold">{title}</h2>{subtitle && <p className="text-white/70 mt-1">{subtitle}</p>}</div>
        {children}
      </motion.div>
    </section>
  )
}