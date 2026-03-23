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
      const { index, updatedBookName } = action.payload;
      state.bookList[index] = updatedBookName;
    },
    deleteBookFromList: (state, action) => {
        const index = action.payload;
        state.bookList.splice(index, 1);
    },
  },
});

export const { addBookList, updateBookList, deleteBookFromList } =
  bookSlice.actions;
export default bookSlice.reducer;
