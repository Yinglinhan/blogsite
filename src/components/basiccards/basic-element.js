import React from "react"
import {css} from "@emotion/core"
import { colors } from "../../assets/site-setting"

const BasicElement = (props)=>{
    return ( 
    <>
        <div css={css`
            background-color:${props.cardColor};
            height:240px;
            width:320px;
            display:inline-block;
            border:6px solid ${colors.mainBlack};
        `}>

        </div>
    </>
    )
}



export default BasicElement;

BasicElement.defaultProps = {
    cardColor:"pink"
}