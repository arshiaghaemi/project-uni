import React from "react";
import { css } from "@emotion/css";

const LayoutAuth = ({children}) => <div
    className={css`
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `}
    >
        <div>
            <img 
            className={css`
            width=300px
            `}
            src="images.jpeg"/>
        </div>
        <div>
            {children}
        </div>
    </div>

export default LayoutAuth