import React from 'react'
import css from "./Banner.module.css"

import bannerimg from "./banner.png"

function Banner() {
  return (
   <>
    <div className='pt-[1.3%] flex relative'>

        <img src={bannerimg} alt="" className={`${css.imgCss} min-w-full`} />

    </div>
   
   </>
  )
}

export default Banner
