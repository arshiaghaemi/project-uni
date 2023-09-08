import React from "react"
import { ThemeProvider } from "@emotion/react"
import theme from "@/configs/theme"
import { Provider } from "react-redux"
import store from "@/configs/store"
import App from "next/app"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
    
  )
}

MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store
  const pageProps = await App.getInitialProps(appContext)

  return{
    ...pageProps
  }
}

export default MyApp