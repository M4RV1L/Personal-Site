import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container p-12 flex justify-between'>
              <span>made by M4RV1L - <Link href={"https://github.com/M4RV1L/Personal-Site"} className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>/src</Link></span>
            <p className='text-slate-600'>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
