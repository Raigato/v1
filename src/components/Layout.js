import React, { useState, useEffect } from "react"
import { GlobalStyle } from "@styles"

const Layout = ({ children, location }) => {
  const isHome = location.pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) {
      return
    }

    if (location.hash) {
      const id = location.hash.substring(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 0)
    }
  }, [isLoading])

  return (
    <div id="root">
      <GlobalStyle />
      <div id="content">{children}</div>
    </div>
  )
}

export default Layout
