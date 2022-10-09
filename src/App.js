import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'
import ThemeContext from './context/ThemeContext'
import SavedVideosPage from './components/SavedVideosPage'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {savedVideos: [], isDarkTheme: false}

  onSaveButtonClick = details => {
    const {savedVideos} = this.state
    const videoObject = savedVideos.find(eachItem => eachItem.id === details.id)

    if (videoObject !== undefined) {
      const updatedSavedVideos = savedVideos.filter(
        eachItem => eachItem.id !== details.id,
      )
      this.setState({savedVideos: updatedSavedVideos})
    } else {
      const updatedVideoList = [...savedVideos, details]
      this.setState({savedVideos: updatedVideoList})
    }
  }

  changeThemeClick = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {savedVideos, isDarkTheme, isSaved} = this.state

    return (
      <ThemeContext.Provider
        value={{
          savedVideos,
          isSaved,
          onSaveButtonClick: this.onSaveButtonClick,
          isDarkTheme,
          changeThemeClick: this.changeThemeClick,
        }}
      >
        <div className="bg-container">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <>
              <Header />
              <div className="main-view">
                <SideBar />
                <div className="content">
                  <Switch>
                    <ProtectedRoute exact path="/" component={Home} />
                    <ProtectedRoute
                      exact
                      path="/trending"
                      component={Trending}
                    />
                    <ProtectedRoute exact path="/gaming" component={Gaming} />
                    <ProtectedRoute
                      exact
                      path="/videos/:id"
                      component={VideoItemDetails}
                    />
                    <ProtectedRoute
                      exact
                      path="/saved-videos"
                      component={SavedVideosPage}
                    />
                    <Route path="/notfound" component={NotFound} />
                    <Redirect to="/notfound" />
                  </Switch>
                </div>
              </div>
            </>
          </Switch>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App
