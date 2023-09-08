import theme from "@/configs/theme"
import { css } from "@emotion/css"
import Small from "@/components/Typography/Small"
import H5 from "@/components/Typography/H5"
import React from "react"

const JobCard = ({ data }) => {
  
  return (
        <div
        className={css`
        padding: 16px 48px 16px 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${theme.colors.backgroundColorPrimary};
        border-radius: ${theme.borderRadius[1]};
        position: relative;
        cursor: pointer;
        transition-duration: 0.4s;
        margin-bottom: 12px;
        &:hover {
          box-shadow: ${theme.boxShadow.light};
          color: white;
          background-color: ${theme.colors.secondary};
          .inside {
            border-color: white;
          }
        }
      `}>

        <div>
        <Small>{data.topic}</Small>
        <H5>{data.Link}</H5>
        <Small>{data.channel}</Small>
      </div>
      <div
        //className="inside"
        className={css`
          min-width: 300px;
          height: 90px;
          transition-duration: 0.4s;
          display: flex;
          padding: 0px 0px 0px 60%;
          align-items: center;
          border-left: ${theme.border[2]} solid;
          border-color: ${theme.borderColor.light};
        `}
      >
        <Small>{data.title}</Small>
      </div>
      
      </div>
  )
}
export default JobCard
