import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import {
  GamingPageContainer,
  GamingHeaderContainer,
  GamingIconContainer,
  StyledLink,
  GamingHeading,
  GamingVideosGrp,
  GamingVideoListItem,
  GamingVideoThumbnail,
  GamingVideoDetailsContainer,
  VideoTitle,
  VideoChannel,
  FailureViewContainer,
  NoVideosHeader,
  NoVideosImage,
  NoVideosSubtitle,
  RetryButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, videosData: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  onRetryButtonClicked = () => {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        total: fetchedData.total,
        videos: fetchedData.videos.map(eachItem => ({
          id: eachItem.id,
          title: eachItem.title,
          thumbnailUrl: eachItem.thumbnail_url,
          viewCount: eachItem.view_count,
        })),
      }
      this.setState({
        videosData: updatedData.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <FailureViewContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <NoVideosHeader color={isDarkTheme ? ' #f9f9f9' : '#231f20'}>
              Oops! Something Went Wrong
            </NoVideosHeader>
            <NoVideosSubtitle color={isDarkTheme ? ' #f9f9f9' : '#231f20'}>
              We are having some trouble to complete your request. <br />
              Please try again.
            </NoVideosSubtitle>
            <RetryButton onClick={this.onRetryButtonClicked}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderGamingVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videosData} = this.state

        return (
          <>
            <GamingHeaderContainer
              bgcolor={isDarkTheme ? '#212121' : ' #f9f9f9'}
            >
              <GamingIconContainer
                bgcolor={isDarkTheme ? '#000000' : ' #e2e8f0'}
              >
                <SiYoutubegaming size="30" />
              </GamingIconContainer>
              <GamingHeading color={isDarkTheme ? ' #f9f9f9' : '#231f20'}>
                Gaming
              </GamingHeading>
            </GamingHeaderContainer>
            <GamingVideosGrp>
              {videosData.map(eachItem => (
                <GamingVideoListItem key={eachItem.id}>
                  <StyledLink to={`/videos/${eachItem.id}`}>
                    <GamingVideoThumbnail
                      src={eachItem.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <GamingVideoDetailsContainer>
                      <VideoTitle color={isDarkTheme ? ' #f9f9f9' : '#231f20'}>
                        {eachItem.title}
                      </VideoTitle>
                      <VideoChannel
                        color={isDarkTheme ? ' #7e858e' : '#231f20'}
                      >{`${eachItem.viewCount} Watching Worldwide`}</VideoChannel>
                    </GamingVideoDetailsContainer>
                  </StyledLink>
                </GamingVideoListItem>
              ))}
            </GamingVideosGrp>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <GamingPageContainer
              data-testid="gaming"
              bgcolor={isDarkTheme ? '#0f0f0f' : ' #f9f9f9'}
            >
              {this.renderAllVideos()}
            </GamingPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
