import PropTableContainer from './containers/PropTableContainer'
import { ThemeProvider } from '@emotion/react'

const theme = {
  colors: {
    primary: '#3F51B5',
    secondary: '#E91E63',
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PropTableContainer />
    </ThemeProvider>
  )
}

export default App
