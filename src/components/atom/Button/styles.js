import styled from 'styled-components'

export const StyledButton = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 10px 20px;
  text-decoration: none;
 
  cursor: pointer;

.button:active,
.button:hover {
  outline: 0;
}

@media (min-width: 768px) {

    font-size: 24px;
    min-width: 196px;
  
}

`