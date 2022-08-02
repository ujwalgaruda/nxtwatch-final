import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  BgContainer,
  ResponsiveContainer,
  LogoImage,
  LoginForm,
  Label,
  Input,
  CheckBoxInput,
  CheckBoxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showpassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onUsernameType = event => {
    this.setState({username: event.target.value})
  }

  onPasswordType = event => {
    this.setState({password: event.target.value})
  }

  onShowPasswordChecked = event => {
    console.log(event)
    if (event.target.checked === true) {
      this.setState({showpassword: true})
    } else {
      this.setState({showpassword: false})
    }
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = error => {
    this.setState({showErrorMsg: true, errorMsg: error})
  }

  onLoginSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const jwtToken = data.jwt_token
    const error = data.error_msg
    if (response.ok === true) {
      this.onLoginSuccess(jwtToken)
    } else {
      this.onLoginFailure(error)
    }
  }

  render() {
    const {
      username,
      password,
      showpassword,
      showErrorMsg,
      errorMsg,
    } = this.state

    return (
      <BgContainer>
        <ResponsiveContainer>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LoginForm onSubmit={this.onLoginSubmit}>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              value={username}
              placeholder="Username"
              id="username"
              onChange={this.onUsernameType}
            />

            <Label htmlFor="password">PASSWORD</Label>
            <Input
              value={password}
              placeholder="Password"
              id="password"
              type={showpassword ? 'text' : 'password'}
              onChange={this.onPasswordType}
            />

            <CheckBoxLabel htmlFor="showpassword">
              <CheckBoxInput
                value={showpassword}
                type="checkbox"
                id="showpassword"
                onChange={this.onShowPasswordChecked}
              />
              Show Password
            </CheckBoxLabel>
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </LoginForm>
        </ResponsiveContainer>
      </BgContainer>
    )
  }
}

export default LoginPage
