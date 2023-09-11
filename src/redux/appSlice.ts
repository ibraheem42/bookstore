import { IBook } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './store';
import { IAppState } from './types';

const initialState: IAppState = {
  books: [
    {
      id: 'id-1',
      title: 'The Funny Book',
      category: 'Comedy',
      price: 100,
      description: 'This book is really funny',
    },
  ],
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

      if (state.books.find((book) => book.id === bookId)) {
        state.books = state.books.filter((book) => book.id !== bookId);
      }
    },
    updateBook(state: IAppState, action: PayloadAction<IBook>) {
      const updatedBook = action.payload;
      const book = state.books.find((book) => book.id === updatedBook.id);

      if (book) {
        state.books = [...state.books.filter((book) => book.id !== updatedBook.id), updatedBook];
      }
    },
  },
});

export const { addBook, removeBook, updateBook } = appSlice.actions;

export const selectBooks = (state: AppState) => state.reducer.books;

export default appSlice.reducer;
