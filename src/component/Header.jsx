import React, { useState } from 'react'
import logo from '../photos/logo192.png'

import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { BsCartFill } from 'react-icons/bs'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  

  //function to handle click on user icon
  const handleUserIconClick = () => {
    setShowMenu((prev) => !prev)
  }

  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4'>
        {/* DESKTOP */}
        <div className='flex items-center h-full justify-between'>
            <Link to={""}>
              <div className='h-16'>
                <img className='h-full' src={logo} alt="logo" />
              </div>
            </Link>

            <div className='flex items-centre gap-4 md:gap-7'>
                <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                    <Link to={""}>Home</Link>
                    <Link to={"menu"}>Menu</Link>
                    <Link to={"about"}>About</Link>
                    <Link to={"contact"}>Contact</Link>
                </nav>
                <div className='text-2xl text-slate-600 relative'>
                    <BsCartFill/>
                    <div className='absolute -top-1 -right-2 text-white bg-red-500 w-4 h-4 rounded-full m-0 p-0 text-sm text-center '>0</div>
                </div>
                <div className=' text-slate-600'>
                  <div className='text-2xl cursor-pointer' onClick={handleUserIconClick}>
                    <FaUser/>
                  </div>
                  
                  {
                    showMenu && (
                    <div className='absolute right-2 bg-white py-3 px-2 shadow drop-shadow-md'>
                      <p className='whitespace-nowrap'>New Products</p>
                      <p className='whitespace-nowrap'>Login</p>
                    </div> )
                  }
                  
                </div>
            </div> 
          
        </div>

        {/* MOBILE */}
    </header>
  )
}

export default Header