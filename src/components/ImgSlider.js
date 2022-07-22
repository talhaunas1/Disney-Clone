import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers'

function ImgSlider() {

    const settings = {
        dots :true,
        Infinity:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
    }

  return (
    <div>
        <Slider { ...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
        </Slider>
    </div>
  )
}

export default ImgSlider