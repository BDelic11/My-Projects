'use client'

import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import BurgerMenu from './BurgerMenu'
import NavbarContact from './NavbarContact'

import './styles.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [padding, setPadding] = useState(4)

  useEffect(() => {
    const handleScroll = () => {
      const halfPage = window.innerHeight / 2

      if (window.scrollY > halfPage) {
        setPadding(4 + (scrollY - halfPage) / 50)
        setIsScrolled(true)
      } else {
        setPadding(4)
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 z-10 bg-off-white transition-all duration-300 delay-75 ease-in-out p-${padding} 
      ${isScrolled ? 'navbar-scrolled' : 'navbar-initial'} `}
    >
      <div className=" lg:bg-black lg:bg-opacity-50 pr-9">
        <NavbarContact />
      </div>
      <div className="w-screen lg:py-8 ">
        <ul className="flex flex-row justify-between lg:justify-around">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li className="lg:hidden">
            <BurgerMenu />
          </li>

          <li className="hidden md:hidden lg:block">
            <Link href="/PageAccommodation" className="">
              ACCOMMODATION
            </Link>
          </li>
          <li className="hidden md:hidden lg:block">
            <Link href="/PageAccommodation" className="">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
