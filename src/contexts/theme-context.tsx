import React, { useContext } from 'react'

interface Context {
  handleTheme: () => void
  theme: string
}

const ThemeContext = React.createContext<Context>({
  theme: 'light',
  handleTheme: () => {},
})

interface ThemeContextProps {
  children: React.ReactNode
}

const ThemeProvider = (props: ThemeContextProps) => {
  const [theme, setTheme] = React.useState('light')
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ handleTheme: toggleTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useContext must be used within an NotificationProvider.')
  }
  return context
}

export { ThemeProvider, useTheme }
