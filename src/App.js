import {Switch, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Header />
    <div className="main-view">
      <SideBar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/gaming" component={Gaming} />
      </Switch>
    </div>
  </>
)

export default App
