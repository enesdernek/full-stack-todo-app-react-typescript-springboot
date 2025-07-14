import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


export interface TodoType {
    todoId?: number;
    task: string;
    date?: string;
}

export interface TodoState {
    todoList: Array<TodoType> | null
    loading: boolean
    message: string,
    messageDate: number | null;

}

const initialState: TodoState = {
    todoList: null,
    loading: false,
    message: "",
    messageDate: null,
}




export const getAllTodos = createAsyncThunk("todolist/getAll",
    async () => {
        const response = await axios.get("http://localhost:8080/api/todo/get-all-by-date-desc")
        return response.data
    }
)

export const deleteTodoById = createAsyncThunk("todolist/deleteById",
    async (todoId: number) => {
        const response = await axios.delete("http://localhost:8080/api/todo/" + todoId)
        return response.data
    }
)

export const createTodo = createAsyncThunk("todolist/add",
    async (todo: TodoType) => {
        const response = await axios.post("http://localhost:8080/api/todo", todo)
        return response.data
    }
)

export const deleteAllTodos = createAsyncThunk("todolist/deleteAllTodos",
    async () => {
        await axios.delete("http://localhost:8080/api/todo/delete-all")
    }
)

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllTodos.fulfilled, (state, action) => {
            state.todoList = action.payload
            state.loading = false
        })
        builder.addCase(getAllTodos.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllTodos.rejected, (state) => {
            state.loading = false
            state.message = "Request rejected."
            state.messageDate = Date.now();
        })
        builder.addCase(deleteTodoById.fulfilled, (state, action) => {
            state.todoList = state.todoList?.filter(todo => todo.todoId !== action.payload.todoId) || [];
            state.loading = false
            state.message = "Todo deleted."
            state.messageDate = Date.now();
        })
        builder.addCase(deleteTodoById.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteTodoById.rejected, (state) => {
            state.loading = false
            state.message = "Request rejected."
            state.messageDate = Date.now();
        })
        builder.addCase(createTodo.fulfilled, (state, action) => {
            if (state.todoList) {
                state.todoList.unshift(action.payload);
            } else {
                state.todoList = [action.payload];
            }
            state.loading = false;
            state.message = "Todo created."
            state.messageDate = Date.now();
        })
        builder.addCase(createTodo.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(createTodo.rejected, (state, action) => {
            state.loading = false;
            state.message = "Request rejected."
            state.messageDate = Date.now();
        })
        builder.addCase(deleteAllTodos.fulfilled, (state) => {
            state.todoList = []
            state.loading = false
            state.message = "All Todos Deleted"
            state.messageDate = Date.now();
        })
        builder.addCase(deleteAllTodos.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteAllTodos.rejected, (state) => {
            state.loading = false
            state.message = "Request rejected."
            state.messageDate = Date.now();
        })
    },
})


export const { } = todoSlice.actions

export default todoSlice.reducer