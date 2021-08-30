import React, { useEffect } from 'react';
import { useBooks } from '@learn-bit-react/data-fetching.ui.hooks.use-books';
import {
  BookList,
  BookListProps
} from '@learn-bit-react/data-fetching.ui.book-list';

export function BooksPage() {
  const [getBooks, books] = useBooks();

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    getBooks();
  }

  return (
    <>
      {books ? (
        <BookList books={books} />
      ) : (
        <>
          <div>no books found</div>
          <button onClick={handleClick}>get some books</button>
        </>
      )}
    </>
  );
}
