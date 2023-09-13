import { IBook } from '@/types';

export const isBookFound = (bookList: Array<IBook>, bookId: string) => {
  if (bookList.find((book: IBook) => book.id === bookId)) {
    return true;
  }
  return false;
};
