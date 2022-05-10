import React from 'react';
import { IconButton, InputAdornment as MuiInputAdornment } from '@mui/material';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import PropTypes from 'prop-types';

export function InputAdornment({ adornmentIcon, handleAction }) {
  return (
    <MuiInputAdornment position="end">
      <IconButton
        onClick={() => handleAction()}
        onMouseDown={(event) => event.preventDefault()}
      >
        {adornmentIcon}
      </IconButton>
    </MuiInputAdornment>
  );
}

export function PasswordAdornment({ passwordVisible, setPasswordVisible }) {
  return (
    <MuiInputAdornment position="end">
      <IconButton
        onClick={() => setPasswordVisible(!passwordVisible)}
        onMouseDown={(event) => event.preventDefault()}
      >
        {passwordVisible ? <IoMdEyeOff /> : <IoMdEye />}
      </IconButton>
    </MuiInputAdornment>
  );
}

InputAdornment.propTypes = {
  adornmentIcon: PropTypes.node.isRequired,
  handleAction: PropTypes.func.isRequired,
};

PasswordAdornment.propTypes = {
  passwordVisible: PropTypes.bool.isRequired,
  setPasswordVisible: PropTypes.func.isRequired,
};
