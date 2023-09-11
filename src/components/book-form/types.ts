import { IBook } from '@/types';

export interface IBookFormProps {
  onSubmit: (book: IBook) => void;
  isShown: boolean;
  hideForm: () => void;
  defaultBookValues?: IBook;
  isUpdating?: boolean;
}
