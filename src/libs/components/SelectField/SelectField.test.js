import { fireEvent, render, screen, within } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";

import Autocomplete from ".";
import CustomThemeProvider from "../ProvideTheme";

const mockOptions = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
];

test("Render Autocomplete", async () => {
  render(
    <CustomThemeProvider>
      <Autocomplete
        data-testid="autocomplete"
        name="autocomplete"
        label="Autocomplete"
        options={mockOptions}
      />
    </CustomThemeProvider>
  );

  const autoComplete = screen.getByTestId("autocomplete");
  const input = within(autoComplete).getByRole("combobox");
  expect(autoComplete).toBeInTheDocument();

  autoComplete.focus();
  fireEvent.change(input, { target: { value: "Option " } });
  await wait();
  fireEvent.keyDown(autoComplete, { key: "ArrowDown" });
  await wait();
  fireEvent.keyDown(autoComplete, { key: "Enter" });
  await wait();
  expect(input.value).toEqual("Option 2");
});

test("Render Multiple Autocomplete", async () => {
  render(
    <CustomThemeProvider>
      <Autocomplete
        data-testid="multiple-autocomplete"
        name="multiple-autocomplete"
        label="Multiple autocomplete"
        options={mockOptions}
        multiple
      />
    </CustomThemeProvider>
  );

  const autoComplete = screen.getByTestId("multiple-autocomplete");
  const input = within(autoComplete).getByRole("combobox");
  expect(autoComplete).toBeInTheDocument();

  autoComplete.focus();
  fireEvent.change(input, { target: { value: "Option " } });
  await wait();

  // eslint-disable-next-line no-unused-vars
  for (const option of mockOptions) {
    fireEvent.keyDown(autoComplete, { key: "Enter" });
    await wait();
    fireEvent.keyDown(autoComplete, { key: "ArrowDown" });
    await wait();
  }

  const cancelIcons = within(autoComplete).getAllByTestId("CancelIcon");
  expect(cancelIcons).toHaveLength(3);
});

test("Render Error and Disabled Autocomplete", () => {
  render(
    <CustomThemeProvider>
      <Autocomplete
        data-testid="disabled-autocomplete"
        name="disabled-autocomplete"
        label="Disabled Autocomplete"
        options={mockOptions}
        disabled
      />
      <Autocomplete
        data-testid="error-autocomplete"
        name="error-autocomplete"
        label="Error Autocomplete"
        options={mockOptions}
        error
        errorLabel="Invalid chosen option"
      />
    </CustomThemeProvider>
  );

  const disabledAutoComplete = screen.getByTestId("disabled-autocomplete");
  const errorAutoComplete = screen.getByTestId("error-autocomplete");
  const disabledInput = within(disabledAutoComplete).getByRole("combobox");
  const errorLabel = within(errorAutoComplete).getByText(
    "Invalid chosen option"
  );

  expect(disabledInput).toBeDisabled();
  expect(errorLabel).toBeInTheDocument();
  expect(errorLabel).toHaveStyle(`
      color: #d32f2f;
  `);
});
