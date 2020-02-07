import React from "react"
import BasicElement from "./basic-element"

import {colors} from "../../assets/site-setting"

const YellowCard = ()=>{
    return( 
    <>
        <BasicElement cardColor={colors.mainYellow} chi={'灵感'} eng={'inspiration'} />
    </>)
}

export default YellowCard;