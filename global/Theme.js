import { createGlobalStyle } from 'styled-components'

export const Theme = {
  sizing: {
    navWidth: '200px'
  }
}

export const Resets = createGlobalStyle`
  #__next, html, body {
    font-family: sans-serif;
    font-size: 16px;
    min-height: 100vh;
    margin: 0;
    width: 100vw;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    margin-top: 0px;
  }

  ul {
    margin-top: 0px;
  }
`
