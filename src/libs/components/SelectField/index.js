import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledTextField from '../TextField/styles';
import StyledAutoComplete from './styles';

function Autocomplete({
  disabled,
  error,
  errorLabel,
  handleChange,
  handleInputChange,
  label,
  onInputChange,
  onChange,
  options,
  multiple,
  name,
  noOptionsText,
  ...props
}) {
  const handleErrorLabel = () => (error && errorLabel ? errorLabel : null);

  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <StyledAutoComplete
      autoHighlight
      disabled={disabled}
      disableCloseOnSelect={multiple}
      disablePortal
      getOptionLabel={(option) => option.label || ''}
      inputValue={inputValue}
      multiple={multiple}
      name={name}
      noOptionsText={noOptionsText}
      onChange={(event, newValue) => {
        setValue(newValue);
        if (onChange) {
          onChange(event);
        }
        if (handleChange) {
          handleChange(newValue);
        }
      }}
      onInputChange={(event, newValue) => {
        setInputValue(newValue);
        if (onInputChange) {
          onInputChange(event);
        }
        if (handleInputChange) {
          handleInputChange(newValue);
        }
      }}
      options={options}
      renderInput={(params) => (
        <StyledTextField
          error={error}
          helperText={handleErrorLabel()}
          label={label}
          value={value}
          {...params}
        />
      )}
      {...props}
    />
  );
}

Autocomplete.defaultProps = {
  disabled: false,
  error: false,
  errorLabel: '',
  handleChange: null,
  handleInputChange: null,
  onInputChange: null,
  onChange: null,
  multiple: false,
  noOptionsText: 'Nenhuma opção válida',
};

Autocomplete.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorLabel: PropTypes.string,
  handleChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  onInputChange: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  noOptionsText: PropTypes.string,
};

export default Autocomplete;
