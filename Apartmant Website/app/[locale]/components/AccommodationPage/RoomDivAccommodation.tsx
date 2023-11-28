import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface MyCompProps {
  smText: string
  lgText: string
  img: StaticImageData
}

const RoomDivAccommodation: React.FC<MyCompProps> = ({ smText, lgText, img }) => {
  return (
    <div className="bg-white">
      <Image
        className="h-64 object-cover object-center"
        src={img}
        width={900}
        height={900}
        alt="Toppicture of landing page"
      />
      <div className="pt-5 px-3">
        <h2 className="font-thin tracking-wider text-2xl">{lgText}</h2>
        <p className="pb-5 pt-2">{smText}</p>
        <button className="mb-10 py-1 w-full bg-orange-200 tracking-wider focus:bg-orange-400">DETAILS</button>
      </div>
    </div>
  )
}

export default RoomDivAccommodation
