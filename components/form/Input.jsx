import React from "react";
import { css } from "@emotion/css";

const Input = ({type = 'text', placeholder, onChange}) => {
    const handleOnChange = (event) => {
        onChange(event.target.value)
    }
    return(
        <div
        >
            <input 
                className={css`
                width: 100%;
            `}
            onChange={handleOnChange}
            type={type} 
            placeholder={placeholder}/>
        </div>
    
    )
}
export default Input