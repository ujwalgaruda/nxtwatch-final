import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ThumbnailContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 350px;
  list-style-type: none;
  padding-left: 0;
  height: 400px;
  flex-grow: 1;
`
export const ThumbnailImage = styled.img`
  width: 100%;
`

export const ProfileAndTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
  gap: 10px;
`

export const ProfileImage = styled.img`
  width: 50px;
  border-radius: 50px;
  border: none;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const VideoTitle = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  margin-top: 0;
  font-weight: 400;
`

export const ChannelName = styled.p`
  font-family: 'roboto';
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
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
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`
