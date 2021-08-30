import React from 'react';
import { render } from '@testing-library/react';
import { BasicBook } from './book.composition';

describe('Book', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicBook />);
    const rendered = getByText('Harry Potter (Title size is 12)');
    expect(rendered).toBeTruthy();
  });
});
