import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const NavbarContact = () => {
  return (
    <div className="flex justify-center gap-5 ">
      <a href="">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faFacebookF} size="lg" />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
      </a>
    </div>
  )
}

export default NavbarContact
