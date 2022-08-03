import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'

import {
  TrendingPageContainer,
  TrendingHeaderContainer,
  TrendingIconContainer,
  TrendingHeading,
  TrendingVideosGrp,
  TrendingVideoListItem,
  TrendingVideoThumbnail,
  TrendingVideoDetailsContainer,
  VideoTitle,
  VideoChannel,
  ViewsAndDateContainer,
  ViewsDateText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, videosData: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
          channel: {
            name: eachItem.channel.name,
            profileImageUrl: eachItem.channel.profile_image_url,
          },
          viewCount: eachItem.view_count,
          publishedAt: eachItem.published_at,
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
      <TrendingPageContainer>
        <TrendingHeaderContainer>
          <TrendingIconContainer>
            <HiFire size="30" />
          </TrendingIconContainer>
          <TrendingHeading>Trending</TrendingHeading>
        </TrendingHeaderContainer>
        <TrendingVideosGrp>
          {videosData.map(eachItem => (
            <TrendingVideoListItem key={eachItem.id}>
              <TrendingVideoThumbnail src={eachItem.thumbnailUrl} />
              <TrendingVideoDetailsContainer>
                <VideoTitle>{eachItem.title}</VideoTitle>
                <VideoChannel>{eachItem.channel.name}</VideoChannel>
                <ViewsAndDateContainer>
                  <ViewsDateText>{eachItem.viewCount}</ViewsDateText>
                  <BsDot />
                  <ViewsDateText>{eachItem.publishedAt}</ViewsDateText>
                </ViewsAndDateContainer>
              </TrendingVideoDetailsContainer>
            </TrendingVideoListItem>
          ))}
        </TrendingVideosGrp>
      </TrendingPageContainer>
    )
  }
}

export default Trending
