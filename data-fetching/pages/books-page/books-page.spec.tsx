import React from 'react';
import { render } from '@testing-library/react';
import { BasicBooksPage } from './books-page.composition';

describe('books-page', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicBooksPage />);
    const rendered = getByText('no books found');
    expect(rendered).toBeTruthy();
  });
});
