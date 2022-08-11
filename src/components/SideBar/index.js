import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  SideBarContainer,
  SideBarGroup,
  SideBarListItem,
  SideBarItemText,
  SideBarBottomContainer,
  BottomIconsContainer,
  BottomHeading,
  BottomIcon,
  BottomText,
  StyledLink,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const sideBarOptions = [
  {
    name: 'Home',
    id: '1',
    icon: <AiFillHome size="20" />,
    to: '/',
  },
  {name: 'Trending', id: '2', icon: <HiFire size="20" />, to: '/trending'},
  {name: 'Gaming', id: '3', icon: <SiYoutubegaming size="20" />, to: '/gaming'},
  {
    name: 'Saved Videos',
    id: '4',
    icon: <BiListPlus size="20" />,
    to: '/saved-videos',
  },
]

class SideBar extends Component {
  state = {activeTab: 'Home'}

  renderSideBarOptions = () =>
    sideBarOptions.map(eachItem => (
      <ThemeContext.Consumer key={eachItem.id}>
        {value => {
          const {isDarkTheme} = value
          const {activeTab} = this.state
          const isTabActive = activeTab === eachItem.name
          const isTabActiveIsDarkTheme = isTabActive && isDarkTheme
          const onTabChange = () => {
            this.setState({activeTab: eachItem.name})
          }
          const iconColor =
            (isTabActive && '#ff0000') || (isDarkTheme ? '#616e7c' : '#606060')

          return (
            <SideBarListItem
              key={eachItem.id}
              bgcolor={
                (isTabActiveIsDarkTheme && '#606060') ||
                (isTabActive && !isDarkTheme && '#f1f5f9')
              }
            >
              <StyledLink
                to={eachItem.to}
                fill={iconColor}
                onClick={onTabChange}
              >
                {eachItem.icon}
                <SideBarItemText color={isDarkTheme ? '#ffffff' : '#000000'}>
                  {eachItem.name}
                </SideBarItemText>
              </StyledLink>
            </SideBarListItem>
          )
        }}
      </ThemeContext.Consumer>
    ))

  // return (
  // <SideBarContainer>
  //   <SideBarGroup>
  //     <SideBarListItem>
  //       <SideBarIcon>
  //         <AiFillHome color="#475569" />
  //       </SideBarIcon>
  //       <SideBarItemText>Home</SideBarItemText>
  //     </SideBarListItem>
  //     <SideBarListItem>
  //       <SideBarIcon>
  //         <HiFire color="#475569" />
  //       </SideBarIcon>
  //       <SideBarItemText>Trending</SideBarItemText>
  //     </SideBarListItem>
  //     <SideBarListItem>
  //       <SideBarIcon>
  //         <SiYoutubegaming color="#475569" />
  //       </SideBarIcon>
  //       <SideBarItemText>Gaming</SideBarItemText>
  //     </SideBarListItem>
  //     <SideBarListItem>
  //       <SideBarIcon>
  //         <BiListPlus color="#475569" />
  //       </SideBarIcon>
  //       <SideBarItemText>Saved videos</SideBarItemText>
  //     </SideBarListItem>
  //   </SideBarGroup>
  // </SideBarContainer>

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SideBarContainer bgcolor={isDarkTheme ? '#181818' : '#ffffff'}>
              <SideBarGroup>{this.renderSideBarOptions()}</SideBarGroup>
              <SideBarBottomContainer>
                <BottomHeading color={isDarkTheme ? '#ffffff' : '#000000'}>
                  CONTACT US
                </BottomHeading>
                <BottomIconsContainer>
                  <BottomIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <BottomIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <BottomIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </BottomIconsContainer>
                <BottomText color={isDarkTheme ? '#ffffff' : '#000000'}>
                  Enjoy! Now to see your channels and recommendations!
                </BottomText>
              </SideBarBottomContainer>
            </SideBarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBar
