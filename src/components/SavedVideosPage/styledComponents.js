import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideosPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgcolor};
`

export const SavedHeaderContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${props => props.bgcolor};
`
export const SavedIconContainer = styled.div`
  width: 50px;
  height: 50px;
  color: #ff0000;
  background-color: ${props => props.bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 75px;
`
export const SavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
  color: ${props => props.color};
`

export const SavedVideosGrp = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding-left: 20px;
  padding-right: 20px;
`

export const SavedVideoListItem = styled.li`
  display: flex;
  list-style-type: none;
  width: 100%;
  padding-left: 0;
  align-items: center;
`

export const SavedVideoThumbnail = styled.img`
  width: 300px;
`

export const SavedVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-left: 10px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.color};
`

export const VideoChannel = styled.p`
  font-family: 'roboto';
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.color};
`
export const ViewsAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
`

export const ViewsDateText = styled.p`
  font-family: 'roboto';
  font-size: 14px;
  color: ${props => props.color};
`
export const FailureViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosImage = styled.img`
  width: 30%;
`
export const NoVideosHeader = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.color};
`
export const NoVideosSubtitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  text-align: center;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  width: 100%;
`
