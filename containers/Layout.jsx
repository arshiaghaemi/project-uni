import React from "react";
import Header from "./header/Header";
import { css } from "@emotion/css";
import { Space } from "@/components";
const Layout = ({
    children
}) => (
    <div>
    <div className={css`
    display: flex;
    justify-content: space-between;
    `}>
        <div>
        {children}
        </div>
        <div>
        <Header/>
        </div>
    </div>
    <Space/>
    </div>
)

export default Layout