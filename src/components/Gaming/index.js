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
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
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

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {videosData} = this.state
    console.log('trending called')

    return (
      <GamingPageContainer>
        <GamingHeaderContainer>
          <GamingIconContainer>
            <SiYoutubegaming size="30" />
          </GamingIconContainer>
          <GamingHeading>Gaming</GamingHeading>
        </GamingHeaderContainer>
        <GamingVideosGrp>
          {videosData.map(eachItem => (
            <GamingVideoListItem key={eachItem.id}>
              <GamingVideoThumbnail src={eachItem.thumbnailUrl} />
              <GamingVideoDetailsContainer>
                <VideoTitle>{eachItem.title}</VideoTitle>
                <VideoChannel>{`${eachItem.viewCount} Watching Worldwide`}</VideoChannel>
              </GamingVideoDetailsContainer>
            </GamingVideoListItem>
          ))}
        </GamingVideosGrp>
      </GamingPageContainer>
    )
  }
}

export default Gaming
