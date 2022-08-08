import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import Loader from 'react-loader-spinner'

import {
  VideoItemDetailsContainer,
  VideoTitle,
  ViewsAndDateContainer,
  ViewsDateText,
  IconsContainer,
  IconButtons,
  LikeIcon,
  UnlikeButton,
  SavedIcon,
  TextContainer,
  Line,
  IconText,
  ProfileAndTitleContainer,
  VideoDescription,
  ProfileImage,
  TitleContainer,
  SubscribersText,
  ChannelName,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoPageInfo: {},
    apiStatus: apiStatusConstants.initial,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`

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
        videoDetails: {
          id: fetchedData.video_details.id,
          title: fetchedData.video_details.title,
          videoUrl: fetchedData.video_details.video_url,
          thumbnailUrl: fetchedData.video_details.thumbnail_url,
          channel: {
            name: fetchedData.video_details.channel.name,
            profileImageUrl:
              fetchedData.video_details.channel.profile_image_url,
            subscriberCount: fetchedData.video_details.channel.subscriber_count,
          },
          viewCount: fetchedData.video_details.view_count,
          publishedAt: fetchedData.video_details.published_at,
          description: fetchedData.video_details.description,
        },
      }
      this.setState({
        videoPageInfo: updatedData,
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

  renderFailureView = () => <div>Failure</div>

  renderVideoPlayerPage = () => (
    <ThemeContext.Consumer>
      {value => {
        const {videoPageInfo, isSaved} = this.state
        const {videoDetails} = videoPageInfo
        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
          channel,
          description,
        } = videoDetails
        const {profileImageUrl, name, subscriberCount} = channel

        const {onSaveButtonClick} = value

        const saveButtonClicked = () => {
          this.setState(prevState => ({isSaved: !prevState.isSaved}))
          onSaveButtonClick(videoDetails)
        }

        return (
          <>
            <ReactPlayer url={videoUrl} width="100%" height="400px" controls />
            <TextContainer>
              <VideoTitle>{title}</VideoTitle>
              <ViewsAndDateContainer>
                <ViewsDateText>{`${viewCount} views`}</ViewsDateText>
                <BsDot />
                <ViewsDateText>{publishedAt}</ViewsDateText>
              </ViewsAndDateContainer>
              <IconsContainer>
                <IconButtons type="button">
                  <LikeIcon size="30" color="#475569" />
                  <IconText>Like</IconText>
                </IconButtons>
                <IconButtons type="button">
                  <UnlikeButton size="30" color="#475569" />
                  <IconText>Unlike</IconText>
                </IconButtons>
                <IconButtons
                  type="button"
                  onClick={saveButtonClicked}
                  isSaved={isSaved}
                >
                  <SavedIcon size="30" color="#475569" />
                  <IconText>Save</IconText>
                </IconButtons>
              </IconsContainer>
              <Line />
              <ProfileAndTitleContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <TitleContainer>
                  <ChannelName>{name}</ChannelName>
                  <SubscribersText>{`${subscriberCount} subscribers`}</SubscribersText>
                </TitleContainer>
              </ProfileAndTitleContainer>
              <VideoDescription>{description}</VideoDescription>
            </TextContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoPlayerPage()
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
      <VideoItemDetailsContainer>
        {this.renderVideoPage()}
      </VideoItemDetailsContainer>
    )
  }
}

export default VideoItemDetails
