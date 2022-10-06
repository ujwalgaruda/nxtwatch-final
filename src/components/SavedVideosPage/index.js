import {HiFire} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'

import {
  SavedHeaderContainer,
  SavedIconContainer,
  SavedHeading,
  SavedVideosGrp,
  StyledLink,
  SavedVideoListItem,
  SavedVideoThumbnail,
  SavedVideoDetailsContainer,
  VideoTitle,
  VideoChannel,
  ViewsAndDateContainer,
  ViewsDateText,
  FailureViewContainer,
  NoVideosHeader,
  NoVideosImage,
  NoVideosSubtitle,
  SavedVideosPageContainer,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const SavedVideosPage = () => (
  <ThemeContext.Consumer>
    {value => {
      const {savedVideos, isDarkTheme} = value
      const showNoSavedVideosView = savedVideos.length === 0

      const renderSavedVideosPage = () => (
        <>
          <SavedHeaderContainer bgcolor={isDarkTheme ? '#212121' : ' #f9f9f9'}>
            <SavedIconContainer bgcolor={isDarkTheme ? '#000000' : ' #e2e8f0'}>
              <HiFire size="30" />
            </SavedIconContainer>
            <SavedHeading color={isDarkTheme ? ' #f9f9f9' : '#231f20'}>
              Saved Videos
            </SavedHeading>
          </SavedHeaderContainer>
          <SavedVideosGrp>
            {savedVideos.map(eachItem => (
              <StyledLink to={`/videos/${eachItem.videoDetails.id}`}>
                <SavedVideoListItem key={eachItem.videoDetails.id}>
                  <SavedVideoThumbnail
                    src={eachItem.videoDetails.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <SavedVideoDetailsContainer>
                    <VideoTitle color={isDarkTheme ? ' #f9f9f9' : '#231f20'}>
                      {eachItem.videoDetails.title}
                    </VideoTitle>
                    <VideoChannel color={isDarkTheme ? ' #7e858e' : '#231f20'}>
                      {eachItem.videoDetails.channel.name}
                    </VideoChannel>
                    <ViewsAndDateContainer>
                      <ViewsDateText
                        color={isDarkTheme ? ' #7e858e' : '#231f20'}
                      >
                        {eachItem.videoDetails.viewCount}
                      </ViewsDateText>
                      <BsDot />
                      <ViewsDateText
                        color={isDarkTheme ? ' #7e858e' : '#231f20'}
                      >
                        {eachItem.videoDetails.publishedAt}
                      </ViewsDateText>
                    </ViewsAndDateContainer>
                  </SavedVideoDetailsContainer>
                </SavedVideoListItem>
              </StyledLink>
            ))}
          </SavedVideosGrp>
        </>
      )

      const renderNoVideosPage = () => (
        <FailureViewContainer>
          <NoVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosHeader color={isDarkTheme ? ' #f9f9f9' : '#231f20'}>
            No saved videos found
          </NoVideosHeader>
          <NoVideosSubtitle color={isDarkTheme ? ' #f9f9f9' : '#231f20'}>
            You can save your videos while watching them
          </NoVideosSubtitle>
        </FailureViewContainer>
      )

      return (
        <SavedVideosPageContainer
          data-testid="savedVideos"
          bgcolor={isDarkTheme ? '#0f0f0f' : ' #f9f9f9'}
        >
          {showNoSavedVideosView
            ? renderNoVideosPage()
            : renderSavedVideosPage()}
        </SavedVideosPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideosPage
