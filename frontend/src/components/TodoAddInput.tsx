import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { Button } from '@mui/material';

function TodoAddInput() {

    const theme = useSelector((state: RootState) => state.app.theme)
    const backgroundColor = theme === "dark" ? "#eeeeee" : "#FAFAFA"
    const color = theme === "light" ? "#121212" : "#121212"

    return (
        <FormControl sx={{ marginTop: "20px", width: "100%" }} variant="standard">
            <Input
                id="add"
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
                        <Button
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