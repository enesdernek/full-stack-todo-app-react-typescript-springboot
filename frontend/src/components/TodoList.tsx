import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../redux/store"
import React, { useEffect, useRef } from "react"
import { deleteAllTodos, getAllTodos } from "../redux/slices/todoSlice"
import List from '@mui/material/List';
import Todo from "./Todo";
import TodoAddInput from "./TodoAddInput";
import { Alert, Box, Button, CircularProgress } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import ReportIcon from '@mui/icons-material/Report';
import Snackbar from '@mui/material/Snackbar';




function TodoList() {

  const dispatch = useDispatch<AppDispatch>()
  const todoList = useSelector((state: RootState) => state.todo.todoList)
  const loading = useSelector((state: RootState) => state.todo.loading)
  const message = useSelector((state: RootState) => state.todo.message)
  const messageDate = useSelector((state: RootState) => state.todo.messageDate)

  const theme = useSelector((state: RootState) => state.app.theme)
  const backgroundColor = theme === "dark" ? "#121212" : "#FAFAFA"
  const color = theme === "light" ? "#121212" : "#FAFAFA"

  const initialMessageDate = useRef<number | null>(null);

  useEffect(() => {
    // İlk değeri bir kere al ve sonrakileri tetikle
    if (initialMessageDate.current === null) {
      initialMessageDate.current = messageDate;
      return;
    }

    if (messageDate !== initialMessageDate.current) {
      handleClickSnackbar();
    }
  }, [messageDate]);

  useEffect(() => {
    dispatch(getAllTodos())
  }, [])


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteAll = () => {
    dispatch(deleteAllTodos())
    handleClose()
  }


  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (
  ) => {
    setOpenSnackbar(false);
  };



  return (
    <Box>
      <TodoAddInput />

      {
        loading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '200px',
            }}
          >
            <CircularProgress />
          </Box>
        ) : todoList && todoList.length > 0 ? (
          <>
            <List
              sx={{
                width: '100%',
                backgroundColor,
                color,
                marginTop: "20px",
                border: "1px solid gray",
              }}
            >
              {todoList.map((todo) => (
                <Todo key={todo.todoId} todo={todo} />
              ))}
            </List>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "20px",
              }}
            >
              <Button
                onClick={handleClickOpen}
                sx={{ backgroundColor: "red" }}
                variant="contained"
              >
                Delete all
              </Button>
            </Box>
          </>
        ) : (
          // todoList boş, fakat mesaj 'Request rejected' değilse alert göster
          message !== "Request rejected." && (
            <Alert
              sx={{ marginTop: "20px" }}
              icon={<ReportIcon />}
              color="warning"
              variant="filled"
            >
              Your todo list is empty.
            </Alert>
          )
        )
      }



      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want to delete all todos ?"}
          </DialogTitle>

          <DialogActions>
            <Button color="error" variant="contained" onClick={handleClose}>Disagree</Button>
            <Button color="success" variant="contained" onClick={deleteAll} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={message}
      />

    </Box>
  )
}

export default TodoList