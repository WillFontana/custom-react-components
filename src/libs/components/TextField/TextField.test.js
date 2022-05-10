import { render, screen, within } from '@testing-library/react';

import CustomThemeProvider from '../ProvideTheme';
import TextField from '.';

test('Renders TexField Component', () => {
  render(
    <CustomThemeProvider>
      <TextField data-testid="textfield" name="textfield" label="Text field" />
    </CustomThemeProvider>
  );

  const inputContainer = screen.getByTestId('textfield');
  const labelContainer = within(inputContainer).getByLabelText('Text field');
  const inputComponent = within(inputContainer).getByRole('textbox');

  expect(inputContainer).toBeInTheDocument();
  expect(labelContainer).toBeInTheDocument();
  expect(inputComponent).toBeInTheDocument();

  expect(inputComponent.getAttribute('name')).toBe('textfield');
});

test('Renders disabled TextField Component', () => {
  render(
    <CustomThemeProvider>
      <TextField
        data-testid="disabled-textfield"
        name="disabled-textfield"
        label="Disabled Text Field"
        disabled
      />
    </CustomThemeProvider>
  );

  const inputComponent = screen.getByRole('textbox');
  expect(inputComponent).toBeDisabled();
});

test('Renders TextField Component With Error', () => {
  render(
    <CustomThemeProvider>
      <TextField
        data-testid="error-textfield"
        name="error-textfield"
        label="Error text field"
        error
        errorLabel="The field contain errors"
      />
    </CustomThemeProvider>
  );

  const errorLabel = screen.getByText('The field contain errors');
  expect(errorLabel).toBeInTheDocument();
  expect(errorLabel).toHaveStyle(`
      color: #d32f2f;
  `);
});
