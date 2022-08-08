import styled from 'styled-components'

export const TrendingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const TrendingHeaderContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
`
export const TrendingIconContainer = styled.div`
  width: 50px;
  height: 50px;
  color: #ff0000;
  background-color: #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 75px;
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: #231f20;
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
  color: #231f20;
`

export const VideoChannel = styled.p`
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
  color: #231f20;
`
export const NoVideosSubtitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #231f20;
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
