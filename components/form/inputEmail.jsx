import React from "react";
import { css } from "@emotion/css";
import Input from "./Input";

const InputEmail = (props) => <div
    className={css`
        width: 100%;
    `}
    >
        <Input type="email" {...props}/>
    </div>

export default InputEmail