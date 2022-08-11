import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

export const SideBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  width: 300px;
  background-color: ${props => props.bgcolor};
  @media screen and (max-width: 768px) {
    display: none;
    position: absolute;
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
  padding-left: 20px;
  margin-top: 10px;
  background-color: ${props => props.bgcolor};
  //   background-color: ${props => props.bgcolor};

  //   background-color: ${props => (props.isactive ? '#e2e8f0' : '#ffffff')};
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
  font-weight: ${props => (props.isactive ? 'bold' : '400')};
  color: ${props => props.color};
`
export const SideBarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 20px;
`

export const BottomHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`
export const BottomIconsContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`
export const BottomIcon = styled.img`
  width: 30px;
`
export const BottomText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  width: 80%;
  color: ${props => props.color};
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${props => props.fill};
`
export const HomeIcon = styled(AiFillHome)`
  width: 20px;
`
export const TrendingIcon = styled(HiFire)`
  width: 20px;
`

export const GamingIcon = styled(SiYoutubegaming)`
  width: 10px;
`

export const SavedVideosIcon = styled(BiListPlus)`
  width: 20px;
`
