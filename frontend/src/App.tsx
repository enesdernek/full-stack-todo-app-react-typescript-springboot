
import { useSelector } from 'react-redux'
import './App.css'
import Body from './layout/Body'
import Header from './layout/Header'
import type { RootState } from './redux/store'
import { Box } from '@mui/material'
import { useEffect } from 'react'

function App() {

  const theme = useSelector((state: RootState) => state.app.theme)
  const backgroundColor = theme === "dark" ? "#121212" : "#FAFAFA"
  const color = theme === "light" ? "#121212" : "#FAFAFA"

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor
    document.body.style.color = color

    document.documentElement.style.backgroundColor = backgroundColor
    document.documentElement.style.color = color

    const root = document.getElementById('root')
    if (root) {
      root.style.backgroundColor = backgroundColor
      root.style.color = color
    }
  }, [backgroundColor, color])

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <Body />
    </Box>
  )
}

export default App
