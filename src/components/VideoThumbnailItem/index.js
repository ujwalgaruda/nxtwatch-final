import {BsDot} from 'react-icons/bs'
import {
  ThumbnailContainer,
  ThumbnailImage,
  ProfileAndTitleContainer,
  ProfileImage,
  TitleContainer,
  VideoTitle,
  ChannelName,
  ViewsAndDateContainer,
  ViewsDateText,
} from './styledComponents'

const VideoThumbnailItem = props => {
  const {details, activeVideoSelected} = props
  const {thumbnailUrl, id, title, channel, viewCount, publishedAt} = details
  const {name, profileImageUrl} = channel

  const onVideoClicked = () => {
    activeVideoSelected(id)
  }

  return (
    <ThumbnailContainer onClick={onVideoClicked}>
      <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
      <ProfileAndTitleContainer>
        <ProfileImage src={profileImageUrl} alt="channel logo" />
        <TitleContainer>
          <VideoTitle>{title}</VideoTitle>
          <ChannelName>{name}</ChannelName>
          <ViewsAndDateContainer>
            <ViewsDateText>{viewCount}</ViewsDateText>
            <BsDot />
            <ViewsDateText>{publishedAt}</ViewsDateText>
          </ViewsAndDateContainer>
        </TitleContainer>
      </ProfileAndTitleContainer>
    </ThumbnailContainer>
  )
}

export default VideoThumbnailItem
