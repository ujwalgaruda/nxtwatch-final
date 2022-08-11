import styled from 'styled-components'

export const NotFoundPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgcolor};
`
export const NotFoundImage = styled.img`
  width: 30%;
`
export const NotFoundHeader = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.color};
`
export const NotFoundSubtitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  text-align: center;
`
