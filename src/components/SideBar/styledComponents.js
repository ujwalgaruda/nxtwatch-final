import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SideBarGroup = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0;
`
export const SideBarListItem = styled.li`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  padding-left: 30px;
  background-color: ${props => (props.isActive ? '#e2e8f0' : '#ffffff')};
  color: ${props => (props.isActive ? '#ff0000' : '#475569')};
`
export const SideBarIcon = styled.div`
  width: 30px;
`

export const SideBarItemText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 0;
  margin-left: 10px;
  margin-bottom: 0;
  font-weight: ${props => (props.isActive ? 'bold' : '400')};
  color: #000000;
`
export const SideBarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const BottomHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
`
export const BottomIconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`
export const BottomIcon = styled.img`
  width: 50px;
`
export const BottomText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
`
