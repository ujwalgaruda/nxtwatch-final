import React from 'react'

const ThemeContext = React.createContext({
  savedVideos: [],
  onSaveButtonClick: () => {},
  isDarkTheme: false,
  changeThemeClick: () => {},
  isSaved: false,
})

export default ThemeContext
