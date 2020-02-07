import React from "react"
import BasicElement from "./basic-element"

import {colors} from "../../assets/site-setting"

const WhiteCard = ()=>{
    return( 
    <>
        <BasicElement cardColor={colors.mainWhite} chi={'文档'} eng={'document'} />
    </>)
}

export default WhiteCard;