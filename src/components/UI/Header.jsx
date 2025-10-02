// src/components/UI/Header.jsx
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Shared classes for link styling
  const linkClasses = ({ isActive }) =>
    `relative px-2 py-1 transition duration-300 
     hover:text-indigo-400 hover:shadow-md hover:shadow-indigo-500/50
     after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
     after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full
     ${isActive ? 'text-indigo-500 after:w-full' : ''}`

  return (
    <header className='bg-gray-900 text-white shadow-md'>
      <nav className='mx-auto max-w-5xl flex justify-between items-center py-4 px-6'>
        {/* Logo / Title */}
        <Link
          to='/'
          className='text-2xl font-bold tracking-wide hover:text-indigo-400 transition duration-300'
        >
          WorldAtlas
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-6 text-sm font-medium'>
          <li>
            <NavLink to='/' end className={linkClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={linkClasses}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/country' className={linkClasses}>
              Country
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={linkClasses}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className='md:hidden focus:outline-none hover:text-indigo-500 transition'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className='flex flex-col space-y-4 py-4 px-6 text-sm font-medium'>
          <li>
            <NavLink
              to='/'
              end
              onClick={() => setIsOpen(false)}
              className={linkClasses}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              onClick={() => setIsOpen(false)}
              className={linkClasses}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/country'
              onClick={() => setIsOpen(false)}
              className={linkClasses}
            >
              Country
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              onClick={() => setIsOpen(false)}
              className={linkClasses}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
