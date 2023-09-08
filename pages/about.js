import Head from "next/head"
import { css } from '@emotion/css'
import Link from "next/link"
import { H2, Hyperlink, Space } from "@/components"
import LayoutPage from "@/containers/LayoutPage"
import HomePageBanner from "@/containers/HomePageBanner/HomePageBanner"
import H3 from "@/components/Typography/H3"

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hyperlink href={'/'}>Home</Hyperlink>
        <Space/>
        <Hyperlink href={'/contact'}>Contact</Hyperlink>
        <LayoutPage>
          <HomePageBanner/>
        </LayoutPage>
        <Space/>  
          <div className={
            css`
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align: justify;
            `
          }>
          <H2>
            I by myself, made myself with a difficult days that had many Losses in trade
          </H2>
          <h3 className={css`

            width:50vw;
            margin: 0 auto;
          `}>
            oneDay i figure it out that, its just me and anyone cant help me with my trades and its a very wrong way that you think someone can make you a trader and you should work on your analyses and psychology as well, the only way that i can help you is sharing my mentors and podcasts and free packages that i had and you should work it hard and its the only way that you can become a TRADER.
          </h3>

          </div>
      </>
  )
}
