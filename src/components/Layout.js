import React from "react"
import styled from "styled-components"

import { Nav } from "@components"
import { GlobalStyle, theme } from "@styles"

const { colors, fontSizes, fonts } = theme

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.primary};
    background-color: ${colors.background};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.Nunito};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children, location }) => {
  const isHome = location.pathname === "/"
  // const [isLoading, setIsLoading] = useState(isHome)

  // useEffect(() => {
  //   if (isLoading) {
  //     return
  //   }

  //   if (location.hash) {
  //     const id = location.hash.substring(1)
  //     setTimeout(() => {
  //       const el = document.getElementById(id)
  //       if (el) {
  //         el.scrollIntoView()
  //         el.focus()
  //       }
  //     }, 0)
  //   }
  // }, [isLoading])

  return (
    <div id="root">
      <GlobalStyle />

      <SkipToContent href="#content">Skip to Content</SkipToContent>

      <StyledContent>
        <Nav isHome={isHome} />
        <div id="content">{children}</div>
      </StyledContent>
    </div>
  )
}

export default Layout
