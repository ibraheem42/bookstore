import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { selectBooks, updateBook } from '@/redux/appSlice';
import { IBook } from '@/types';
import { BookForm } from '../book-form';
import DeleteBookButton from './delete-book-button/delete-book-button';

import styles from './styles.module.css';

export default function Booklist() {
  const dispatch = useDispatch();
  const booklist = useSelector(selectBooks);
  const [selectedBook, setSelectedBook] = useState<null | IBook>(null);

  const onUpdateBook = (book: IBook) => {
    if (selectedBook) {
      dispatch(updateBook({ ...book, id: selectedBook.id }));
      setSelectedBook(null);
    }
  };

  return (
    <>
      <Table
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {booklist.map((book, index) => (
            <tr key={index}>
              <td
                className={styles['clickable']}
                onClick={() => setSelectedBook(book)}
              >
                {index + 1}
              </td>
              <td
                className={styles['clickable']}
                onClick={() => setSelectedBook(book)}
              >
                {book.title}
              </td>
              <td>{`$${book.price}`}</td>
              <td>{book.category}</td>
              <td>
                <DeleteBookButton id={book.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {booklist.length > 0 && selectedBook && (
        <BookForm
          onSubmit={onUpdateBook}
          isShown={selectedBook !== null}
          hideForm={() => setSelectedBook(null)}
          defaultBookValues={selectedBook}
          isUpdating
        />
      )}
    </>
  );
}
