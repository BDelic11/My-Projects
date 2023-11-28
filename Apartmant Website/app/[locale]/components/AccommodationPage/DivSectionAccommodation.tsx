import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface MyCompProps {
  smText: string
  lgText: string
  img: StaticImageData
}

const DivSectionAccommodation: React.FC<MyCompProps> = ({ smText, lgText, img }) => {
  return (
    <div className="flex flex-col md:mt-10 bg-off-white text-left font-light gap-5 md:w-48 lg:w-5/12  ">
      <div
        className=" w-full min-h-[250px] max-h-[500px] md:min-h-[350px] md:max-h-[500px] lg:min-h-[500px] lg:max-h-[800px] 
    transition-all delay-75 duration-300 ease-in-out hover:brightness-110"
      >
        <Image
          className="w-full h-full object-cover object-center hover:cursor-pointer"
          src={img}
          alt="Image in div section"
        />
      </div>
      <div className="flex flex-col px-5">
        <div className="my-5 tracking-widest text-2xl">{lgText}</div>
        <div className="pb-5 text-sm">{smText}</div>
        <button className="bg-button bg-opacity-10 p-2 mb-10 transition-all delay-75 duration-300 ease-in-out hover:cursor-pointer hover:bg-opacity-50">
          DETAILS
        </button>
      </div>
    </div>
  )
}

export default DivSectionAccommodation
spy={true} offset={-70}