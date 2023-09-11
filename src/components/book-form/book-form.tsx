import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { IBook } from '@/types';
import { IBookFormProps } from './types';

export default function BookForm({
  onSubmit,
  isShown,
  hideForm,
  defaultBookValues,
  isUpdating = false,
}: IBookFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBook>();

  return (
    <>
      <Modal
        show={isShown}
        onHide={hideForm}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                defaultValue={defaultBookValues && defaultBookValues.title}
                placeholder="e.g Notebook"
                {...register('title', {
                  required: 'Title is required',
                  minLength: { value: 4, message: 'Must be atleast 4 characters' },
                  maxLength: { value: 32, message: 'Must be maximum 32 characters' },
                })}
              />
              {errors.title && <Form.Text className="text-danger">{errors.title.message}</Form.Text>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                defaultValue={defaultBookValues && defaultBookValues.price}
                placeholder="100"
                type="number"
                {...register('price', {
                  required: 'Price is required',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Only valid numbers are allowed',
                  },
                })}
              />
              {errors.price && <Form.Text className="text-danger">{errors.price.message}</Form.Text>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                defaultValue={defaultBookValues && defaultBookValues.category}
                placeholder="e.g Love Story"
                {...register('category', {
                  required: 'Category is required',
                  minLength: { value: 4, message: 'Must be atleast 4 characters' },
                  maxLength: { value: 32, message: 'Must be maximum 32 characters' },
                })}
              />
              {errors.category && <Form.Text className="text-danger">{errors.category.message}</Form.Text>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={defaultBookValues && defaultBookValues.description}
                placeholder="e.g summary of the book"
                {...register('description', {
                  required: 'Description is required',
                  minLength: { value: 4, message: 'Must be atleast 4 characters' },
                  maxLength: { value: 250, message: 'Must be maximum 250 characters' },
                })}
              />
              {errors.description && <Form.Text className="text-danger">{errors.description.message}</Form.Text>}
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >{`${isUpdating ? 'Update' : 'Add'} Book`}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
