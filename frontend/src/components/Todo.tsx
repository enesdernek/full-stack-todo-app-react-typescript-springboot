import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '@mui/material/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';
import { deleteTodoById, type TodoType } from '../redux/slices/todoSlice.ts';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



interface TodoProps {
  todo: TodoType;
}

function Todo({ todo }: TodoProps) {

  const dispatch = useDispatch<AppDispatch>()
  const theme = useSelector((state: RootState) => state.app.theme)
  const color = theme === "light" ? "#121212" : "#FAFAFA"

  const deleteTodo = ()=>{
      dispatch(deleteTodoById(todo.todoId))
  }

  return (
    <ListItem>
      <>
            <ArrowForwardIosIcon sx={{marginRight:"10px"}}/>
        <ListItemText primary={todo.task}
          secondary={todo.date}
          primaryTypographyProps={{ sx: { color } }}
          secondaryTypographyProps={{ sx: { color } }} />
      </>
      <IconButton onClick={deleteTodo}>
        <DeleteIcon sx={{ color: "red" }} />
      </IconButton>
    </ListItem>

  )
}

export default Todo