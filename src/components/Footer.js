import React from "react"
import styled from "styled-components"

import { FormattedIcon } from "@components/icons"
import { socialMedia, githubRepo, author } from "@config"
import { theme, mixins, media } from "@styles"
const { colors, fontSizes, fonts } = theme

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`
const StyledSocial = styled.div`
  color: ${colors.textSecondary};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`
const StyledMetadata = styled.div`
  font-family: ${fonts.Nunito};
  font-size: ${fontSizes.xs};
  line-height: 1;
`
const StyledGitHubLink = styled.a`
  color: ${colors.textSecondary};
  padding: 10px;
`

const Footer = () => (
  <StyledContainer>
    <StyledSocial>
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <StyledSocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                <FormattedIcon name={name} />
              </StyledSocialLink>
            </li>
          ))}
      </StyledSocialList>
    </StyledSocial>
    <StyledMetadata tabindex="-1">
      <StyledGitHubLink
        href={githubRepo}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <div>Designed &amp; Built by {author}</div>
      </StyledGitHubLink>
    </StyledMetadata>
  </StyledContainer>
)

export default Footer
