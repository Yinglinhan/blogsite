import React from "react"
import {Global,css} from "@emotion/core"

import { colors } from "../assets/site-setting"
import CardGroup from "../components/cards-group"
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
window.addEventListener("wheel",function(e){
  e.preventDefault()
},{
  passive:false
})
console.log(888)

// 组件 ------------
const IndexPage = () => {
  const [refresh,setRefresh] = React.useState([])
  const controller = useAnimation()
  React.useEffect(()=>{
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
    console.log('start',e,info)
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
    console.log(321)
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
  <>
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
    <motion.div 
    // drag
    // onDragStart={dragBegin}
    // onDragEnd={dragFinish}
    onTapStart={dragStart}
    onPanEnd={dragEnd}
    onPan={dragging}
    dragMomentum={false}
    animate={controller}
    initial={{x:-(3840 - window.innerWidth/2),y:-(3840 - window.innerHeight/2)}}
    css={css`
      height:7680px;
      width:7680px;
      font-size:0;
      background-color:${colors.mainBlack};
    `}>
      {/* {console.log(-(1280 - window.innerWidth/2))} */}
      { Array.from(Array(192)).map((item,index)=>{
        return <CardGroup key={index} />
      })
      }

    </motion.div>
    
  </>)
}

export default IndexPage
