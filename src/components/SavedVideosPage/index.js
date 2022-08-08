import {HiFire} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'

import {
  SavedHeaderContainer,
  SavedIconContainer,
  SavedHeading,
  SavedVideosGrp,
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
      const {savedVideos} = value
      const showNoSavedVideosView = savedVideos.length === 0

      const renderSavedVideosPage = () => (
        <>
          <SavedHeaderContainer>
            <SavedIconContainer>
              <HiFire size="30" />
            </SavedIconContainer>
            <SavedHeading>Saved Videos</SavedHeading>
          </SavedHeaderContainer>
          <SavedVideosGrp>
            {savedVideos.map(eachItem => (
              <SavedVideoListItem key={eachItem.id}>
                <SavedVideoThumbnail
                  src={eachItem.thumbnailUrl}
                  alt="video thumbnail"
                />
                <SavedVideoDetailsContainer>
                  <VideoTitle>{eachItem.title}</VideoTitle>
                  <VideoChannel>{eachItem.channel.name}</VideoChannel>
                  <ViewsAndDateContainer>
                    <ViewsDateText>{eachItem.viewCount}</ViewsDateText>
                    <BsDot />
                    <ViewsDateText>{eachItem.publishedAt}</ViewsDateText>
                  </ViewsAndDateContainer>
                </SavedVideoDetailsContainer>
              </SavedVideoListItem>
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
          <NoVideosHeader>No saved videos found</NoVideosHeader>
          <NoVideosSubtitle>
            You can save your videos while watching them
          </NoVideosSubtitle>
        </FailureViewContainer>
      )

      return (
        <SavedVideosPageContainer>
          {showNoSavedVideosView
            ? renderNoVideosPage()
            : renderSavedVideosPage()}
        </SavedVideosPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideosPage
