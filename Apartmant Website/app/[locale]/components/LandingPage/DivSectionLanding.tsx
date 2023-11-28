import React from 'react'
import Image, { StaticImageData } from 'next/image'


interface MyCompProps {
  smText: string
  lgText: string
  img: StaticImageData
}

const DivSectionLanding: React.FC<MyCompProps> = ({ smText, lgText, img }) => {
  return (
    <div className="relative flex flex-col gap-10 items-center pt-10">
      {/*FIRST SECTION DIV -Glamour*/}
      <div>
        <p>Sized 75 sqm. Light-filled and spacious, the deluxe room overlooks the pool.</p>
      </div>
      <Image src={img} width={900} height={900} alt="Image in div section" />
      {smText} {lgText}
    </div>
  )
}

export default DivSectionLanding
