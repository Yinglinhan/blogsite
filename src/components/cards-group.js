import React from "react"
import {css} from "@emotion/core"

import BlueCard from "./basiccards/blue-card"
import YellowCard from "./basiccards/yellow-card"
import RedCard from "./basiccards/red-card"
import WhiteCard from "./basiccards/white-card"
import { colors } from "../assets/site-setting"

const CardGroup = ()=>{
    return( 
    <div css={css`
        height:600px;
        width:800px;
        font-size:0;
        display:inline-block;
        position:relative;
    `}>
        <BlueCard />
        <YellowCard />
        <WhiteCard />
        <RedCard />
        
    </div>)
}

export default CardGroup;