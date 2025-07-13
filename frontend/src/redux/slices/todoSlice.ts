import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


export interface TodoType {
    todoId: number;
    task: string;
    date: string;
}

export interface TodoState {
    todoList: Array<TodoType> | null
    loading: boolean
    message: string

}

const initialState: TodoState = {
    todoList: null,
    loading: false,
    message: ""
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

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllTodos.fulfilled, (state, action) => {
            state.todoList = action.payload
            state.loading = false
            state.message = "Request successful."
        })
        builder.addCase(getAllTodos.pending, (state) => {
            state.loading = true
            state.message = "Waiting for the todos."
        })
        builder.addCase(getAllTodos.rejected, (state) => {
            state.loading = false
            state.message = "Request rejected."
        })
        builder.addCase(deleteTodoById.fulfilled, (state,action) => {
            state.todoList = state.todoList?.filter(todo => todo.todoId !== action.payload.todoId) || [];
            state.loading = false
            state.message = "Todo deleted."
        })
        builder.addCase(deleteTodoById.pending, (state) => {
            state.loading = true
            state.message = "Todo deleting process continues."
        })
        builder.addCase(deleteTodoById.rejected, (state) => {
            state.loading = false
            state.message = "Delete request rejected"
        })
    },
})

export const { } = todoSlice.actions

export default todoSlice.reducer