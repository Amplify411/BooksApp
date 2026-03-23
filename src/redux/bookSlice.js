import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBookList: (state, action) => {
      state.bookList = action.payload;
    },
    updateBookList: (state, action) => {
      state.bookList = action.payload;
    },
  },
});

export const { addBookList, updateBookList } = bookSlice.actions;
export default bookSlice.reducer;
