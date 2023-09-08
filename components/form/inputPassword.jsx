import React from "react";
import { css } from "@emotion/css";
import Input from "./Input";

const InputPassword = (props) => <div
    className={css`
        width: 100%;
    `}
    >
        <Input type="password" {...props}/>
    </div>

export default InputPassword