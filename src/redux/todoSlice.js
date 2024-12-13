import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

// Fetch tasks from server
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  return response.json();
});

// Add a task to the server
export const addTodoToServer = createAsyncThunk('todos/addTodoToServer', async (todo) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  return response.json();
});

// Delete a task from the server
export const deleteTodoFromServer = createAsyncThunk('todos/deleteTodoFromServer', async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
  });
  return id; // Возвращаем ID для удаления из состояния
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: loadFromLocalStorage('todos') || [],
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      saveToLocalStorage('todos', state);
    },
    addTodo: (state, action) => {
      state.unshift(action.payload);
      saveToLocalStorage('todos', state);
    },
    deleteTodo: (state, action) => {
      const updatedState = state.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage('todos', updatedState);
      return updatedState;
    },
    editTodo: (state, action) => {
      const { id, updatedTitle } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = updatedTitle;
      }
      saveToLocalStorage('todos', state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        saveToLocalStorage('todos', action.payload);
        return action.payload;
      })
      .addCase(addTodoToServer.fulfilled, (state, action) => {
        state.unshift(action.payload);
        saveToLocalStorage('todos', state);
      })
      .addCase(deleteTodoFromServer.fulfilled, (state, action) => {
        const updatedState = state.filter((todo) => todo.id !== action.payload);
        saveToLocalStorage('todos', updatedState);
        return updatedState;
      });
  },
});

export const { toggleTodo, addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
