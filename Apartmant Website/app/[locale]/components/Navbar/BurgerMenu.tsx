import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={toggleMenu}
        className="lg:hidden text-right text-lg font-extrabold text-gray-600 hover:text-gray-800"
      >
        &#9776;
      </button>

      {isOpen && (
        <div className="  flex items-center justify-center w-full h-30 fixed top-10 left-0 bg-white z-10">
          <ul className="flex flex-col text-center space-y-4 p-8">
            <li>
              <Link href="/PageAccommodation" className="text-gray-600 hover:text-gray-800">
                Accommodation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default BurgerMenu
