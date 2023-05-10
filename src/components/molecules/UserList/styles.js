import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 50%;
  margin-bottom: 2rem;
  position: fixed;
  margin-top: 130px;
  margin-left: 400px;
  
  th,
  td {
    text-align: left;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    color: #fff;
  }

  th {
    background-color: #f2f2f2;
    color: black;
  }

  tbody tr {
    background-color: transparent;
    border: 1px solid #ddd;
    
  }

`;

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
  font-size: 10px;
  justify-content: center;
  line-height: 1em;
  width: 50%;
  
  padding: 5px 24px;
  text-decoration: none;
 
  cursor: pointer;


.button:active,
.button:hover {
  outline: 0;
}



`