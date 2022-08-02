import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {RiCloseLine} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import VideoThumbnailItem from '../VideoThumbnailItem'
import SideBar from '../SideBar'
import {
  HomeResponsiveContainer,
  HomeWrapperContainer,
  LogoAndCloseContainer,
  BannerLogo,
  BannerContainer,
  BannerButton,
  BannerHeader,
  CloseButton,
  SearchContainer,
  SearchButton,
  SearchBox,
  HomePageContainer,
  HomeVideosGroup,
  NoVideosHeader,
  NoVideosImage,
  NoVideosSubtitle,
  HomeVideosContainer,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchText: '',
    showBanner: true,
    videosData: [],
    apiStatus: apiStatusConstants.initial,
    activeVideoId: '',
    activeSideItem: 'Home',
  }

  componentDidMount() {
    this.getHomePageVideos()
  }

  onClosedBanner = () => {
    this.setState({showBanner: false})
  }

  onLogoutClicked = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onSearchTyped = event => {
    this.setState({searchText: event.target.value})
  }

  onSearchClicked = () => {
    this.getHomePageVideos()
  }

  activeVideoSelected = id => {
    this.setState({activeVideoId: id})
  }

  onchangeSideOptionChange = name => {
    this.setState({activeSideItem: name})
  }

  getHomePageVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const {searchText} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        total: fetchedData.total,
        videos: fetchedData.videos.map(eachItem => ({
          id: eachItem.id,
          title: eachItem.title,
          thumbnailUrl: eachItem.thumbnail_url,
          channel: {
            name: eachItem.channel.name,
            profileImageUrl: eachItem.channel.profile_image_url,
          },
          viewCount: eachItem.view_count,
          publishedAt: eachItem.published_at,
        })),
      }
      this.setState({
        videosData: updatedData.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderBanner = () => (
    <BannerContainer data-testid="banner">
      <LogoAndCloseContainer>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CloseButton data-testid="close" onClick={this.onClosedBanner}>
          <RiCloseLine />
        </CloseButton>
      </LogoAndCloseContainer>
      <BannerHeader>Buy Nxt Watch Premium prepaid plans with UPI </BannerHeader>
      <BannerButton>GET IT NOW</BannerButton>
    </BannerContainer>
  )

  renderHomePageVideos = () => {
    const {videosData} = this.state
    const showVideosList = videosData.length > 0

    return showVideosList ? (
      <HomeVideosContainer>
        <HomeVideosGroup>
          {videosData.map(eachItem => (
            <VideoThumbnailItem
              key={eachItem.id}
              details={eachItem}
              activeVideoSelected={this.activeVideoSelected}
            />
          ))}
        </HomeVideosGroup>
      </HomeVideosContainer>
    ) : (
      <HomeVideosContainer>
        <NoVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoVideosHeader>No Search Results Found</NoVideosHeader>
        <NoVideosSubtitle>
          Try different key words or remove search filter
        </NoVideosSubtitle>
        <RetryButton onClick={this.onRetryButtonClicked} />
      </HomeVideosContainer>
    )
  }

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomePageVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {showBanner, searchText, activeSideItem} = this.state
    console.log('Render called')

    return (
      <>
        <Header onLogoutClicked={this.onLogoutClicked} />
        <HomeResponsiveContainer>
          <SideBar
            activeSideItem={activeSideItem}
            onchangeSideOptionChange={this.onchangeSideOptionChange}
          />
          <HomeWrapperContainer>
            {showBanner && this.renderBanner()}
            <HomePageContainer data-testid="home">
              <SearchContainer>
                <SearchBox
                  value={searchText}
                  placeholder="Search"
                  onChange={this.onSearchTyped}
                  type="search"
                />
                <SearchButton
                  data-testid="searchButton"
                  onClick={this.onSearchClicked}
                >
                  <AiOutlineSearch color="#64748b" />
                </SearchButton>
              </SearchContainer>
              {this.renderAllVideos()}
            </HomePageContainer>
          </HomeWrapperContainer>
        </HomeResponsiveContainer>
      </>
    )
  }
}

export default Home
