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
  HeaderLargeContainer,
  ThemeButton,
  RedirectLink,
} from './styledComponents'

const Header = props => {
  const onLogoutIconPressed = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <HeaderContainer>
        <RedirectLink to="/">
          <HeaderLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </RedirectLink>
        <HeaderIconsContainer>
          <ThemeButton type="button" data-testid="theme">
            <RiMoonFill size="25" />
          </ThemeButton>
          <GiHamburgerMenu size="25" />
          <FiLogOut onClick={onLogoutIconPressed} size="25" />
        </HeaderIconsContainer>
      </HeaderContainer>

      <HeaderLargeContainer>
        <RedirectLink to="/">
          <HeaderLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </RedirectLink>

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
      </HeaderLargeContainer>
    </>
  )
}

export default Header
