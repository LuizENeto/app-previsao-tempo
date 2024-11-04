import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/css/globalStyles/index.tsx'
import { darkTheme, lightTheme } from './components/css/theme/index.ts'
import WeatherCard from './components/weatherCard/index.tsx'
import { useTheme } from './contexts/theme-context.tsx'

function App() {
  const { handleTheme, theme } = useTheme()

  return (
    <>
      <ThemeProvider theme={theme === 'dark'
        ? darkTheme
        : lightTheme}
      >
        <div>
          <button onClick={handleTheme}>Mudar Tema</button>
          <GlobalStyle />
          <WeatherCard />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
