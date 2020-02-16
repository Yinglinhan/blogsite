import React from "react"
import AllContext from "../allContent"

import {css} from "@emotion/core"
import { colors } from "../../assets/site-setting"

function createCard(a,e){
    console.log(a,e)
}


const BasicElement = (props)=>{
    const controller = React.useContext(AllContext)

    return ( 
    <>
        <div 
        css={css`
            background-color:${props.cardColor};
            height:300px;
            width:400px;
            display:inline-block;
            border:6px solid ${colors.mainBlack};
            font-size:16px;
            transition:all 0.4s ease;
        `}
        onClick={(e)=>{

          

        }}
        
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
        </div>
    </>
    )
}



export default BasicElement;

BasicElement.defaultProps = {
    cardColor:"pink"
}