import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface MyCompProps {
  smText: string
  lgText: string
  img: StaticImageData
}

const FirstDivAccommodation: React.FC<MyCompProps> = ({ smText, lgText, img }) => {
  return (
    <div className="flex flex-col overflow-hidden  text-center gap-5 w-screen">
      <div className="relative">
        <Image
          className=" h-60vh object-cover object-center md:h-80vh"
          src={img}
          alt="Image in div section"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      <div className="flex flex-col font-extralight px-5">
        <div className="mt-10 mb-5 tracking-widest text-3xl ">{lgText}</div>
        <div className="pb-20 text-md ">{smText}</div>
      </div>
    </div>
  )
}

export default FirstDivAccommodation
