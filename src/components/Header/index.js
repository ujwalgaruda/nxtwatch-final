import {RiMoonFill} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderIconsContainer,
  HeaderLargeIconsContainer,
  ProfileImageIcon,
  LogoutButton,
  ThemeButton,
} from './styledComponents'

const Header = props => {
  const onLogoutIconPressed = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <HeaderContainer>
      <HeaderLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
      <HeaderIconsContainer>
        <ThemeButton type="button" data-testid="theme">
          <RiMoonFill size="25" />
        </ThemeButton>
        <GiHamburgerMenu size="25" />
        <FiLogOut onClick={onLogoutIconPressed} size="25" />
      </HeaderIconsContainer>
      <HeaderLargeIconsContainer>
        <ThemeButton type="button" data-testid="theme">
          <RiMoonFill size="25" />
        </ThemeButton>
        <ProfileImageIcon
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <LogoutButton type="button" onClick={onLogoutIconPressed}>
          Logout
        </LogoutButton>
      </HeaderLargeIconsContainer>
    </HeaderContainer>
  )
}

export default Header
