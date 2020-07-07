import { css } from "styled-components"
import theme from "./theme"
import media from "./media"
const { colors, fontSizes, fonts } = theme

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.textPrimary};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${colors.primary};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.primary};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${colors.primary} !important;
        transition: ${theme.transition};
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.primary};
      transition: ${theme.transition};
      opacity: 0.5;
    }
  `,

  smallButton: css`
    color: ${colors.primary};
    background-color: transparent;
    border: 2px solid ${colors.primary};
    border-radius: ${theme.borderRadius};
    padding: 0.75rem 1.5rem;
    font-size: ${fontSizes.smish};
    font-family: ${fonts.Nunito};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.primary};
      color: ${colors.textSecondary};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${colors.primary};
    background-color: transparent;
    border: 2px solid ${colors.primary};
    border-radius: ${theme.borderRadius};
    padding: 1.25rem 3.75rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.Nunito};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.primary};
      color: ${colors.textSecondary};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.shadowBg};
    transition: ${theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.shadowBg};
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.lg};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: ${colors.primary};
      }
    }
  `,
}

export default mixins
