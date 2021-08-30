import { Book } from './book';

describe('Book', () => {
  it('should create a new book', () => {
    const book = new Book('hard things');
    expect(book.name).toEqual('hard things');
  });
});
