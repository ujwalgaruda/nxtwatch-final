import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import {
  GamingPageContainer,
  GamingHeaderContainer,
  GamingIconContainer,
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
    const url = 'https://apis.ccbp.in/videos/gamin'
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
    <FailureViewContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <NoVideosHeader>Oops! Something Went Wrong</NoVideosHeader>
      <NoVideosSubtitle>
        We are having some trouble to complete your request. <br />
        Please try again.
      </NoVideosSubtitle>
      <RetryButton onClick={this.onRetryButtonClicked}>Retry</RetryButton>
    </FailureViewContainer>
  )

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderGamingVideos = () => {
    const {videosData} = this.state

    return (
      <>
        <GamingHeaderContainer>
          <GamingIconContainer>
            <SiYoutubegaming size="30" />
          </GamingIconContainer>
          <GamingHeading>Gaming</GamingHeading>
        </GamingHeaderContainer>
        <GamingVideosGrp>
          {videosData.map(eachItem => (
            <GamingVideoListItem key={eachItem.id}>
              <GamingVideoThumbnail
                src={eachItem.thumbnailUrl}
                alt="video thumbnail"
              />
              <GamingVideoDetailsContainer>
                <VideoTitle>{eachItem.title}</VideoTitle>
                <VideoChannel>{`${eachItem.viewCount} Watching Worldwide`}</VideoChannel>
              </GamingVideoDetailsContainer>
            </GamingVideoListItem>
          ))}
        </GamingVideosGrp>
      </>
    )
  }

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
    console.log(this.state)
    return <GamingPageContainer>{this.renderAllVideos()}</GamingPageContainer>
  }
}

export default Gaming
