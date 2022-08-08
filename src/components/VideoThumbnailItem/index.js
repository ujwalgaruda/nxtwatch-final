import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

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
  StyledLink,
} from './styledComponents'

const VideoThumbnailItem = props => {
  const {details} = props
  const {thumbnailUrl, id, title, channel, viewCount, publishedAt} = details
  const {name, profileImageUrl} = channel

  return (
    <ThumbnailContainer>
      <StyledLink to={`/videos/${id}`}>
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
      </StyledLink>
    </ThumbnailContainer>
  )
}

export default VideoThumbnailItem
