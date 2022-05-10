import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledTextField from './styles';
import {
  PasswordAdornment,
  InputAdornment as Customtest,
} from './InputAdornment';

function TextField({
  adornmentIcon,
  disabled,
  error,
  errorLabel,
  handleAction,
  handleChange,
  label,
  name,
  maxRows,
  minRows,
  onChange,
  password,
  textarea,
  ...props
}) {
  const [passwordVisible, setPasswordVisible] = useState(!!password);

  const handleErrorLabel = () => (error && errorLabel ? errorLabel : null);

  const handleAdornment = () =>
    password ? (
      <PasswordAdornment
        passwordVisible={passwordVisible}
        setPasswordVisible={setPasswordVisible}
      />
    ) : (
      handleAction && (
        <Customtest adornmentIcon={adornmentIcon} handleAction={handleAction} />
      )
    );

  return (
    <StyledTextField
      disabled={disabled}
      error={error}
      helperText={handleErrorLabel()}
      InputProps={{ endAdornment: handleAdornment() }}
      label={label}
      maxRows={maxRows}
      minRows={minRows}
      multiline={textarea}
      name={name}
      onChange={(event) => {
        if (onChange) {
          onChange(event);
        }

        if (handleChange) {
          handleChange(event.target.value);
        }
      }}
      type={password && !passwordVisible ? 'password' : 'text'}
      {...props}
    />
  );
}

TextField.defaultProps = {
  adornmentIcon: null,
  maxRows: 6,
  minRows: 2,
  disabled: false,
  error: false,
  errorLabel: '',
  password: false,
  textarea: false,
  handleAction: null,
  handleChange: null,
  onChange: null,
};

TextField.propTypes = {
  adornmentIcon: PropTypes.node,

  maxRows: PropTypes.number,
  minRows: PropTypes.number,

  disabled: PropTypes.bool,
  error: PropTypes.bool,
  password: PropTypes.bool,
  textarea: PropTypes.bool,

  handleAction: PropTypes.func,
  handleChange: PropTypes.func,
  onChange: PropTypes.func,

  errorLabel: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextField;
