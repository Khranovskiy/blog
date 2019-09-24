import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}
    {/* , Powered by
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a> */}
    {` `}&bull;{` `}
    {socialLinks.map((platform, i, arr) => (
      <Fragment key={platform.url}>
        <Styled.a href={platform.url} target="_blank" rel="noopener noreferrer">
          {platform.name}
        </Styled.a>
        {arr.length - 1 !== i && (
          <Fragment>
            {` `}&bull;{` `}
          </Fragment>
        )}
      </Fragment>
    ))}
    <Fragment>
      {` `}&bull;{` `}
    </Fragment>
    <Styled.a href={'https://micro.blog/xronosd'} target="_blank" rel="me">Micro.blog</Styled.a>
  </footer>
)
export default Footer
//node_modules/gatsby-theme-blog/src/components/home-footer.js