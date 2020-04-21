import App from 'next/app'
import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Resets, Theme } from '../global'

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={Theme}>
        <Resets />
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </ThemeProvider>
    )
  }
}
