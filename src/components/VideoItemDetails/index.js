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

class VideoItemDetails extends Component {
  state = {
    videoPageInfo: {},
    apiStatus: apiStatusConstants.initial,
    isSaved: false,
    isLiked: false,
    isUnliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onRetryButtonClicked = () => {
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

  renderVideoPlayerPage = () => (
    <ThemeContext.Consumer>
      {value => {
        const {videoPageInfo, isSaved, isLiked, isUnliked} = this.state
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

        const {onSaveButtonClick, isDarkTheme} = value

        const saveButtonClicked = () => {
          this.setState(prevState => ({isSaved: !prevState.isSaved}))
          onSaveButtonClick(videoDetails)
        }

        const onLikeBtnClick = () => {
          this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            isUnliked: false,
          }))
        }

        const onUnlikeBtnClick = () => {
          this.setState(prevState => ({
            isUnliked: !prevState.isUnliked,
            isLiked: false,
          }))
        }

        return (
          <>
            <ReactPlayer url={videoUrl} width="100%" height="400px" controls />
            <TextContainer>
              <VideoTitle color={isDarkTheme ? '#ffffff' : '#000000'}>
                {title}
              </VideoTitle>
              <ViewsAndDateContainer
                color={isDarkTheme ? ' #64748b' : ' #475569'}
              >
                <ViewsDateText>{`${viewCount} views`}</ViewsDateText>
                <BsDot />
                <ViewsDateText>{publishedAt}</ViewsDateText>
              </ViewsAndDateContainer>
              <IconsContainer>
                <IconButtons type="button" onClick={onLikeBtnClick}>
                  <LikeIcon
                    size="30"
                    color={isLiked ? ' #2563eb' : '#64748b'}
                  />
                  <IconText isLiked={isLiked ? ' #2563eb' : '#64748b'}>
                    Like
                  </IconText>
                </IconButtons>
                <IconButtons type="button" onClick={onUnlikeBtnClick}>
                  <UnlikeButton
                    size="30"
                    color={isUnliked ? '#2563eb' : '#64748b'}
                  />
                  <IconText isUnliked={isUnliked ? '#2563eb' : '#64748b'}>
                    Dislike
                  </IconText>
                </IconButtons>
                <IconButtons type="button" onClick={saveButtonClicked}>
                  <SavedIcon
                    size="30"
                    color={isSaved ? '#2563eb' : '#64748b'}
                  />
                  <IconText isSaved={isSaved ? '#2563eb' : '#64748b'}>
                    {isSaved ? 'Saved' : 'Save'}
                  </IconText>
                </IconButtons>
              </IconsContainer>
              <Line />
              <ProfileAndTitleContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <TitleContainer>
                  <ChannelName color={isDarkTheme ? '#ffffff' : '#000000'}>
                    {name}
                  </ChannelName>
                  <SubscribersText
                    color={isDarkTheme ? '#64748b' : '#475569'}
                  >{`${subscriberCount} subscribers`}</SubscribersText>
                </TitleContainer>
              </ProfileAndTitleContainer>
              <VideoDescription color={isDarkTheme ? '#64748b' : '#475569'}>
                {description}
              </VideoDescription>
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
    const {isUnliked} = this.state
    console.log('unliked: ', isUnliked)

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <VideoItemDetailsContainer
              data-testid="videoItemDetails"
              bgcolor={isDarkTheme ? '#0f0f0f' : ' #f9f9f9'}
            >
              {this.renderVideoPage()}
            </VideoItemDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
