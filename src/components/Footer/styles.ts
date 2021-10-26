import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    height: 9.8rem;
    ${media.greaterThan('medium')`
      height: 30.2rem;
    `}
  `}
`
