import { Box, Container } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import WelcomePage from "../components/WelcomePage"
import TodoList from "../components/TodoList"

function Body() {



  return (
    <Box >
      <Container>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default Body