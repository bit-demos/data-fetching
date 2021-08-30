import React from 'react';
import { BasicThemeUsage } from './theme-context.compositions';
import { render } from '@testing-library/react';

describe('ThemeProvider', () => {
  it('should render the button in the color blue', () => {
    const { getByText } = render((
      <BasicThemeUsage />
    ));

    const rendered = getByText('this should be blue');  
    expect(rendered).toBeTruthy();
  });
});
