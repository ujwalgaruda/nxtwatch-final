import {RiMoonFill} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import './index.css'
import {withRouter} from 'react-router-dom'

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
import ThemeContext from '../../context/ThemeContext'

const Header = props => {
  const onLogoutIconPressed = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeThemeClick} = value

        const onThemeButtonCLicked = () => {
          changeThemeClick()
          console.log('button clicked')
        }

        const renderThemeButton = () =>
          isDarkTheme ? (
            <FiSun color="#f9f9f9" size="25" />
          ) : (
            <RiMoonFill size="25" />
          )

        return (
          <>
            <HeaderContainer bgcolor={isDarkTheme ? '#0f0f0f' : ' #f9f9f9'}>
              <RedirectLink to="/">
                <HeaderLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </RedirectLink>
              <HeaderIconsContainer>
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={onThemeButtonCLicked}
                >
                  {renderThemeButton()}
                </ThemeButton>
                <GiHamburgerMenu
                  size="25"
                  color={isDarkTheme ? '#f9f9f9' : '#000000'}
                />
                <Popup
                  modal
                  trigger={
                    <FiLogOut
                      size="25"
                      color={isDarkTheme ? '#f9f9f9' : '#000000'}
                    />
                  }
                  className="popup-content"
                >
                  {close => (
                    <div className="modal-container">
                      <p className="logout-boxtext">
                        Are you sure, you want to logout
                      </p>

                      <div className="buttons-container">
                        <button
                          className="close-button"
                          type="button"
                          testid="closeButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>
                        <button
                          className="confirm-btn"
                          type="button"
                          onClick={onLogoutIconPressed}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </HeaderIconsContainer>
            </HeaderContainer>

            <HeaderLargeContainer
              bgcolor={isDarkTheme ? '#0f0f0f' : ' #f9f9f9'}
            >
              <RedirectLink to="/">
                <HeaderLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </RedirectLink>

              <HeaderLargeIconsContainer>
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={onThemeButtonCLicked}
                >
                  {renderThemeButton()}
                </ThemeButton>
                <ProfileImageIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      type="button"
                      color={isDarkTheme ? '#f9f9f9' : '#3b82f6'}
                    >
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <div className="modal-container">
                      <p className="logout-boxtext">
                        Are you sure, you want to logout
                      </p>

                      <div className="buttons-container">
                        <button
                          className="close-button"
                          type="button"
                          testid="closeButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>
                        <button
                          className="confirm-btn"
                          type="button"
                          onClick={onLogoutIconPressed}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </HeaderLargeIconsContainer>
            </HeaderLargeContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
