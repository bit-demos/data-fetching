import React, { HTMLAttributes } from 'react';
import { Book as BookModel } from '@learn-bit-react/data-fetching.models.book';

export type BookProps = {
  /**
   * a text to be rendered in the component.
   */
  book: BookModel;
} & HTMLAttributes<HTMLDivElement>;

export function Book({ book, style }: BookProps) {
  return (
    <div style={style}>
      {book.name} (Title size is {book.getTitleSize()})
    </div>
  );
}
