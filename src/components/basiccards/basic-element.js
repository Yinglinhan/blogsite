import React from "react"
// import AllContext from "../allContent"
import {motion,useAnimation} from "framer-motion"


import {css} from "@emotion/core"
import { colors } from "../../assets/site-setting"




const BasicElement = (props)=>{
    // const controller = React.useContext(AllContext)
   

    return ( 
    <>
        <motion.div 
        className="single-card"
        css={css`
            background-color:${props.cardColor};
            height:300px;
            width:400px;
            display:inline-block;
            border:6px solid ${colors.mainBlack};
            font-size:16px;
            transition:all 0.4s ${Math.floor(Math.random()*5)/10}s ease-in-out;
            
        `}
        onClick={(e)=>{
            console.log(e.currentTarget)
            e.currentTarget.classList.add("tap-one")
            const allcards = document.querySelectorAll(".single-card")
                allcards.forEach((item)=>{
                   item.setAttribute("style","opacity:0")
               })
        }}
        
        // onTap={
        //     (e)=>{
        //         const allcards = document.querySelectorAll(".single-card")
        //         const target = e.path.filter((item)=>{
        //             if(item.classList){
        //                 const temp = Array.from(item.classList)
        //                 return temp.includes("single-card")
        //             }else{
        //                 return false
        //             }
                  
        //         })
        //         target[0].classList.add("tap-one")
        //         // console.log(,e,e.path,e.path[1])
        //         // ref.current.classList.add("tap-one")
        //         allcards.forEach((item)=>{
        //            item.setAttribute("style","opacity:0")
        //        })
        //     }
        // }
        
        >
            <div
            name="content"
            css={css`
                background-color:${props.cardColor};
                height:100%;
                width:100%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                transition:all 0.2s ease;
                &:hover > span{
                    transform:scale(0.92)
                }
            `}>
                <span css={css`
                    font-family:"optician sans";
                    font-size:24px;
                    letter-spacing:6px;
                    transition:all 0.2s ease;
                `}>{props.eng}</span>    
                <span css={css`
                    transition:all 0.2s ease;
                    font-weight:lighter;
                    font-size:80px;
                    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                `}>{props.chi}</span>
            </div>
        </motion.div>
    </>
    )
}



export default BasicElement;

BasicElement.defaultProps = {
    cardColor:"pink"
}