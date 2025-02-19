import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../redux/todoSlice';
const store = configureStore({
  reducer: { todos: todosSlice },
});

export default store;
