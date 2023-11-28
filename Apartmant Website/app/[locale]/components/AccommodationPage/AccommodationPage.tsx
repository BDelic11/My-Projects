import React from 'react'

import gardenView from '../../../../public/Images/GardenView/GardenView2.jpg'
import poolView from '../../../../public/Images/PoolView/PoolView4.jpg'
import poolView2 from '../../../../public/Images/PoolViewSecond/PoolViewSecond5.jpg'
import breakfastRoom from '../../../../public/Images/BreakfastRoom/BreakfastRoom1.jpg'
import garden from '../../../../public/Images/Garden/Garden2croped.jpeg'

import DivSectionAccommodation from './DivSectionAccommodation'
import FirstDivAccommodation from './FirstDivAccommodation'

const AccommodationPage = () => {
  {
    /*START DIV ON ACCOMMODATION - TEXT*/
  }
  var startLargeText = 'ACCOMMODATION'
  var startSmallText = 'Welcome to our small heavean, these are some of rooms we have .'
  {
    /*FIRST OF DIVS TEXT*/
  }
  var firstLargeText = 'GARDEN VIEW'
  var firstSmallText =
    'Sized 75 sqm (807 sqft). Light-filled and spacious, the Penthouse Suite overlooks the Gulf of Naples and the Marina.'
  {
    /*SECOND OF DIVS TEXT*/
  }
  var secondLargeText = 'POOL VIEW'
  var secondSmallText =
    'Sized 75 sqm (807 sqft). Light-filled and spacious, the Penthouse Suite overlooks the Gulf of Naples and the Marina.'
  {
    /*THIRD OF DIVS TEXT*/
  }
  var thirdLargeText = 'POOL VIEW'
  var thirdSmallText =
    'Sized 75 sqm (807 sqft). Light-filled and spacious, the Penthouse Suite overlooks the Gulf of Naples and the Marina.'
  {
    /*FOURTH OF DIVS TEXT*/
  }
  var fourthLargeText = 'BREAKFAST ROOM'
  var fourthSmallText =
    'Sized 75 sqm (807 sqft). Light-filled and spacious, the Penthouse Suite overlooks the Gulf of Naples and the Marina.'

  return (
    <div className="bg-off-white">
      <div className="m-0">
        <FirstDivAccommodation smText={startSmallText} lgText={startLargeText} img={garden} />
      </div>
      <div className="flex flex-wrap justify-around lg:justify-center lg:gap-2">
        <DivSectionAccommodation smText={firstSmallText} lgText={firstLargeText} img={gardenView} />
        <DivSectionAccommodation smText={secondSmallText} lgText={secondLargeText} img={poolView} />
        <DivSectionAccommodation smText={thirdSmallText} lgText={thirdLargeText} img={poolView2} />
        <DivSectionAccommodation smText={fourthSmallText} lgText={fourthLargeText} img={breakfastRoom} />
      </div>
    </div>
  )
}

export default AccommodationPage
