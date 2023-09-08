import React from "react";
import { css } from "@emotion/css";
import Input from "./Input";

const InputText = (props) => <div
    className={css`
        width: 100%;
    `}
    >
        <Input type="text" {...props}/>
    </div>

export default InputText