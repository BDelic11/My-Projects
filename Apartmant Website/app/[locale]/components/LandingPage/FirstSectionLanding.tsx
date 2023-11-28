import React from 'react'
import Image from 'next/image'

const FirstSectionLanding = () => {
  return (
    <div>
      <Image
        className="first-letter object-cover"
        src="/Images/GardenView/gardenView2.jpg"
        width={900}
        height={900}
        alt="Top picture of landing page"
        priority
      />
      <h3>5-Stars Boutique Hotel, SPA and Restaurant in Capri</h3>
      <p>
        ...this is a wildly stylish place, and one you will find hard to leave even when the rest of the island beckons.
      </p>
    </div>
  )
}

export default FirstSectionLanding
