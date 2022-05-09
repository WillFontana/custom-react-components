import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import StyledTextField from "./styles";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import PropTypes from "prop-types";

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
  const [passwordVisible, setPasswordVisible] = useState(
    password ? true : false
  );

  const Adornment = () => {
    if (password) {
      return (
        <InputAdornment position="end">
          <IconButton
            onClick={() => setPasswordVisible(!passwordVisible)}
            onMouseDown={(event) => event.preventDefault()}
          >
            {passwordVisible ? <IoMdEyeOff /> : <IoMdEye />}
          </IconButton>
        </InputAdornment>
      );
    }

    return handleAction ? (
      <InputAdornment position="end">
        <IconButton
          onClick={() => handleAction()}
          onMouseDown={(event) => event.preventDefault()}
        >
          {adornmentIcon}
        </IconButton>
      </InputAdornment>
    ) : null;
  };

  const handleErrorLabel = () => (error && errorLabel ? errorLabel : null);

  return (
    <StyledTextField
      disabled={disabled}
      error={error}
      helperText={handleErrorLabel()}
      InputProps={{ endAdornment: <Adornment /> }}
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
      type={password && !passwordVisible ? "password" : "text"}
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
  errorLabel: "",
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
