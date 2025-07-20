import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    { id: 1, text: "Learn Redux Toolkit", completed: false },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todo.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todo.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todo.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
