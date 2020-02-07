import React from "react"
import BasicElement from "./basic-element"
import {colors} from "../../assets/site-setting"

const RedCard = ()=>{
    return( 
    <>
       <BasicElement cardColor={colors.mainRed} chi={'教程'} eng={'tutorial'} />
    </>)
}

export default RedCard;