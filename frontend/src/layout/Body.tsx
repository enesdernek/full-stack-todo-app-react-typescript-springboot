import { Box, Container } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import WelcomePage from "../components/WelcomePage"

function Body() {



  return (
    <Box >
      <Container>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default Body