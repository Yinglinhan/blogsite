import React from "react"
import {css} from "@emotion/core"

import BlueCard from "./basiccards/blue-card"
import YellowCard from "./basiccards/yellow-card"
import RedCard from "./basiccards/red-card"
import WhiteCard from "./basiccards/white-card"
import { colors } from "../assets/site-setting"

const CardGroup = ({num1})=>{
    return( 
    <div css={css`
        height:480px;
        width:640px;
        font-size:0;
        display:inline-block;
        position:relative;
    `}>
        <BlueCard />
        <YellowCard />
        <WhiteCard />
        <RedCard />
        <div css={css`
            position:absolute;
            top:100px;
            left:100px;
            font-size:2rem;
        `}>
            {num1}
        </div>
    </div>)
}

export default CardGroup;