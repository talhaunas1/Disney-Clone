import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Trending from './Trending'
import Viewrs from './Viewrs'
import {useEffect } from 'react'

import db from '../firebase'
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'
import { useDispatch , useSelector } from 'react-redux'

function Home() {

  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];
  // let Recomment = [];
  

  useEffect(() => {

    db.collection('movies').onSnapshot((onSnapshot)=> {
      onSnapshot.docs.map((doc)=>{
        console.log(recommends);

        switch(doc.data().type){
        
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;
  
            case "new":
              newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
              break;
  
            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;
  
            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
  
        }
      })
    
  
    dispatch(setMovies ( {
      recommend :recommends,
      newDisney: newDisney,
      original : originals,
      trending : trending,
    })
    )
  })
  }, [userName])
  

  return (
    <Container>
      <ImgSlider/>  
      <Viewrs/>
      <Recommends/>
      <NewDisney/>
      <Originals/>
      <Trending/>
    </Container>
  )
} 

const Container = styled.main`
position:relative ;
min-height:calc(100vh - 250px) ;

overflow-x: hidden;
display:block ;
top:72px ;
padding:0 calc(3.5vw + 2.5px) ;

&:after {
  background:url("/images/home-background.png") center center / cover
      no-repeat fixed;
      content: "";
      position:absolute ;
      inset:0px;
      opacity: 1;
      z-index:-1;

}
`
export default Home