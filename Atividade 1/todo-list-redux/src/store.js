import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice'; // Ajuste do caminho de importação

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
