import React from "react"
import {Global,css} from "@emotion/core"

import CardGroup from "../components/cards-group"
import {motion,useAnimation} from "framer-motion"


const tempOffset = {
  startX:0,
  startY:0,
  acumulateX:0,
  acumulateY:0,
  x:0,
  y:0
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
      setRefresh([])
    })
   
   
  },[])
  
  function dragBegin(e){
    // console.log(e)
    tempOffset.startX = e.clientX
    tempOffset.startY = e.clientY
    // console.log(tempOffset)
    
  }
  // function dragFinish(e){
  //   // console.log(e)
  //   console.log(controller)
  //   tempOffset.acumulateX += tempOffset.startX - e.clientX 
  //   tempOffset.acumulateY += tempOffset.startY - e.clientY
  //   tempOffset.x = parseInt(tempOffset.acumulateX / 640 ) !== 0 ? tempOffset.acumulateX % 640 : tempOffset.acumulateX
  //   tempOffset.y = parseInt(tempOffset.acumulateY / 480 ) !== 0 ? tempOffset.acumulateY % 480 : tempOffset.acumulateY
  //   // console.log(tempOffset)
  //   //鼠标往上 左拖拽 数值是正数
  //   //鼠标往下 右拖拽  负数
  //   if(parseInt(tempOffset.acumulateX / 640 ) !== 0 || parseInt(tempOffset.acumulateY / 480 ) !== 0) {
  //     console.log('需要重置',tempOffset)
  //     // controller.set({
  //     //   x:100,
  //     //   y:100
  //     // })
  //     controller.set({
  //       x:-(3840 - window.innerWidth/2) - tempOffset.x,
  //       y:-(3840 - window.innerHeight/2) - tempOffset.y
        
  //     })
  //     tempOffset.acumulateX = tempOffset.x
  //     tempOffset.acumulateY = tempOffset.y

  //   }
  // }
  function dragStart(){
    console.log(123)
  }
  function dragEnd(){
    console.log(321)
  }
  function dragging(){
    console.log(666)
  }

  return (
  <>
    <Global styles={css`
      html *{
        box-sizing:border-box;
        padding:0;
        margin:0;
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
    `}>
      {/* {console.log(-(1280 - window.innerWidth/2))} */}
      { Array.from(Array(192)).map((item,index)=>{
        return <CardGroup key={index} num1={index}/>
      })
      }

    </motion.div>
    
  </>)
}

export default IndexPage
