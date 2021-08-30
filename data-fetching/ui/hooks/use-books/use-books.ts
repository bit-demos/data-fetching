import { useState } from 'react';
import { Book } from '@learn-bit-react/data-fetching.models.book';

export function useBooks(): [() => void, Book[], boolean] {
  const [books, setBooks] = useState<Book[]>();
  const [isLoading, setIsLoading] = useState(false);

  function getBooks() {
    setIsLoading(true);

    fetch('https://api.openbrewerydb.org/breweries?by_city=san_francisco').then(
      (response) => {
        response.json().then((rawBooks: any) => {
          setBooks(rawBooks.map((rawBook: any) => new Book(rawBook.name)));
          setIsLoading(false);
        });
      }
    );
  }

  return [getBooks, books, isLoading];
}
