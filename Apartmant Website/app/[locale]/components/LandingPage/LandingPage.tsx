import React from 'react'
import gardenView from '../../../../public/Images/GardenView/GardenView1.jpg'

import DivSectionLanding from './DivSectionLanding'
import FirstSectionLanding from './FirstSectionLanding'

const LandingPage = () => {
  var firstSmallText = 'heloo'
  var firstLargeText = 'hashahahsadhadhashh'

  return (
    <div className="relative flex flex-col gap-10 items-center pt-10">
      {/*First Screen Part Landing page*/}
      <FirstSectionLanding />

      {/*FIRST SECTION DIV -Glamour*/}
      <div>
        <p>Sized 75 sqm. Light-filled and spacious, the deluxe room overlooks the pool.</p>
      </div>

      {/*SECOND SECTION DIV -Luxury*/}
      <DivSectionLanding smText={firstSmallText} lgText={firstLargeText} img={gardenView} />
    </div>
  )
}

export default LandingPage
