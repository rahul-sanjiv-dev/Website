import React from 'react'

export default function Footer(){ return (
  <footer className="footer">
    <div className="section text-center text-white/60">
      <div className="border-t border-white/10 pt-6">
        <p>© {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </div>
  </footer>
)}