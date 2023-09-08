import React from "react";
import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

const Button = ({children, type, onClick}) => {
    const theme = useTheme()
    return(
        <button
        onClick={onClick}
        className = {css`
        padding: 32px;
        border: none;
        color: yellow;
        font-size: 17px;
        background-color:blue;
        margin: 10px;
        `}
    >
        {children}
    </button>
    )
}

export default Button