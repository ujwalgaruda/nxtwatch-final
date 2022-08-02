import {Switch, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import SideBar from './components/SideBar'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
    <ProtectedRoute path="/" component={Home} />
  </Switch>
)

export default App
