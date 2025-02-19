import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },

    doneTodo: (state, { payload }) => {
      const tempTodos = state.map((todo) => {
        if (todo.id === payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
      return tempTodos;
    },

    deleteTodo: (state, { payload }) => {
      const tempTodos = state.filter((todo) => {
        return todo.id !== payload;
      });
      return tempTodos;
    },
  },
});

export const { addTodo, doneTodo, deleteTodo } = todos.actions;
export default todos.reducer;
