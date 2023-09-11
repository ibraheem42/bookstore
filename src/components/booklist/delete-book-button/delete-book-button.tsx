import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { removeBook } from '@/redux/appSlice';
import { IDeleteBookButtonProps } from './types';

export default function DeleteBookButton({ id }: IDeleteBookButtonProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(id));
  };

  return (
    <Button
      variant="danger"
      onClick={handleDelete}
    >
      Delete
    </Button>
  );
}
