import React from 'react'
import {StyledFooter
} from './styles'

const Footer = () => {
  return (
    <StyledFooter> Copyright ©  {new Date().getFullYear()}</StyledFooter>
  )
}

export default Footer