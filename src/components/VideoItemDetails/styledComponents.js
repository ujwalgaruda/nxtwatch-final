import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgcolor};
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
export const TextContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`

export const VideoTitle = styled.p`
  font-family: 'roboto';
  font-size: 24px;
  font-weight: 400;
  width: 90%;
  color: ${props => props.color};
`

export const ViewsAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  width: 250px;
  color: ${props => props.color};
`

export const ViewsDateText = styled.p`
  font-family: 'roboto';
  font-size: 18px;
`
export const IconsContainer = styled.div`
  display: flex;

  align-items: center;
  margin-top: 0;
  gap: 20px;
`

export const IconButtons = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const IconText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.isSaved};
  color: ${props => props.isUnliked};
  color: ${props => props.isLiked};
`
export const LikeIcon = styled(BiLike)`
  size: 20px;
`
export const UnlikeButton = styled(BiDislike)`
  size: 20px;
`
export const SavedIcon = styled(BiListPlus)`
  size: 20px;
`
export const Line = styled.hr`
  width: 100%;
  color: #475569;
  border-width: 1px;
`
export const ProfileAndTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  gap: 10px;
  margin-top: 30px;
`

export const ProfileImage = styled.img`
  width: 50px;
  border-radius: 50px;
  border: none;
  margin-right: 20px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const ChannelName = styled.p`
  font-family: 'roboto';
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.color};
`
export const SubscribersText = styled.p`
  font-family: 'roboto';
  font-size: 18px;
  color: ${props => props.color};
`
export const VideoDescription = styled.p`
  font-family: 'roboto';
  color: #475569;
  font-size: 18px;
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
