import React from 'react'
import {StyledHeader,StyledLogo,StyledHeaderContainer} from './styles'
import Button from '../../atom/Button/Button'

const Header = () => {
  return (
    <StyledHeaderContainer>
    <StyledHeader>
        <StyledLogo><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Logotip_d%27%C3%80_Punt_%282017-%29.svg/1200px-Logotip_d%27%C3%80_Punt_%282017-%29.svg.png" alt="logo" /></StyledLogo>
    </StyledHeader>

    <div><Button/></div>
    
    </StyledHeaderContainer>
  )
}

export default Header