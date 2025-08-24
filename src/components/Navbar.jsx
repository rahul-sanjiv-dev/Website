import React from 'react'
import { Mail, Github, BadgeCheck } from 'lucide-react'

export default function Navbar({ profile }){
  const links = ['about','projects','achievements','skills','vision','blog','contact']
  return (
    <header className="fixed top-0 inset-x-0 z-50 nav-blur">
      <nav className="section flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-semibold"><span>{profile.name}</span><BadgeCheck size={16} className="text-neon" /></a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l => <a key={l} href={'#'+l} className="text-white/80 hover:text-white">{l.charAt(0).toUpperCase()+l.slice(1)}</a>)}
        </div>
        <div className="flex items-center gap-3">
          <a className="badge" href={'mailto:'+profile.email}><Mail size={16}/> Email</a>
          <a className="badge" href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
        </div>
      </nav>
    </header>
  )
}