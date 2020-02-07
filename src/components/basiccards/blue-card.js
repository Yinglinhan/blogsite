import React from "react"
import BasicElement from "./basic-element"
import {colors} from "../../assets/site-setting"

const BlueCard = ()=>{
    return( 
    <>
        <BasicElement cardColor={colors.mainBlue} chi={'分享'} eng={'post&media'} />
    </>)
}

export default BlueCard;