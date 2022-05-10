import { render, screen } from '@testing-library/react';
import CustomThemeProvider from '../ProvideTheme';
import Typography from '.';

test('Render Text With Props', () => {
  render(
    <CustomThemeProvider>
      <Typography
        variant="h6"
        component="h1"
        color="primary"
        size="subheading"
        weight="normal"
      >
        Primary Text
      </Typography>
      <Typography
        variant="span"
        component="p"
        color="light"
        size="body2"
        weight="light"
      >
        Normal Text
      </Typography>
    </CustomThemeProvider>
  );

  const coloredTextContent = screen.getByText('Primary Text');
  const textContent = screen.getByText('Normal Text');

  expect(coloredTextContent).toBeInTheDocument();
  expect(textContent).toBeInTheDocument();

  expect(coloredTextContent).toHaveStyle(`
    font-weight: 500;
    font-size: 18px;
    font-size: 2rem;
    color: #0d47a1;
  `);

  expect(textContent).toHaveStyle(`
    font-weight: 300;
    font-size: 2rem;
    font-size: 14px;
    color: #424242;
  `);

  expect(coloredTextContent).toHaveClass('MuiTypography-h6');
  expect(textContent).toHaveClass('MuiTypography-span');
});
