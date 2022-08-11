import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgcolor};
`
export const TrendingHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  background-color: ${props => props.bgcolor};
  padding-bottom: 15px;
`
export const TrendingIconContainer = styled.div`
  width: 50px;
  height: 50px;
  color: #ff0000;
  background-color: ${props => props.bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 75px;
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.color};
  margin-left: 20px;
`
export const TrendingVideosGrp = styled.ul`
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
export const TrendingVideoListItem = styled.li`
  display: flex;
  list-style-type: none;
  width: 100%;
  flex-direction: row;

  align-items: center;
`
export const TrendingVideoThumbnail = styled.img`
  width: 300px;
`
export const TrendingVideoDetailsContainer = styled.div`
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
export const RetryButton = styled.button`
  border-radius: 10px;
  background-color: #4f46e5;
  border: none;
  outline: none;
  font-family: 'roboto';
  font-size: 18px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  color: #ffffff;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  width: 100%;
  display: flex;
  align-items: flex-start;
`
