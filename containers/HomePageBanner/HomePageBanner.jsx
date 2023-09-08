import { css } from '@emotion/css'
import theme from '@/configs/theme'
import { H1, H2 } from '@/components'
import React from 'react'
import Button from '@/components/Button/Button'
import H3 from '@/components/Typography/H3'

const HomePageBanner = () => {
  return (
    <div
      className={css`
        background-color: ${theme.colors.backgroundColorSecondary};
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: center;
          max-width: 1000px;
          padding: 32px 0;
          margin: 0 auto;
          text-align: center;
          flex-direction: column;
        `}
      >
        <H1
          align="center"
          className={css`
            padding-bottom: 16px;
          `}
        >
          Welcome To Trade Museum 
        </H1>
        <H3
        >
          In this site, we want to help you to become a better version of yourself and your Trades
        </H3>
      </div>
    </div>
  )
}

export default HomePageBanner
