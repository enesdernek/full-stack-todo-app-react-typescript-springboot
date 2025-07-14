import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';
import { Button } from '@mui/material';
import { useState } from 'react';
import { createTodo, type TodoType } from '../redux/slices/todoSlice';


function TodoAddInput() {

    const dispatch = useDispatch<AppDispatch>()
    const theme = useSelector((state: RootState) => state.app.theme)
    const backgroundColor = theme === "dark" ? "#eeeeee" : "#FAFAFA"
    const color = theme === "light" ? "#121212" : "#121212"

    const [task, setTask] = useState<string>("")

    const addTodo = () => {
        if(task=="" || task ==null){
           return
        }
        const addedTodo: TodoType = {
            task: task,
            date: new Date().toISOString()
        }
        dispatch(createTodo(addedTodo))
        setTask("")
    }

    return (
        <FormControl sx={{ marginTop: "20px", width: "100%" }} variant="standard">
            <Input
                id="add"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                sx={{
                    backgroundColor,
                    color,
                    padding: "10px",
                    '& input': {
                        backgroundColor,
                        color,
                    },
                }}
                startAdornment={
                    <InputAdornment position="start">
                        <AddTaskIcon sx={{ color }} />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <Button onClick={addTodo}
                            sx={{ height: '30px', minWidth: '50px', fontSize: '0.8rem' }}
                            variant="contained"
                            color="success"
                        >
                            Add
                        </Button>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}

export default TodoAddInput