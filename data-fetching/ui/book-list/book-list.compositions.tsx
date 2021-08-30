import React, { useContext, useEffect, useState } from 'react';
import { useBooks } from '@learn-bit-react/data-fetching.ui.hooks.use-books';
import {
  ThemeProvider,
  ThemeContext
} from '@learn-bit-react/data-fetching.ui.theme-context';
import { BookList, BookListProps } from './book-list';

const ThemedBookList = ({ books }: BookListProps) => {
  const theme = useContext(ThemeContext);
  return <BookList books={books} color={theme.color} />;
};

export const BasicBookList = () => {
  const [getBooks, books] = useBooks();
  useEffect(() => getBooks(), []);

  if (!books) return <div>no books found</div>;

  return <BookList books={books} />;
};

export const ThemedBasicBookList = () => {
  const [getBooks, books] = useBooks();
  useEffect(() => getBooks(), []);

  if (!books) return <div>no books found</div>;

  return (
    <ThemeProvider color="red">
      <ThemedBookList books={books} />
    </ThemeProvider>
  );
};
