import { render, screen } from '@testing-library/react';
import CustomThemeProvider from '.';
import Typography from '../Typography';

test('Render Text With Props', () => {
  render(
    <CustomThemeProvider>
      <Typography color="secondary">Secondary color text</Typography>
    </CustomThemeProvider>
  );

  const coloredTextContent = screen.getByText('Secondary color text');
  expect(coloredTextContent).toBeInTheDocument();
  expect(coloredTextContent).toHaveStyle(`
    color: #f57c00;
  `);
});
