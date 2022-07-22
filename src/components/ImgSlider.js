import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'
// import { toBeRequired } from '@testing-library/jest-dom/dist/matchers'

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
   
        <Carousel { ...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div> 
                <h3>3</h3>
            </div>
        </Carousel>
   
  )
}

const Carousel = styled(Slider)`
margin-top:20px ;

& > button{  
    opacity:0 ;
    height:100% ;
    width:5vw ;
    z-index:1;


    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
      /* the sides button  of slider shows up when hover */
    }
}

ul li button {
    &:before {
        font-size:10px ;
        color:rgb(150,159,171);
        /* the dots button sizze up */
    }
}

li.slick-active button:before{
    color:white ;
    /* the dots were becomes white  */
}

.slick-list{
    overflow:initial ; 
    /* we can see the upcoming one 1     2 */
}

.slick-prev{
    left: -75px;
}

.slick-next{
    right:-75px ;
}
`

export default ImgSlider