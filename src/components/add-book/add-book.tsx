import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '@/redux/appSlice';
import { IBook } from '@/types';
import { BookForm } from '../book-form';

export default function AddBook() {
  const dispatch = useDispatch();
  const [isNewBookModalOpen, setIsNewBookModalOpen] = useState<boolean>(false);

  const handleNewBookModalOpen = () => setIsNewBookModalOpen(true);
  const handleNewBookModalClose = () => setIsNewBookModalOpen(false);

  const addNewBook = (book: IBook) => {
    dispatch(addBook({ ...book, id: uuidv4() }));
    handleNewBookModalClose();
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleNewBookModalOpen}
      >
        Add a new book
      </Button>

      {isNewBookModalOpen && (
        <BookForm
          onSubmit={addNewBook}
          isShown={isNewBookModalOpen}
          hideForm={handleNewBookModalClose}
        />
      )}
    </>
  );
}
