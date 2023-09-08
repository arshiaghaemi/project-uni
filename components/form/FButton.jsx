import React from "react";
import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

const FButton = ({type = 'button', children, loading}) => {
    const theme = useTheme()
    return(
        <div
    className={css`
        width: 100%;
    `}
    >
        <button 
        className={css`
          padding: 10px;
          background-color: ${theme.colors.primary}
        `}
        type={type}>
        {loading && 'Loading...'}
        {!loading && children}</button>
    </div>
    )
}

export default FButton