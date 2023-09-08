import { css } from "@emotion/css";
import { useSelector } from "react-redux";
import React from "react";

function LayoutPage({children, page}) {
  return <div className={css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `}>
    <div page={page}/>
    <div>
      {children}
    </div>
  </div>
}

export default LayoutPage
