import { mockBook } from '@learn-bit-react/data-fetching.models.book';
import React from 'react';
import { Book } from './book';

export const BasicBook = () => {
  const book = mockBook();
  return <Book book={book} />;
};
