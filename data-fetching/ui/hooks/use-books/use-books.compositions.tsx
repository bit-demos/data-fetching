import React, { useContext, useEffect, useState } from 'react';
import { useBooks } from './use-books';
import { BookList } from '@learn-bit-react/data-fetching.ui.book-list';

export const BasicBookList = () => {
  const [getBooks, books, isLoading] = useBooks();
  useEffect(() => getBooks(), []);

  if (isLoading) {
    return <div>loading....</div>;
  }
  if (!books) return <div>no books found</div>;

  return <BookList books={books} />;
};
