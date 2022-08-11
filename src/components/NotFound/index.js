import {
  NotFoundPageContainer,
  NotFoundImage,
  NotFoundHeader,
  NotFoundSubtitle,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotFoundPageContainer bgcolor={isDarkTheme ? '#0f0f0f' : ' #f9f9f9'}>
          <NotFoundImage src={imageUrl} alt="not found" />
          <NotFoundHeader color={isDarkTheme ? ' #f9f9f9' : '#231f20'}>
            Page Not Found
          </NotFoundHeader>
          <NotFoundSubtitle color={isDarkTheme ? ' #f9f9f9' : '#231f20'}>
            we are sorry, the page you requested could not be found.
          </NotFoundSubtitle>
        </NotFoundPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
