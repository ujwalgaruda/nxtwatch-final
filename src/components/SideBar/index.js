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

const sideBarOptions = [
  {name: 'Home', id: '1', icon: <AiFillHome size="20" />, to: '/'},
  {name: 'Trending', id: '2', icon: <HiFire size="20" />, to: '/Trending'},
  {name: 'Gaming', id: '3', icon: <SiYoutubegaming size="20" />, to: '/Gaming'},
  {
    name: 'Saved Videos',
    id: '4',
    icon: <BiListPlus size="20" />,
    to: '/saved-videos',
  },
]

const SideBar = props => {
  const renderSideBarOptions = () =>
    sideBarOptions.map(eachItem => {
      const {activeSideItem} = props

      return (
        <SideBarListItem
          key={eachItem.id}
          isActive={activeSideItem === eachItem.name}
        >
          <StyledLink to={eachItem.to}>
            {eachItem.icon}
            <SideBarItemText isActive={activeSideItem === eachItem.name}>
              {eachItem.name}
            </SideBarItemText>
          </StyledLink>
        </SideBarListItem>
      )
    })

  return (
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
    <SideBarContainer>
      <SideBarGroup>{renderSideBarOptions()}</SideBarGroup>
      <SideBarBottomContainer>
        <BottomHeading>CONTACT US</BottomHeading>
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
        <BottomText>
          Enjoy! Now to see your channels and recommendations!
        </BottomText>
      </SideBarBottomContainer>
    </SideBarContainer>
  )
}

export default SideBar
