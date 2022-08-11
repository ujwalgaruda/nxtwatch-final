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
  StyledLink,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const VideoThumbnailItem = props => {
  const {details} = props
  const {thumbnailUrl, id, title, channel, viewCount, publishedAt} = details
  const {name, profileImageUrl} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <ThumbnailContainer>
            <StyledLink to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <ProfileAndTitleContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <TitleContainer>
                  <VideoTitle color={isDarkTheme ? ' #f9f9f9' : '#231f20'}>
                    {title}
                  </VideoTitle>
                  <ChannelName color={isDarkTheme ? ' #7e858e' : '#231f20'}>
                    {name}
                  </ChannelName>
                  <ViewsAndDateContainer>
                    <ViewsDateText color={isDarkTheme ? ' #7e858e' : '#231f20'}>
                      {viewCount}
                    </ViewsDateText>
                    <BsDot />
                    <ViewsDateText color={isDarkTheme ? ' #7e858e' : '#231f20'}>
                      {publishedAt}
                    </ViewsDateText>
                  </ViewsAndDateContainer>
                </TitleContainer>
              </ProfileAndTitleContainer>
            </StyledLink>
          </ThumbnailContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoThumbnailItem
