import { IBook } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_BOOKS } from './constants';
import { isBookFound } from './helpers';
import { AppState } from './store';
import { IAppState } from './types';

const initialState: IAppState = {
  books: DEFAULT_BOOKS,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addBook(state: IAppState, action: PayloadAction<IBook>) {
      state.books = [...state.books, action.payload];
    },
    removeBook(state: IAppState, action: PayloadAction<string>) {
      const bookId = action.payload;

      if (isBookFound(state.books, bookId)) {
        state.books = state.books.filter((book) => book.id !== bookId);
      }
    },
    updateBook(state: IAppState, action: PayloadAction<IBook>) {
      const updatedBook = action.payload;

      if (isBookFound(state.books, updatedBook.id)) {
        state.books = [...state.books.filter((book) => book.id !== updatedBook.id), updatedBook];
      }
    },
  },
});

export const { addBook, removeBook, updateBook } = appSlice.actions;

export const selectBooks = (state: AppState) => state.reducer.books;

export default appSlice.reducer;
