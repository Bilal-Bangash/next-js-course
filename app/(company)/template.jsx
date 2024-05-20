'use client'
import React, { useEffect } from 'react'
import NavLink from '../components/ui/NavLink'
import { motion } from 'framer-motion'

const CompanyTemplate = ({ children }) => {
  useEffect(() => {
    console.log('%crendere layout', 'color:red;font-size:50px')
  }, [])
  return (
    <section className='py-24'>
      <div className='container flex'>
        <div className='overflow-y-auto border-r border-gray-200 p-6 pr-12'>
          <nav className='flex flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-4'>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <NavLink href='/about'>About</NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <NavLink href='/team'>Team</NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <NavLink href='/contact'>Contact</NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <NavLink href='/join'>Join</NavLink>
              </motion.li>
            </ul>
          </nav>
        </div>
        <main className='ml-12 grow bg-gray-50 p-6'>{children}</main>
      </div>
    </section>
  )
}

export default CompanyTemplate
