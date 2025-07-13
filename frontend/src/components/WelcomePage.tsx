import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

function WelcomePage() {

  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"40px"
      }}
    >
      <Box
        sx={{
          textAlign: "center", 
        }}
      >
        <h2>Welcome To Todo App!</h2>
        <Button onClick={()=>navigate("/todolist")}
          variant="contained"
          color="warning"
          sx={{ mt: 2 }} 
        >
          Go To Todo List
        </Button>
      </Box>
    </Box>
  )
}

export default WelcomePage