import React, { useState } from "react"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import { theme, media } from "@styles"
const { colors, loaderDelay } = theme

const StyledContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === "left" ? "40px" : "auto")};
  right: ${props => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;
  color: ${colors.textSecondary};
  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};
`

const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome)

  useEffect(() => {
    if (!isHome) {
      return
    }

    const timeout = setTimeout(() => setIsMounted(true), loaderDelay)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledContainer orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition
            classNames={isHome ? "fade" : ""}
            timeout={isHome ? loaderDelay : 0}
          >
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledContainer>
  )
}

export default Side
