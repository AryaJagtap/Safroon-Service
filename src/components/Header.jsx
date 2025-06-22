// src/components/Header.jsx
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9edf1] px-10 py-3">
      <div className="flex items-center gap-4 text-[#101419]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        <Link to="/" className="text-[#101419] text-lg font-bold leading-tight tracking-[-0.015em]">
          Safroon Service
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link to="/" className="text-[#101419] text-sm font-medium leading-normal hover:underline">
            Home
          </Link>
          <a className="text-[#101419] text-sm font-medium leading-normal hover:underline" href="#about">
            About
          </a>
          <a className="text-[#101419] text-sm font-medium leading-normal hover:underline" href="#services">
            Services
          </a>
          <a className="text-[#101419] text-sm font-medium leading-normal hover:underline" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header