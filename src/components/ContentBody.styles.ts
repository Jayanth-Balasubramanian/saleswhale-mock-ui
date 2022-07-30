import styled from 'styled-components'

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  
  justify-content: space-evenly;
  align-content: space-around;
  left: 9.82%;
  right: 27.8%;
  top: 30.67%;
  //bottom: -12.25%;

  background: #FFFFFF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05), 0 0 30px rgba(0, 0, 0, 0.1);
  
`

export const Title = styled.div `
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  grid-column: span 3;  
  justify-content: space-between;
`


