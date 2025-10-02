// src/components/Footer.jsx
import React from 'react'
import footerData from '../../api/footerApi.json'
import { NavLink } from 'react-router-dom'

// Import icons
import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'

// Icon map for dynamic rendering
const iconMap = {
  MdPlace: <MdPlace className='text-xl text-blue-500' />,
  IoCallSharp: <IoCallSharp className='text-xl text-green-500' />,
  TbMailPlus: <TbMailPlus className='text-xl text-red-500' />
}

export const Footer = () => {
  return (
    <footer className='bg-gray-950 text-white py-10'>
      <div className='max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left'>
        {footerData.map((item, index) => (
          <div
            key={index}
            className='flex items-center justify-center gap-3  group transition-all'
          >
            {/* icon */}
            <div className='p-2 bg-gray-800 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-gray-700'>
              {/* Icon color changes on hover */}
              <span className='text-blue-400 group-hover:text-blue-500 transition-colors duration-300'>
                {iconMap[item.icon]}
              </span>
              {/* text */}
            </div>
            <div className='text-left'>
              <h3 className='text-sm font-medium group-hover:text-white transition-colors duration-300'>
                {item.title}
              </h3>
              <p className='text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-300'>
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-8 text-center text-gray-400 text-xs border-t border-gray-700 pt-4'>
        <p>
          Copyright &copy; {new Date().getFullYear()}, All Rights Reserved{' '}
          <NavLink
            to='https://github.com/Jia-Ahmed' // 👈 yahan apna GitHub repo ya website link dalna
            target='_blank'
            className='text-blue-400 hover:text-blue-500 transition-colors'
          >
            Jia Ahmed
          </NavLink>
        </p>
      </div>
    </footer>
  )
}
