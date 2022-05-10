import { render, screen } from '@testing-library/react';
import Button from '.';
import CustomThemeProvider from '../ProvideTheme';

test('Renders default and custom button', () => {
  render(
    <CustomThemeProvider>
      <Button
        filltype="outlined"
        severity="error"
        size="large"
        type="floating"
        anchor={{
          top: '20px',
          left: 0,
          right: 0,
          bottom: '100%',
        }}
      >
        Customized Button
      </Button>
      <Button>Default Button</Button>
    </CustomThemeProvider>
  );

  const customButton = screen.getByText(/Customized Button/i);
  const defaultButton = screen.getByText(/Default Button/i);

  expect(defaultButton).toBeInTheDocument();
  expect(customButton).toHaveStyle(`
        transform: scale(.95);
        background-color: #ffffff00;
        border: 2px solid #d32f2f;
        color: #d32f2f;
        padding: 10.4px 19.2px;
        font-size: 15px;
        max-height: 50px;
        min-height: 50px;
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        bottom: 100%;
        padding: 6px 16px;
        position: relative;
        background-color: transparent;
        border: 0px;
        font-size: 1.4rem;
  `);
});

test('Renders loading and disabled button', () => {
  render(
    <CustomThemeProvider>
      <Button loading loadingText="Carregando Aguarde">
        Primary Button
      </Button>
    </CustomThemeProvider>
  );
  const buttonContent = screen.getByText(/Carregando Aguarde/i);
  const progressIcon = screen.getByRole('progressbar');

  expect(buttonContent).toBeDisabled();
  expect(buttonContent).toBeInTheDocument();
  expect(progressIcon).toBeInTheDocument();
});
