import React from 'react';
import { Book } from '@learn-bit-react/data-fetching.ui.book';
import { Book as BookModel } from '@learn-bit-react/data-fetching.models.book';
import styles from './book-list.module.css';

export type BookListProps = {
  /**
   * the array of books
   */
  books: BookModel[];
  /**
   * a color to theme the text.
   */
  color?: string;
};

export function BookList({ books, color }: BookListProps) {
  return (
    <div className={styles.list}>
      {books.map((book, index) => (
        <Book book={book} key={index} style={{ color: color }}></Book>
      ))}
    </div>
  );
}
