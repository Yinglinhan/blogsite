import React from "react"
import {Global,css} from "@emotion/core"
import AllContext from "../components/allContent"

import { colors } from "../assets/site-setting"
import CardGroup from "../components/cards-group"
// import LoadBox from "../components/loadBox"

import {motion,useAnimation} from "framer-motion"


const tempOffset = {
  startX:0,
  startY:0,
  acumulateX:0,
  acumulateY:0,
  x:0,
  y:0,
  prevY:0,
  prevX:0
}


// 组件 ------------
const IndexPage = () => {
  const [refresh,setRefresh] = React.useState([])
  const [isvisible,setVisible] = React.useState('none')
  // const [isready,setReady] = React.useState(false)
  const controller = useAnimation()
  const controllerCon = useAnimation()
  React.useEffect(()=>{
    controller.set(
      {x:-(3840 - window.innerWidth/2),y:-(3840 - window.innerHeight/2)}
    )
    setVisible('auto')
    window.addEventListener("wheel",function(e){
      e.preventDefault()
    },{
      passive:false
    })
    window.addEventListener("resize",()=>{
      controller.set(
        {
          x:-(3840 - window.innerWidth/2) + tempOffset.acumulateX,
          y:-(3840 - window.innerHeight/2) + tempOffset.acumulateY,
        }
      )
      setRefresh([])
    })
    
   
  },[])
  
  function dragBegin(e){
    // console.log(e)
    tempOffset.startX = e.clientX
    tempOffset.startY = e.clientY
    // console.log(tempOffset)
    
  }
 
  function dragStart(e,info){

    tempOffset.prevX = e.clientX 
    tempOffset.prevY = e.clientY
    controller.start({
      scale:0.99,
      transition:{
        duration:0.08,
        ease:"easeInOut"
      }
    })
  }
  function dragEnd(){

    controller.start({
      scale:1,
      transition:{
        duration:0.08,
        ease:"easeInOut"
      }
    })
   if(parseInt(tempOffset.acumulateX / 800 ) !== 0 || parseInt(tempOffset.acumulateY / 600 ) !== 0){
    tempOffset.acumulateX = parseInt(tempOffset.acumulateX / 800 ) !== 0 ? tempOffset.acumulateX % 800 : tempOffset.acumulateX
    tempOffset.acumulateY = parseInt(tempOffset.acumulateY / 600 ) !== 0 ? tempOffset.acumulateY % 600 : tempOffset.acumulateY
    controller.set(
      {
        x:-(3840 - window.innerWidth/2) + tempOffset.acumulateX,
        y:-(3840 - window.innerHeight/2) + tempOffset.acumulateY,
        
      }
    )
   }

  }
  function dragging(e,info){
    // console.log('dragging',e.movementY,e.movementX)
    // console.log(e,e.clientX)
    tempOffset.acumulateX += Math.round(e.clientX - tempOffset.prevX)
    tempOffset.acumulateY += Math.round(e.clientY - tempOffset.prevY)
    tempOffset.prevX = e.clientX 
    tempOffset.prevY = e.clientY
    console.log(tempOffset)
    controller.set(
      {
        x:-(3840 - window.innerWidth/2) + tempOffset.acumulateX,
        y:-(3840 - window.innerHeight/2) + tempOffset.acumulateY,
      }
    )
  }

  return (
  <AllContext.Provider value={controllerCon}>
    <Global styles={css`
      html *{
        box-sizing:border-box;
        padding:0;
        margin:0;
      }
      body{
        -moz-user-select:none;
        -webkit-user-select:none;
        -ms-user-select:none;
      }

    `}/>
    {/* <LoadBox isready={isready}/> */}
    <motion.div 
      onTapStart={dragStart}
      onPanEnd={dragEnd}
      onPan={dragging}
      dragMomentum={false}
      animate={controller}
      
      css={css`
      height:7680px;
      width:7680px;
      font-size:0;
      background-color:${colors.mainBlack};
      display:${isvisible};
      `}>
      {/* {console.log(-(1280 - window.innerWidth/2))} */}
      { Array.from(Array(192)).map((item,index)=>{
        return <CardGroup key={index} />
      })
      }
    </motion.div>
    <div 
      name="me-container"
      css={css`
        position:fixed;
        bottom:-30px;
        right:100px;
        height:60px;
        width:60px;
        background-color:white;
        border-radius:50%;
        transition:all 0.2s ease;
        opacity:0.5;
        &:hover{
          transform:translateY(-50%);
          opacity:1;
        }
        &:hover  .mini-code{
          transform:translateY(0);
        }
        &:hover  .mini-code-box{
          
          height:132px;
        }
        `}>
        <svg viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M18 17L50 9L83 17V86H18V17Z" fill="#06011E"/>
        <path d="M50.5003 86.1998C38.1045 86.1998 27.1466 79.8532 20.7503 70.3332C20.8991 60.4165 40.5837 54.9623 50.5003 54.9623C60.417 54.9623 80.1016 60.4165 80.2503 70.3332C76.9723 75.2142 72.5444 79.2143 67.3565 81.9812C62.1686 84.7481 56.3799 86.1968 50.5003 86.1998V86.1998ZM50.5003 15.7915C54.4454 15.7915 58.2289 17.3587 61.0185 20.1483C63.8081 22.9379 65.3753 26.7214 65.3753 30.6665C65.3753 34.6116 63.8081 38.3951 61.0185 41.1847C58.2289 43.9743 54.4454 45.5415 50.5003 45.5415C46.5552 45.5415 42.7717 43.9743 39.9821 41.1847C37.1925 38.3951 35.6253 34.6116 35.6253 30.6665C35.6253 26.7214 37.1925 22.9379 39.9821 20.1483C42.7717 17.3587 46.5552 15.7915 50.5003 15.7915V15.7915ZM50.5003 0.916504C43.989 0.916504 37.5413 2.19902 31.5256 4.69081C25.5099 7.18261 20.0439 10.8349 15.4396 15.4391C6.14094 24.7378 0.916992 37.3495 0.916992 50.4998C0.916992 63.6502 6.14094 76.2619 15.4396 85.5606C20.0439 90.1648 25.5099 93.8171 31.5256 96.3089C37.5413 98.8007 43.989 100.083 50.5003 100.083C63.6506 100.083 76.2624 94.8592 85.561 85.5606C94.8597 76.2619 100.084 63.6502 100.084 50.4998C100.084 23.0803 77.7712 0.916504 50.5003 0.916504Z" fill="white"/>
      </svg>
      <div
        className="mini-code-box"
        css={css`
          transition:height 0.2s ease;
          position:absolute;
          height:0px;
          width:100%;
          bottom:0;
          z-index:-1;
          background-color:transparent;
          overflow:hidden;
          transform:translateY(-30px);
        `}
      >
        <div
          className="mini-code"
          css={css`
            position:absolute;
            height:132px;
            width:100%;
            background-image:url('/miniwechat.png');
            background-size:cover;
            transform:translateY(100%);
            transition:all 0.2s ease;
            
          `}
        >
        </div>
      </div>
    </div>
    <motion.div 
      name="main-content"
      css={css`
        position:fixed;
        top:0;
        left:0;
        height:100vh;
        width:100vw;
        background-color:white;
        opacity:1;
        z-index:-1;
      `}
      
      animate={controllerCon}
      >
        这是内容页面
    </motion.div>
  </AllContext.Provider>)
}

export default IndexPage
