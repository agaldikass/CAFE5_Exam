import styled from 'styled-components';

export const StyledContainer = styled.div`

`


export const StyledFormContainer = styled.div`
border: 1px solid #fff;
border-radius: 10px ;

height: 500px;

position: fixed;
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h1 {
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
  }
`;

export const StyledLabel = styled.label`
  margin: 10px;
  color: #fff;
  margin-left: 20px;
`;

export const StyledInput = styled.input`
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  width: 90%;
  
`;

export const StyledBtnContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`

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
  width: 50%;
  
  padding: 10px 24px;
  text-decoration: none;
 
  cursor: pointer;


.button:active,
.button:hover {
  outline: 0;
}

`

