import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../redux/store"
import { useEffect } from "react"
import { getAllTodos } from "../redux/slices/todoSlice"
import List from '@mui/material/List';
import Todo from "./Todo";
import TodoAddInput from "./TodoAddInput";



function TodoList() {

  const dispatch = useDispatch<AppDispatch>()
  const todoList = useSelector((state: RootState) => state.todo.todoList)
  const loading = useSelector((state: RootState) => state.todo.loading)
  const message = useSelector((state: RootState) => state.todo.message)

  const theme = useSelector((state: RootState) => state.app.theme)
  const backgroundColor = theme === "dark" ? "#121212" : "#FAFAFA"
  const color = theme === "light" ? "#121212" : "#FAFAFA"

  useEffect(() => {
    dispatch(getAllTodos())
  }, [])

  return (
    <>
    <TodoAddInput/>
      <List sx={{ width: '100%', backgroundColor, color, marginTop: "20px", border: "1px solid gray" }}>
        {
          todoList && todoList.map((todo) => (

            <Todo key={todo.todoId} todo={todo} />

          ))

        }


      </List>
    </>
  )
}

export default TodoList