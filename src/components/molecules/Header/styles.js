import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`

display: flex;
flex-direction: row-reverse;
justify-content: space-around;
align-items: center;
background: #4b495a;

`

export const StyledHeader = styled.div`
  
  background-color: #4b495a;
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  height: 10vh;
  
`;

export const StyledLogo = styled.div`

  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 20px;

  img {
    width: 100%;
  }
`;

