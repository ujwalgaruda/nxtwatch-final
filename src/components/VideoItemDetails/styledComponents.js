import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
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

export const VideoTitle = styled.h1`
  font-family: 'roboto';
  font-size: 24px;
  font-weight: 400;
  width: 90%;
`

export const ViewsAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  width: 250px;
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
  color: #475569;
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
`
export const SubscribersText = styled.p`
  font-family: 'roboto';
  color: #475569;
  font-size: 18px;
`
export const VideoDescription = styled.p`
  font-family: 'roboto';
  color: #475569;
  font-size: 18px;
`
